import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import Head from "next/head";
import AdministratorLayout from "@/layouts/AdministratorLayout";
import ListViews from "@/views/admin/users/List/List";

const MDEditor: any = dynamic(() => import("@uiw/react-md-editor"), {
	ssr: false,
});

function Admin() {
	return (
		<>
			<Head>
				<title>Pascasarjana PENS | List</title>
				<meta
					name="description"
					content="Administrator Page of Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AdministratorLayout>
				<ListViews />
			</AdministratorLayout>
			{/* <MDEditor value={value} onChange={setValue} /> */}
		</>
	);
}

export default Admin;
