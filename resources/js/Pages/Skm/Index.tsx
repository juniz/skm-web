import SkmLayout from "@/Layouts/SkmLayout";
import CekRm from "./CekRm";
import { useState } from "react";
import DataDiri from "./DataDiri";
import Survei from "./Survei";
import { FormEvent } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { delay, motion } from "motion/react";
import { router } from "@inertiajs/react";
import { set } from "react-hook-form";

export default function Index() {
	const { toast } = useToast();
	const [page, setPage] = useState(1);
	const [data, setData] = useState({
		no_rm: "",
		nama: "",
		telp: "",
		jk: "",
		pendidikan: "",
		pekerjaan: "",
		jns_layanan: "",
		p1: "",
		p2: "",
		p3: "",
		p4: "",
		p5: "",
		p6: "",
		p7: "",
		p8: "",
		p9: "",
		saran: "",
	});

	const [error, setError] = useState({
		no_rm: "",
		nama: "",
		telp: "",
		jk: "",
		pendidikan: "",
		pekerjaan: "",
		jns_layanan: "",
		p1: "",
		p2: "",
		p3: "",
		p4: "",
		p5: "",
		p6: "",
		p7: "",
		p8: "",
		p9: "",
		saran: "",
	});

	const transisition = {
		duration: 0.5,
		ease: [0, 0.71, 0.2, 1.01],
		delay: 0.5,
	};

	const changePage = (page: number) => {
		setPage(page);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.name, e.target.value);
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const cekRm = () => {
		setError({
			...error,
			no_rm: "",
		});
		if (data.no_rm === "") {
			setError({
				...error,
				no_rm: "No. Rekam Medis Tidak Boleh Kosong",
			});
			return;
		}
		axios
			.get("/api/cek-rm", {
				params: {
					no_rm: data.no_rm,
				},
			})
			.then((response) => {
				if (response.data.data.length === 0) {
					toast({
						variant: "destructive",
						title: "Data Pasien Tidak Ditemukan.",
						description: "Pastikan No. Rekam Medis Sudah Benar",
					});
					setData({
						...data,
						no_rm: "",
					});
					return;
				}
				setPage(2);
			})
			.catch((error) => {
				console.log(error);
				toast({
					variant: "destructive",
					title: "Terjadi Kesalahan",
					description: "Silahkan Coba Lagi",
				});
			});
	};

	const submit = (e: FormEvent) => {
		e.preventDefault();
		setError({
			...error,
			nama: "",
			telp: "",
			jk: "",
			pendidikan: "",
		});
		// data.jk === "" &&
		// 	setError({
		// 		...error,
		// 		jk: "Jenis Kelamin Tidak Boleh Kosong",
		// 	});
		// data.pendidikan === "" &&
		// 	setError({
		// 		...error,
		// 		pendidikan: "Pendidikan Tidak Boleh Kosong",
		// 	});
		console.log(data);
	};

	const submitDataDiri = (e: FormEvent) => {
		e.preventDefault();
		setError({
			...error,
			nama: data.nama === "" ? "Nama Tidak Boleh Kosong" : "",
			telp: data.telp === "" ? "No. Telepon Tidak Boleh Kosong" : "",
			jk: data.jk === "" ? "Jenis Kelamin Tidak Boleh Kosong" : "",
			pendidikan: data.pendidikan === "" ? "Pendidikan Tidak Boleh Kosong" : "",
		});
		setPage(3);
	};

	const submitSurvei = (e: FormEvent) => {
		e.preventDefault();
		setError({
			...error,
			p1: data.p1 === "" ? "Pertanyaan 1 Tidak Boleh Kosong" : "",
			p2: data.p2 === "" ? "Pertanyaan 2 Tidak Boleh Kosong" : "",
			p3: data.p3 === "" ? "Pertanyaan 3 Tidak Boleh Kosong" : "",
			p4: data.p4 === "" ? "Pertanyaan 4 Tidak Boleh Kosong" : "",
			p5: data.p5 === "" ? "Pertanyaan 5 Tidak Boleh Kosong" : "",
			p6: data.p6 === "" ? "Pertanyaan 6 Tidak Boleh Kosong" : "",
			p7: data.p7 === "" ? "Pertanyaan 7 Tidak Boleh Kosong" : "",
			p8: data.p8 === "" ? "Pertanyaan 8 Tidak Boleh Kosong" : "",
			p9: data.p9 === "" ? "Pertanyaan 9 Tidak Boleh Kosong" : "",
		});

		axios
			.post("/skm", data)
			.then((response) => {
				toast({
					variant: "default",
					title: "Data Berhasil Disimpan",
					description: "Terima Kasih",
				});
				delay(() => {
					setPage(1);
					setData({
						no_rm: "",
						nama: "",
						telp: "",
						jk: "",
						pendidikan: "",
						pekerjaan: "",
						jns_layanan: "",
						p1: "",
						p2: "",
						p3: "",
						p4: "",
						p5: "",
						p6: "",
						p7: "",
						p8: "",
						p9: "",
						saran: "",
					});
				}, 200);
			})
			.catch((error) => {
				console.log(error);
				toast({
					variant: "destructive",
					title: "Terjadi Kesalahan",
					description: "Silahkan Coba Lagi",
				});
			});
	};

	return (
		<>
			<SkmLayout>
				{page === 1 && (
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						transition={transisition}
					>
						<CekRm
							changePage={changePage}
							data={data}
							handleChange={handleChange}
							cekRm={cekRm}
							error={error}
						/>
					</motion.div>
				)}
				{page === 2 && (
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						transition={transisition}
					>
						<DataDiri
							changePage={changePage}
							data={data}
							handleChange={handleChange}
							error={error}
							submitDataDiri={submitDataDiri}
						/>
					</motion.div>
				)}
				{page === 3 && (
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: 100 }}
						transition={transisition}
					>
						<Survei
							data={data}
							handleChange={handleChange}
							error={error}
							submit={submitSurvei}
							changePage={changePage}
						/>
					</motion.div>
				)}
			</SkmLayout>
		</>
	);
}
