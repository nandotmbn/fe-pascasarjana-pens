/* eslint-disable react/no-unescaped-entities */
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import Head from "next/head";
import AdministratorLayout from "@/layouts/AdministratorLayout";
import AdminResearchAndPublicationViews from "@/views/admin/users/ResearchAndPublication/ResearchAndPublication";


function Admin() {
	return (
		<>
			<Head>
				<title>Pascasarjana PENS | Admin | Users Research and Publications</title>
				<meta
					name="description"
					content="Administrator Page of Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AdministratorLayout>
				<AdminResearchAndPublicationViews />
			</AdministratorLayout>
		</>
	);
}

export default Admin;
