import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Head from "next/head";
import AdministratorLayout from "@/layouts/AdministratorLayout";
import { useRouter } from "next/router";
import AdminNewsViews from "@/views/admin/contents/News/News";

const MDEditor: any = dynamic(() => import("@uiw/react-md-editor"), {
	ssr: false,
});

function Admin() {
	const [value, setValue] = useState("**Hello world!!!**");
	return (
		<>
			<Head>
			<title>Pascasarjana PENS | Admin | Content of News</title>
				<meta
					name="description"
					content="Administrator Page of Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AdministratorLayout>
				<AdminNewsViews />
			</AdministratorLayout>
			{/* <MDEditor value={value} onChange={setValue} /> */}
		</>
	);
}

export default Admin;
