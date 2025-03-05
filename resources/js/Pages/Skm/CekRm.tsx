import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";
import { useState } from "react";

export default function CekRm(props: any) {
	const [rm, setRm] = useState("");

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Cek No. Rekam Medis</CardTitle>
				</CardHeader>
				<CardContent>
					<Label htmlFor="no_rm">No. Rekam Medis</Label>
					<Input
						id="no_rm"
						name="no_rm"
						placeholder=""
						className="w-full"
						value={props.data.no_rm}
						onChange={props.handleChange}
					/>
					{props.error.no_rm && (
						<span className="text-red-500 text-sm text-muted">
							{props.error.no_rm}
						</span>
					)}
				</CardContent>
				<CardFooter>
					<Button onClick={props.cekRm}>Lanjut</Button>
				</CardFooter>
			</Card>
		</>
	);
}
