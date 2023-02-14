import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
	return (
		<>
			<Head>
				<title>Pascasarjana PENS</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<div className="absolute inset-0 h-screen w-screen flex flex-col items-center justify-center">
          <p>404</p>
					<p>Page is Not Found</p>
				</div>
			</MainLayout>
		</>
	);
}
