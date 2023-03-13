import Head from "next/head";
import AdministratorLayout from "@/layouts/AdministratorLayout";
import AdminAboutViews from "@/views/admin/users/About/About";

function Admin() {
	return (
		<>
			<Head>
				<title>Pascasarjana PENS | Admin | Detail of Research and Innovation</title>
				<meta
					name="description"
					content="Administrator Page of Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AdministratorLayout>
				<AdminAboutViews />
			</AdministratorLayout>
		</>
	);
}

export default Admin;
