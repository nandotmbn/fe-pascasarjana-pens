import { Input } from "antd";
import React from "react";

function UserBiodata() {
	return (
		<div className="h-full w-full flex-1 xl:flex-2 flex flex-col">
			<h2 className="mb-4 text-xl font-semibold flex-1">Biodata Pengguna</h2>
			<div className="relative h-full flex-12">
				<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-blue-100">
					<form>
						<div className="mb-2">
							<label htmlFor="firstName">Nama Depan</label>
							<Input
								id="firstName"
								name="firstName"
								placeholder="Nama Depan"
								defaultValue="Agus Indra"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="lastName">Nama Belakang</label>
							<Input
								id="lastName"
								name="lastName"
								placeholder="Nama Belakang"
								defaultValue="Gunawan"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="address">Alamat</label>
							<Input.TextArea
								id="address"
								name="address"
								placeholder="Alamat"
								defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde consectetur inventore?"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="phoneNumber">Nomor Selular</label>
							<Input
								id="phoneNumber"
								name="phoneNumber"
								placeholder="Nomor Selular"
								defaultValue="+62 888 888 88 888"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="expertise">Bidang Keahlian</label>
							<Input
								id="expertise"
								name="expertise"
								placeholder="Bidang Keahlian"
								defaultValue="Signal Measurement / Ultrasonic"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="nip">NIP</label>
							<Input
								id="nip"
								name="nip"
								placeholder="NIP"
								defaultValue="0000000000000000"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="nidn">NIDN</label>
							<Input
								id="nidn"
								name="nidn"
								placeholder="NIDN"
								defaultValue="000000000000"
							/>
						</div>
						<div className="w-full h-12 mt-8 flex flex-row justify-start gap-6">
							<button className="bg-red-600 rounded-lg px-8 py-2 text-white">Batal</button>
							<button className="bg-blue-600 rounded-lg px-8 py-2 text-white">
								Simpan
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default UserBiodata;
