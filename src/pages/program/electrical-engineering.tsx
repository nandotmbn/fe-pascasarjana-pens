import Head from "next/head";
import MainLayout from "@/layouts/MainLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ElectricalEngineeringView from "@/views/programs/electrical-engineering/ElectricalEngineering";

export default function ElectricalEngineering() {
	return (
		<>
			<Head>
				<title>Pascasarjana PENS | Electrical Engineering</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<ElectricalEngineeringView />
			</MainLayout>
		</>
	);
}
