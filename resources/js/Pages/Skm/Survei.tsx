import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { useState } from "react";

export default function Survei(props: any) {
	const backPage = () => props.changePage(2);

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Survei</CardTitle>
				</CardHeader>
				<CardContent>
					<form onSubmit={props.submit}>
						<ol className="list-decimal text-sm mx-4 space-y-6">
							<li>
								<div className="flex flex-col space-y-4">
									<Label>
										Bagaimana Pendapat Saudara Tentang Kesesuaian Persyaratan
										Pelayanan Dengan Jenis Pelayanannya'
									</Label>
									<RadioGroup
										id="p1"
										name="p1"
										className="flex flex-col md:flex-row justify-between"
										value={props.data.p1}
										onValueChange={(value) =>
											props.handleChange({
												target: { name: "p1", value: value },
											})
										}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Tidak Sesuai" id="option-one-p1" />
											<Label htmlFor="option-one-p1">Tidak Sesuai</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Kurang Sesuai"
												id="option-two-p1"
											/>
											<Label htmlFor="option-two-p1">Kurang Sesuai</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Sesuai" id="option-three-p1" />
											<Label htmlFor="option-three-p1">Sesuai</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Sangat Sesuai"
												id="option-four-p1"
											/>
											<Label htmlFor="option-four-p1">Sangat Sesuai</Label>
										</div>
									</RadioGroup>
									{props.error.p1 && (
										<span className="text-red-500 text-sm text-muted">
											{props.error.p1}
										</span>
									)}
								</div>
							</li>
							<li>
								<div className="flex flex-col space-y-4">
									<Label>
										Bagaimana Pemahaman Saudara Tentang Kemudahan Prosedur
										Pelayanan Di Unit ini
									</Label>
									<RadioGroup
										id="p2"
										name="p2"
										className="flex flex-col md:flex-row justify-between"
										value={props.data.p2}
										onValueChange={(value) =>
											props.handleChange({
												target: { name: "p2", value: value },
											})
										}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Tidak Mudah" id="option-one-p2" />
											<Label htmlFor="option-one-p2">Tidak Mudah</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Kurang Mudah" id="option-two-p2" />
											<Label htmlFor="option-two-p2">Kurang Mudah</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Mudah" id="option-three-p2" />
											<Label htmlFor="option-three-p2">Mudah</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Sangat Mudah"
												id="option-four-p2"
											/>
											<Label htmlFor="option-four-p2">Sangat Mudah</Label>
										</div>
									</RadioGroup>
									{props.error.p2 && (
										<span className="text-red-500 text-sm text-muted">
											{props.error.p2}
										</span>
									)}
								</div>
							</li>
							<li>
								<div className="flex flex-col space-y-4">
									<Label>
										Bagaimana Pendapat Saudara Tentang Kecepatan Waktu Dalam
										Memberikan Pelayanan
									</Label>
									<RadioGroup
										id="p3"
										name="p3"
										className="flex flex-col md:flex-row justify-between"
										value={props.data.p3}
										onValueChange={(value) =>
											props.handleChange({
												target: { name: "p3", value: value },
											})
										}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Tidak Cepat" id="option-one-p3" />
											<Label htmlFor="option-one-p3">Tidak Cepat</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Kurang Cepat" id="option-two-p3" />
											<Label htmlFor="option-two-p3">Kurang Cepat</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Cepat" id="option-three-p3" />
											<Label htmlFor="option-three-p3">Cepat</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Sangat Cepat"
												id="option-four-p3"
											/>
											<Label htmlFor="option-four-p3">Sangat Cepat</Label>
										</div>
									</RadioGroup>
									{props.error.p3 && (
										<span className="text-red-500 text-sm text-muted">
											{props.error.p3}
										</span>
									)}
								</div>
							</li>
							<li>
								<div className="flex flex-col space-y-4">
									<Label>
										Bagaimana Pendapat Saudara Tentang Kewajaran Biaya / Tarif
										Dalam Pelayanan
									</Label>
									<RadioGroup
										id="p4"
										name="p4"
										className="flex flex-col md:flex-row justify-between"
										value={props.data.p4}
										onValueChange={(value) =>
											props.handleChange({
												target: { name: "p4", value: value },
											})
										}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Sangat Mahal" id="option-one-p4" />
											<Label htmlFor="option-one-p4">Sangat Mahal</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Cukup Mahal" id="option-two-p4" />
											<Label htmlFor="option-two-p4">Cukup Mahal</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Mahal" id="option-three-p4" />
											<Label htmlFor="option-three-p4">Mahal</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Gratis" id="option-four-p4" />
											<Label htmlFor="option-four-p4">Gratis</Label>
										</div>
									</RadioGroup>
									{props.error.p4 && (
										<span className="text-red-500 text-sm text-muted">
											{props.error.p4}
										</span>
									)}
								</div>
							</li>
							<li>
								<div className="flex flex-col space-y-4">
									<Label>
										Bagaimana Menurut Saudara Tentang Kesesuaian Produk
										Pelayanan Antara Yang Tercantum Dalam Standar Pelayanan
										Dengan Hasil Yang Diberikan
									</Label>
									<RadioGroup
										id="p5"
										name="p5"
										className="flex flex-col md:flex-row justify-between"
										value={props.data.p5}
										onValueChange={(value) =>
											props.handleChange({
												target: { name: "p5", value: value },
											})
										}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Tidak Sesuai" id="option-one-p5" />
											<Label htmlFor="option-one-p5">Tidak Sesuai</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Kurang Sesuai"
												id="option-two-p5"
											/>
											<Label htmlFor="option-two-p5">Kurang Sesuai</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Sesuai" id="option-three-p5" />
											<Label htmlFor="option-three-p5">Sesuai</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Sangat Sesuai"
												id="option-four-p5"
											/>
											<Label htmlFor="option-four-p5">Sangat Sesuai</Label>
										</div>
									</RadioGroup>
									{props.error.p5 && (
										<span className="text-red-500 text-sm text-muted">
											{props.error.p5}
										</span>
									)}
								</div>
							</li>
							<li>
								<div className="flex flex-col space-y-4">
									<Label>
										Bagaimana Pendapat Saudara Tentang Kompetensi / Kemampuan
										Petugas Dalam Pelayanan
									</Label>
									<RadioGroup
										id="p6"
										name="p6"
										className="flex flex-col md:flex-row justify-between"
										value={props.data.p6}
										onValueChange={(value) =>
											props.handleChange({
												target: { name: "p6", value: value },
											})
										}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Tidak Kompeten"
												id="option-one-p6"
											/>
											<Label htmlFor="option-one-p6">Tidak Kompeten</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Kurang Kompeten"
												id="option-two-p6"
											/>
											<Label htmlFor="option-two-p6">Kurang Kompeten</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Kompeten" id="option-three-p6" />
											<Label htmlFor="option-three-p6">Kompeten</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Sangat Kompeten"
												id="option-four-p6"
											/>
											<Label htmlFor="option-four-p6">Sangat Kompeten</Label>
										</div>
									</RadioGroup>
									{props.error.p6 && (
										<span className="text-red-500 text-sm text-muted">
											{props.error.p6}
										</span>
									)}
								</div>
							</li>
							<li>
								<div className="flex flex-col space-y-4">
									<Label>
										Bagaimana Pendapat Saudara Tentang Perilaku Petugas Terkait
										Kesopanan dan Keramahan
									</Label>
									<RadioGroup
										id="p7"
										name="p7"
										className="flex flex-col md:flex-row justify-between"
										value={props.data.p7}
										onValueChange={(value) =>
											props.handleChange({
												target: { name: "p7", value: value },
											})
										}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Tidak Sopan dan Ramah"
												id="option-one-p7"
											/>
											<Label htmlFor="option-one-p7">
												Tidak Sopan dan Ramah
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Kurang Sopan dan Ramah"
												id="option-two-p7"
											/>
											<Label htmlFor="option-two-p7">
												Kurang Sopan dan Ramah
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Sopan dan Ramah"
												id="option-three-p7"
											/>
											<Label htmlFor="option-three-p7">Sopan dan Ramah</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Sangat Sopan dan Ramah"
												id="option-four-p7"
											/>
											<Label htmlFor="option-four-p7">
												Sangat Sopan dan Ramah
											</Label>
										</div>
									</RadioGroup>
									{props.error.p7 && (
										<span className="text-red-500 text-sm text-muted">
											{props.error.p7}
										</span>
									)}
								</div>
							</li>
							<li>
								<div className="flex flex-col space-y-4">
									<Label>
										Bagaimana Pendapat Saudara Tentang Kualitas Sarana dan
										Prasarana
									</Label>
									<RadioGroup
										id="p8"
										name="p8"
										className="flex flex-col md:flex-row justify-between"
										value={props.data.p8}
										onValueChange={(value) =>
											props.handleChange({
												target: { name: "p8", value: value },
											})
										}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Buruk" id="option-one-p8" />
											<Label htmlFor="option-one-p8">Buruk</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Cukup" id="option-two-p8" />
											<Label htmlFor="option-two-p8">Cukup</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Baik" id="option-three-p8" />
											<Label htmlFor="option-three-p8">Baik</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Sangat Baik" id="option-four-p8" />
											<Label htmlFor="option-four-p8">Sangat Baik</Label>
										</div>
									</RadioGroup>
									{props.error.p8 && (
										<span className="text-red-500 text-sm text-muted">
											{props.error.p8}
										</span>
									)}
								</div>
							</li>
							<li>
								<div className="flex flex-col space-y-4">
									<Label>
										Bagaimana Pendapat Saudara Tentang Penanganan Pengaduan
										Pengguna Layanan
									</Label>
									<RadioGroup
										id="p9"
										name="p9"
										className="flex flex-col md:flex-row justify-between"
										value={props.data.p9}
										onValueChange={(value) =>
											props.handleChange({
												target: { name: "p9", value: value },
											})
										}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="Tidak Ada" id="option-one-p9" />
											<Label htmlFor="option-one-p9">Tidak Ada</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Ada Tetapi Tidak Berfungsi"
												id="option-two-p9"
											/>
											<Label htmlFor="option-two-p9">
												Ada Tetapi Tidak Berfungsi
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Berfungsi Kurang Maksimal"
												id="option-three-p9"
											/>
											<Label htmlFor="option-three-p9">
												Berfungsi Kurang Maksimal
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="Dikelola Dengan Baik"
												id="option-four-p9"
											/>
											<Label htmlFor="option-four-p9">
												Dikelola Dengan Baik
											</Label>
										</div>
									</RadioGroup>
									{props.error.p9 && (
										<span className="text-red-500 text-sm text-muted">
											{props.error.p9}
										</span>
									)}
								</div>
							</li>
						</ol>
						<div className="flex flex-col my-6 space-y-2">
							<Label htmlFor="telp">Saran</Label>
							<Input
								id="saran"
								name="saran"
								placeholder=""
								className="w-full col-span-3"
								value={props.data.saran}
								onChange={props.handleChange}
							/>
							{props.error.saran && (
								<span className="text-red-500 text-sm text-muted">
									{props.error.saran}
								</span>
							)}
						</div>
						<div className="flex flex-row justify-between">
							<Button variant="outline" type="button" onClick={backPage}>
								Kembali
							</Button>
							<Button type="submit">Simpan</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</>
	);
}
