import Image from "next/image";
import React from "react";

function ICEVisionAndMission() {
	return (
		<div className="bg-white flex flex-row px-24 my-12 gap-2 items-center">
			<div className="flex-1 flex-col text-justify">
				<div>
					<h2 className="text-2xl font-semibold text-blue-800">Visi</h2>
					<p>
						Menjadi pusat unggulan pendidikan terapan jenjang magister pada
						bidang teknologi rekayasa Informatika dan Komputer dalam skala
						nasional dan internasional.
					</p>
				</div>
				<div className="mt-8">
					<h2 className="text-2xl font-semibold text-yellow-500">Misi</h2>
					<ul className="list-disc">
						<li>
							Menyelenggarakan sistem pendidikan teknologi rekayasa berbasis
							terapan yang berbasis akuntabilitas kinerja untuk menghasilkan
							lulusan yang berbudi pekerti luhur, unggul dalam pengetahuan dan
							keahlian di bidang teknologi informatika dan komputasi.
						</li>
						<li>
							Mengembangkan ilmu pengetahuan dan keahlian di bidang teknologi
							informatika dan komputasi, serta berkontribusi yang relevan dan
							berkualitas tinggi bagi kebutuhan pembangunan nasional, regional,
							dan internasional.
						</li>
						<li>
							Menciptakan kehidupan kampus dalam suasana dan iklim akademik yang
							kondusif dan dapat menumbuhkan sikap apresiatif, partisipatif dan
							kontributif dari sivitas akademika, serta menjunjung tinggi tata
							nilai dan moral akademik dalam usaha membentuk masyarakat kampus
							yang dinamis dan harmonis.
						</li>
						<li>
							Mengembangkan sistem jejaring di bidang teknologi informatika dan
							komputasi dengan perguruan tinggi lain khususnya institusi
							politeknik, masyarakat, industri, lembaga pemerintah dan lembaga
							lain baik tingkat nasional maupun internasional dengan azas saling
							menguntungkan.
						</li>
					</ul>
				</div>
			</div>
			<div className="flex-1">
				<Image
					className="contain w-full relative"
					src="/images/programs/ice/ice-1.png"
					alt="Jumbotron PENS"
					width={1960}
					height={1}
				/>
			</div>
		</div>
	);
}

export default ICEVisionAndMission;
