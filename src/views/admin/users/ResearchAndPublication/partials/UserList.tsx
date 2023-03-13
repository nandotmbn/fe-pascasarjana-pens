import { Table } from "antd";
import React from "react";

const dataSource = [
	{
		key: "1",
		name: "John Doe",
		role: "Dosen",
		id: "1",
	},
];

const columns = [
	{
		title: "Nama",
		dataIndex: "name",
		key: "name",
	},
	{
		title: "Role",
		dataIndex: "role",
		key: "role",
	},
	{
		title: "Aksi",
		dataIndex: "id",
		key: "id",
		render: () => {
			return (
				<button className="w-full h-10 text-white bg-blue-500 rounded-2xl border-2 border-blue-500 hover:bg-white hover:text-blue-500">
					Pilih
				</button>
			);
		},
	},
];

function BiodataUserList() {
	return (
		<div className="h-full w-full flex-1 flex flex-col">
			<h2 className="mb-4 text-xl font-semibold flex-1">Daftar Pengguna</h2>
			<div className="relative h-full flex-12">
				<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-blue-100">
					<Table dataSource={dataSource} columns={columns} />
				</div>
			</div>
		</div>
	);
}

export default BiodataUserList;
