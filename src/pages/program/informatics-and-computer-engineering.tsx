import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import InformaticsAndComputerEngineeringView from "@/views/programs/informatics-and-computer-engineering/InformaticsAndComputerEngineering";

export default function ICEngineering() {
	return (
		<>
			<Head>
				<title>Pascasarjana PENS | Informatics and Computer Engineering</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<InformaticsAndComputerEngineeringView />
			</MainLayout>
		</>
	);
}
