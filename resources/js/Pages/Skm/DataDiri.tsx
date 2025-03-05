import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { useState, useEffect } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/Components/ui/select";

import axios from "axios";

export default function DataDiri(props: any) {
	interface Bangsal {
		nm_bangsal: string;
	}
	const [bangsal, setBangsal] = useState<Bangsal[]>([]);

	const layanan = [
		"POLIKLINIK",
		"IGD",
		"FLAMBOYAN",
		"DAHLIA",
		"ANGGREK",
		"NEONATUS",
	];

	const pekerjaan = ["PNS", "Swasta", "TNI", "Wirausaha", "POLRI"];

	const pendidikan = [
		"SD Kebawah",
		"SMP",
		"SMA/SMK Sederajat",
		"S1",
		"S2",
		"S3",
		"Lainnya",
	];

	useEffect(() => {
		axios.get("bangsal").then((res) => {
			setBangsal(res.data.data);
		});
	}, []);

	const backPage = () => props.changePage(1);
	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Data Diri</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={props.submitDataDiri}>
						<div className="grid grid-cols-1 gap-2 items-center sm:grid-cols-4">
							<Label htmlFor="nama">Nama Lengkap</Label>
							<Input
								id="nama"
								name="nama"
								placeholder=""
								className="w-full col-span-3"
								value={props.data.nama}
								onChange={props.handleChange}
								required={true}
							/>
							{props.error.nama && (
								<span className="text-red-500 text-sm text-muted">
									{props.error.nama}
								</span>
							)}
						</div>
						<div className="grid grid-cols-1 gap-2 items-center mt-4 sm:grid-cols-4">
							<Label htmlFor="telp">No. Telepon</Label>
							<Input
								id="telp"
								name="telp"
								placeholder=""
								className="w-full col-span-3"
								value={props.data.telp}
								onChange={props.handleChange}
								required={true}
							/>
							{props.error.telp && (
								<span className="text-red-500 text-sm text-muted">
									{props.error.telp}
								</span>
							)}
						</div>
						<div className="grid grid-cols-1 gap-2 items-center mt-4 sm:grid-cols-4">
							<Label htmlFor="jk">Jenis Kelamin</Label>
							<Select
								name="jk"
								required={true}
								value={props.data.jk}
								onValueChange={(value) =>
									props.handleChange({
										target: { name: "jk", value: value },
									})
								}
							>
								<SelectTrigger className="w-full col-span-3">
									<SelectValue placeholder="Pilih Jenis Kelamin" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="L">Laki-laki</SelectItem>
									<SelectItem value="P">Perempuan</SelectItem>
								</SelectContent>
							</Select>
							{props.error.jk && (
								<span className="text-red-500 text-sm text-muted">
									{props.error.jk}
								</span>
							)}
						</div>
						<div className="grid grid-cols-1 gap-2 items-center mt-4 sm:grid-cols-4">
							<Label htmlFor="pendidikan">Pendidikan</Label>
							<Select
								required={true}
								value={props.data.pendidikan}
								onValueChange={(value) =>
									props.handleChange({
										target: { name: "pendidikan", value: value },
									})
								}
							>
								<SelectTrigger className="w-full col-span-3">
									<SelectValue placeholder="Pilih Pendidikan" />
								</SelectTrigger>
								<SelectContent>
									{pendidikan.map((item, index) => (
										<SelectItem key={index} value={item}>
											{item}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							{props.error.pendidikan && (
								<span className="text-red-500 text-sm text-muted">
									{props.error.pendidikan}
								</span>
							)}
						</div>
						<div className="grid grid-cols-1 gap-2 items-center mt-4 sm:grid-cols-4">
							<Label htmlFor="pekerjaan">Pekerjaan</Label>
							<Select
								required={true}
								onValueChange={(value) =>
									props.handleChange({
										target: { name: "pekerjaan", value: value },
									})
								}
								value={props.data.pekerjaan}
							>
								<SelectTrigger
									id="pekerjaan"
									name="pekerjaan"
									className="w-full col-span-3"
								>
									<SelectValue placeholder="Pilih Pekerjaan" />
								</SelectTrigger>
								<SelectContent>
									{pekerjaan.map((item, index) => (
										<SelectItem key={index} value={item}>
											{item}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							{props.error.pekerjaan && (
								<span className="text-red-500 text-sm text-muted">
									{props.error.pekerjaan}
								</span>
							)}
						</div>
						<div className="grid grid-cols-1 gap-2 items-center mt-4 sm:grid-cols-4">
							<Label htmlFor="jns_layanan">Jenis Layanan Yang Diterima</Label>
							<Select
								required={true}
								value={props.data.jns_layanan}
								onValueChange={(value) =>
									props.handleChange({
										target: { name: "jns_layanan", value: value },
									})
								}
							>
								<SelectTrigger
									id="jns_layanan"
									name="jns_layanan"
									className="w-full col-span-3"
								>
									<SelectValue placeholder="Pilih Jenis Layanan" />
								</SelectTrigger>
								<SelectContent>
									{bangsal.map((item, index) => (
										<SelectItem key={index} value={item.nm_bangsal}>
											{item.nm_bangsal}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							{props.error.jns_layanan && (
								<span className="text-red-500 text-sm text-muted">
									{props.error.jns_layanan}
								</span>
							)}
						</div>
						<div className="flex flex-row justify-between mt-4">
							<Button variant="outline" type="button" onClick={backPage}>
								Kembali
							</Button>
							<Button type="submit">Lanjut</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</>
	);
}
