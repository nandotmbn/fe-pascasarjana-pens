import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Program() {
	const router = useRouter();
	useEffect(() => {
		if (typeof window === "undefined") return;
		router.replace("/program/electrical-engineering");
	}, [router]);
	return (
		<>
			<Head>
				<title>Pascasarjana PENS | Program</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<div></div>
			</MainLayout>
		</>
	);
}
