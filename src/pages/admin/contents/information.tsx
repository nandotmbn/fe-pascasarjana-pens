import Head from "next/head";
import AdministratorLayout from "@/layouts/AdministratorLayout";
import AdminInformationViews from "@/views/admin/contents/Information/Information";

function Admin() {
	return (
		<>
			<Head>
				<title>Pascasarjana PENS | Admin | Content of Information</title>
				<meta
					name="description"
					content="Administrator Page of Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AdministratorLayout>
				<AdminInformationViews />
			</AdministratorLayout>
		</>
	);
}

export default Admin;
