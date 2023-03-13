import { IListView } from "@/interfaces/ListView";
import { Input } from "antd";
import React from "react";

function UserResearchAndPublication({
	isModalOpened,
	setModalOpened,
}: IListView) {
	return (
		<div className="h-full w-full flex-1 flex flex-col">
			<div className="flex-1 flex flex-row justify-between items-start">
				<h2 className="mb-6 text-xl font-semibold">
					Riset dan Publikasi Pengguna
				</h2>
				<button
					onClick={() => setModalOpened(true)}
					className="mb-6 text-sm font-semibold p-2 border-2 border-yellow-400 text-yellow-600 hover:bg-yellow-100 duration-300"
				>
					+ Tambah Riset dan Publikasi
				</button>
			</div>
			<div className="relative h-full flex-12">
				<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-blue-100">
					<div>
						<div className="mb-2">
							<label htmlFor="firstName">Nama Depan</label>
							<Input
								id="firstName"
								name="firstName"
								placeholder="Nama Depan"
								value="John"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="lastName">Nama Belakang</label>
							<Input
								id="lastName"
								name="lastName"
								placeholder="Nama Belakang"
								value="Doe"
							/>
						</div>
						<div className="w-full bg-cyan-200 text-cyan-600 rounded-lg flex flex-row gap-2 p-2 mb-2">
							<div className="flex-1 rounded-lg p-1 flex flex-col justify-between gap-2">
								<div>
									<h4 className="font-bold italic text-xs">Judul</h4>
									<h4 className="text-lg">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									</h4>
								</div>
							</div>
							<div className="flex-1 rounded-lg p-1 flex flex-col justify-between gap-2">
								<div>
									<h4 className="font-bold italic text-xs">Tahun Terbit</h4>
									<h4 className="text-lg">2017</h4>
								</div>
								<div>
									<h4 className="font-bold italic text-xs">Tautan</h4>
									<h4 className="text-lg">Link</h4>
								</div>
							</div>
							<div className="flex-1 rounded-lg p-1 flex flex-col justify-between gap-2">
								<div>
									<h4 className="font-bold italic text-xs">Lembaga</h4>
									<h4 className="text-lg">Lorem ipsum dolor sit.</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserResearchAndPublication;
