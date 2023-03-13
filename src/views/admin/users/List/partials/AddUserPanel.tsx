import { Input, MenuProps, Dropdown, Space } from "antd";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
	{
		label: "Super Administrator",
		key: "0",
	},
	{
		label: "Administrator",
		key: "1",
	},
	{
		label: "Dosen",
		key: "2",
	},
	{
		label: "Staff",
		key: "3",
	},
	{
		label: "Common",
		key: "4",
	},
];

function AddUserPanel() {
	const [isPasswordPanelOpened, setPasswordPanelOpened] = useState(false);
	return (
		<form>
			{isPasswordPanelOpened ? (
				<>
					<div className="mb-2">
						<label htmlFor="password">Password User</label>
						<Input.Password id="password" name="password" placeholder="Password User" />
					</div>
					<div className="mb-2">
						<label htmlFor="confirm-password">Konfirmasi Password User</label>
						<Input.Password
							id="confirm-password"
							name="confirm-password"
							placeholder="Konfirmasi Password User"
						/>
					</div>
				</>
			) : (
				<>
					<div className="mb-2">
						<label htmlFor="firstName">Nama Depan</label>
						<Input id="firstName" name="firstName" placeholder="Nama Depan" />
					</div>
					<div className="mb-2">
						<label htmlFor="lastName">Nama Belakang</label>
						<Input id="lastName" name="lastName" placeholder="Nama Belakang" />
					</div>
					<div className="mb-2 flex flex-col">
						<label htmlFor="role">Role</label>
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
						<label htmlFor="address">Alamat</label>
						<Input.TextArea id="address" name="address" placeholder="Alamat" />
					</div>
					<div className="mb-2">
						<label htmlFor="phoneNumber">Nomor Selular</label>
						<Input
							id="phoneNumber"
							name="phoneNumber"
							placeholder="Nomor Selular"
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="website">Website</label>
						<Input id="website" name="website" placeholder="Website" />
					</div>
					<div className="mb-2">
						<label htmlFor="expertise">Bidang Keahlian</label>
						<Input
							id="expertise"
							name="expertise"
							placeholder="Bidang Keahlian"
						/>
					</div>
					<div className="mb-2">
						<label htmlFor="nip">NIP</label>
						<Input id="nip" name="nip" placeholder="NIP" />
					</div>
					<div className="mb-2">
						<label htmlFor="nidn">NIDN</label>
						<Input id="nidn" name="nidn" placeholder="NIDN" />
					</div>
				</>
			)}
			<div className="w-full h-10 mt-8 flex flex-row justify-start gap-6">
				{isPasswordPanelOpened ? (
					<button
						className="bg-red-600 rounded-lg px-8 py-2 text-white"
						onClick={(e) => {
							e.preventDefault();
							setPasswordPanelOpened(false);
						}}
					>
						Sebelumnya
					</button>
				) : (
					<button className="bg-red-600 rounded-lg px-8 py-2 text-white">
						Batal
					</button>
				)}

				{isPasswordPanelOpened ? (
					<button className="bg-blue-600 rounded-lg px-8 py-2 text-white">
						Submit
					</button>
				) : (
					<button
						className="bg-blue-600 rounded-lg px-8 py-2 text-white"
						onClick={(e) => {
							e.preventDefault();
							setPasswordPanelOpened(true);
						}}
					>
						Selanjutnya
					</button>
				)}
			</div>
		</form>
	);
}

export default AddUserPanel;
