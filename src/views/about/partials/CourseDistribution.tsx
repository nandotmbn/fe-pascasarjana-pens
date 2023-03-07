import React from "react";

function CourseDistribution() {
	return (
		<div className="text-justify">
			<p className="mb-4">
				Program Pascasarjana S2 Terapan di PENS mempunyai tiga kategori mata
				kuliah sebagai berikut:
			</p>
			<ul className="list-disc pl-8">
				<li>
					<strong>Mata kuliah dasar (basic lecture)</strong>, yaitu mata kuliah
					umum yang sifatnya memberikan pemahaman dasar bagi mahasiswa dalam
					menjalani program pascarsarjana.
				</li>
				<li>
					<strong>Mata kuliah wajib (compulsory lecture)</strong>, yaitu mata
					kuliah keahlian yang wajib diambil oleh mahasiswa selama mengikuti
					program pascasarjana.
				</li>
				<li>
					<strong>Mata kuliah pilihan (elective lecture)</strong>, yaitu mata
					kuliah pilihan yang bisa dipilih dan diikuti oleh mahasiswa.
				</li>
			</ul>
		</div>
	);
}

export default CourseDistribution;
