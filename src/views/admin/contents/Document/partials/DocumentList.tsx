import { Table } from "antd";
import React from "react";

const dataSource = [
	{
		key: "1",
		title: (
			<p className="text-xs">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
		),
		issuedAt: <p className="text-xs">22 Mei 2022</p>,
		id: "1",
	},
	{
		key: "1",
		title: (
			<p className="text-xs">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
		),
		issuedAt: <p className="text-xs">22 Mei 2022</p>,
		id: "1",
	},
	{
		key: "1",
		title: (
			<p className="text-xs">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
		),
		issuedAt: <p className="text-xs">22 Mei 2022</p>,
		id: "1",
	},
	{
		key: "1",
		title: (
			<p className="text-xs">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
		),
		issuedAt: <p className="text-xs">22 Mei 2022</p>,
		id: "1",
	},
	{
		key: "1",
		title: (
			<p className="text-xs">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
		),
		issuedAt: <p className="text-xs">22 Mei 2022</p>,
		id: "1",
	},
	{
		key: "1",
		title: (
			<p className="text-xs">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
			</p>
		),
		issuedAt: <p className="text-xs">22 Mei 2022</p>,
		id: "1",
	},
];

const columns = [
	{
		title: "Judul",
		dataIndex: "title",
		key: "title",
	},
	{
		title: <p className="text-xs">Dibuat pada</p>,
		dataIndex: "issuedAt",
		key: "issuedAt",
	},
	{
		title: "Aksi",
		dataIndex: "id",
		key: "id",
		render: () => {
			return (
				<div className="flex flex-row items-center justify-between gap-1">
					<button className="w-16 text-xs py-2 text-white bg-blue-500 rounded-2xl border-2 border-blue-500 hover:bg-white hover:text-blue-500">
						Lihat
					</button>
					<button className="w-16 text-xs py-2 text-white bg-red-500 rounded-2xl border-2 border-red-500 hover:bg-white hover:text-red-500">
						Hapus
					</button>
				</div>
			);
		},
	},
];

function DocumentList() {
	return (
		<div className="h-full w-full flex-3 flex flex-col">
			<h2 className="mb-4 text-xl font-semibold flex-1">Daftar Berita</h2>
			<div className="relative h-full flex-12">
				<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-blue-100">
					<Table
						dataSource={dataSource}
						columns={columns}
						pagination={{ pageSize: 5 }}
					/>
				</div>
			</div>
		</div>
	);
}

export default DocumentList;
