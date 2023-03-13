import Head from "next/head";
import AdministratorLayout from "@/layouts/AdministratorLayout";
import AdminListViews from "@/views/admin/users/List/List";

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
				<AdminListViews />
			</AdministratorLayout>
		</>
	);
}

export default Admin;
