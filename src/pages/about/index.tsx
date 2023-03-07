import MainLayout from "@/layouts/MainLayout";
import AboutView from "@/views/about/About";
import Head from "next/head";
import React from "react";

function About() {
	return (
		<>
			<Head>
				<title>Pascasarjana PENS | About Postgraduate</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<AboutView />
			</MainLayout>
		</>
	);
}

export default About;
