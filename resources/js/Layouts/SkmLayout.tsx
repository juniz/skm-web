import { PropsWithChildren } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card";
import { Toaster } from "@/Components/ui/toaster";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function SkmLayout({ children }: PropsWithChildren) {
	// const { app } = usePage().props;
	return (
		<div className="flex flex-col min-h-svh w-full items-center justify-center p-6 space-y-6 md:p-10">
			<Head title="SKM" />
			<h5 className="font-bold text-2xl">SURVEI KEPUASAN MASYARAKAT</h5>
			<div className="w-full max-w-5xl">{children}</div>
			<Toaster />
		</div>
	);
}
