import { Input } from "antd";
import React from "react";

function ControlPanelList() {
	return (
		<div className="h-full w-full flex-1 flex flex-col">
			<h2 className="mb-4 text-xl font-semibold flex-1">Detail Pengguna</h2>
			<div className="relative h-full flex-12">
				<div className="overflow-y-scroll absolute inset-0 scrollbar scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-blue-100 pb-16">
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
						<div className="mb-2">
							<label htmlFor="address">Alamat</label>
							<Input.TextArea
								id="address"
								name="address"
								placeholder="Alamat"
								value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde consectetur inventore?"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="phoneNumber">Nomor Selular</label>
							<Input
								id="phoneNumber"
								name="phoneNumber"
								placeholder="Nomor Selular"
								value="+62 888 888 88 888"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="expertise">Bidang Keahlian</label>
							<Input
								id="expertise"
								name="expertise"
								placeholder="Bidang Keahlian"
								value="Signal Measurement / Ultrasonic"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="nip">NIP</label>
							<Input
								id="nip"
								name="nip"
								placeholder="NIP"
								value="0000000000000000"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="nidn">NIDN</label>
							<Input
								id="nidn"
								name="nidn"
								placeholder="NIDN"
								value="000000000000"
							/>
						</div>
						<div className="mb-2">
							<label htmlFor="website">Website</label>
							<Input
								id="website"
								name="website"
								placeholder="Website"
								value="https://lorem.com/ipsum"
							/>
						</div>
						<div className="mb-2">
							<p>Pendidikan</p>
							<ol className="list-decimal">
								<li className="flex flex-row items-start gap-2 justify-between px-2 py-2 rounded-2xl bg-gray-100 mb-2 ">
									<div className="flex-1 flex-col flex">
										<p>
											<strong>Strata</strong>
										</p>
										<p>Strata 1</p>
									</div>
									<div className="flex-1 flex-col flex">
										<p>
											<strong>Kampus</strong>
										</p>
										<p>Institut Teknologi Sepuluh Nopember</p>
									</div>
									<div className="flex-1 flex-col flex">
										<p>
											<strong>Jurusan</strong>
										</p>
										<p>Teknik Elektro</p>
									</div>
									<div className="flex-1 flex-col flex">
										<p>
											<strong>Tahun</strong>
										</p>
										<p>2000</p>
									</div>
								</li>
							</ol>
						</div>
						<div className="mb-2">
							<p>Riset dan Publikasi</p>
							<ol className="list-decimal">
								<li className="flex flex-row items-start gap-2 justify-between px-2 py-2 rounded-2xl bg-gray-100 mb-2 ">
									<div className="flex-1 flex-col flex">
										<p>
											<strong>Judul</strong>
										</p>
										<p>Lorem ipsum dolor sit.</p>
									</div>
									<div className="flex-1 flex-col flex">
										<p>
											<strong>Bidang</strong>
										</p>
										<p>Lorem, ipsum.</p>
									</div>
									<div className="flex-1 flex-col flex">
										<p>
											<strong>Tahun</strong>
										</p>
										<p>2000</p>
									</div>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ControlPanelList;
