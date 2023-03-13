import { Input, MenuProps, Dropdown, Space, DatePicker } from "antd";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
	{
		label: "Bachelor / Sarjana",
		key: "0",
	},
	{
		label: "Master / Magister",
		key: "1",
	},
	{
		label: "Doctoral / Doktoral",
		key: "2",
	},
];

function AddUserEducationPanel() {
	return (
		<form>
			<div className="mb-2 flex flex-col">
				<label htmlFor="role">Strata</label>
				<Dropdown menu={{ items }} trigger={["click"]}>
					<a onClick={(e) => e.preventDefault()}>
						<div className="rounded-lg border-2 flex flex-row justify-between py-2 px-2 items-center">
							<p className="text-gray-300 font-light">Pilih salah satu</p>
							<DownOutlined />
						</div>
					</a>
				</Dropdown>
			</div>
			<div className="mb-2">
				<label htmlFor="major">Prodi / Jurusan</label>
				<Input id="major" name="major" placeholder="Prodi / Jurusan" />
			</div>
			<div className="mb-2 flex flex-col">
				<label htmlFor="year">Tahun Lulus</label>
				<DatePicker.YearPicker id="year" name="year" placeholder="Tahun Lulus" />
			</div>
			<div className="mb-2">
				<label htmlFor="researchTitle">Judul Penelitian</label>
				<Input.TextArea
					id="researchTitle"
					name="researchTitle"
					placeholder="Judul Penelitian"
				/>
			</div>
			<div className="mb-2">
				<label htmlFor="linkResearch">Tautan Penelitian</label>
				<Input id="linkResearch" name="linkResearch" placeholder="Tautan Penelitian" />
			</div>

			<div className="w-full h-10 mt-8 flex flex-row justify-start gap-6">
				<button className="bg-red-600 rounded-lg px-8 py-2 text-white">
					Batal
				</button>
				<button className="bg-blue-600 rounded-lg px-8 py-2 text-white">
					Submit
				</button>
			</div>
		</form>
	);
}

export default AddUserEducationPanel;
