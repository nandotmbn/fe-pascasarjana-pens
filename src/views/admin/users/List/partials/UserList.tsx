import { IListView } from "@/interfaces/ListView";
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
				<div className="flex flex-row items-center gap-2">
					<button className="px-4 min-w-16 h-10 text-white bg-blue-600 rounded-2xl border-2 border-blue-600 hover:bg-white hover:text-blue-600">
						Detail
					</button>
					<button className="px-4 min-w-16 h-10 text-white bg-red-600 rounded-2xl border-2 border-red-600 hover:bg-white hover:text-red-600">
						Hapus
					</button>
				</div>
			);
		},
	},
];

function BiodataUserList({ isModalOpened, setModalOpened }: IListView) {
	return (
		<div className="h-full w-full flex-1 flex flex-col">
			<div className="flex-1 flex flex-row justify-between items-start">
				<h2 className="mb-6 text-xl font-semibold">Daftar Pengguna</h2>
				<button
					onClick={() => setModalOpened(true)}
					className="mb-6 text-sm font-semibold p-2 border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-100 duration-300"
				>
					+ Tambah Pengguna
				</button>
			</div>
			<div className="relative h-full flex-12">
				<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-blue-100">
					<Table dataSource={dataSource} columns={columns} />
				</div>
			</div>
		</div>
	);
}

export default BiodataUserList;
