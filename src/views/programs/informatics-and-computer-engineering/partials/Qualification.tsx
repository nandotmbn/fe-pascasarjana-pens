import React from "react";

function ICEQualification() {
	return (
		<div className="bg-gray-200 p-8 px-24 text-justify">
			<h2 className="text-3xl font-semibold text-blue-900 mb-4">Kualifikasi</h2>
			<div className="w-full flex flex-row gap-4">
				<div className="bg-white flex-1 p-4 px-8">
					<h3 className="text-xl font-bold">Kemampuan di bidang kerja</h3>
					<ul className="list-disc">
						<li>
							Mampu mengusulkan solusi masalah teknologi rekayasa di bidang
							informasi dan komputasi yang kontekstual dalam wujud rancangan
							rekayasa yang inovatif berdasarkan kedalaman kajian inisiatif
							strategis dan kecukupan analisis nilai tambah kompetitif.
						</li>
						<li>
							Mampu mengembangan pengetahuan teknologi rekayasa di bidang teknik
							informatika dan komputer lewat riset yang bermanfaat secara
							kontektual bagi masyarakat dan lingkungan dengan pendekatan inter
							atau multidisipliner pada bidang teknik informatika dan komputer
							hingga menghasilkan karya aplikatif, inovatif, dan teruji, diakui
							secara nasional atau internasional dalam bentuk publikasi
							saintifik pada jurnal ilmiah yang terakreditasi.
						</li>
						<li>
							Mampu berkontribusi dalam perencanaan peta jalan riset serta mampu
							mengelola riset/eksperimen mandiri bidang teknik informatika dan
							komputer.
						</li>
					</ul>
				</div>
				<div className="flex-1 flex flex-col gap-4">
					<div className="bg-white p-4 px-8">
						<h3 className="text-xl font-bold">
							Lingkup kerja berdasarkan pengetahuan yang dikuasai
						</h3>
						<p>
							Mampu memecahkan permasalahan teknologi rekayasa di bidang
							informasi dan komputasi sesuai kaidah penerapan teknologi (desain
							praktikal, pembuatan prototipe dan cara pembuatan) pada bidang
							Signal, Vision & Graphics, Computer & Real Time Systems, Database
							& Knowledge Engineering, dan Network & Web Technology.
						</p>
					</div>
					<div className="bg-white p-4 px-8">
						<h3 className="text-xl font-bold">
							Lingkup kerja berdasarkan pengetahuan yang dikuasai
						</h3>
						<ul className="list-disc">
							<li>
								Mampu mengambil keputusan hal-hal strategis pada teknologi
								rekayasa yang aplikatif di bidang informasi dan komputasi dan
								dapat mengelola kelompok studi secara mandiri
							</li>
							<li>
								Mampu mengevaluasi diri, mengelola pembelajaran diri sendiri,
								dan secara efektif mengkomunikasikan informasi ide, analisis,
								dan argumen dalam berbagai bentuk media, kepada komunitas di
								bidang teknik informatika dan komputer, atau umum.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ICEQualification;
