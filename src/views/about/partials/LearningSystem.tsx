/* eslint-disable react/no-unescaped-entities */
import React from "react";

function LearningSystem() {
	return (
		<div>
			<p className="text-justify mb-4">
				Secara spesifik pada kategori mata kuliah wajib (compulsory lecture) dan
				mata kuliah pilihan (elective lecture), Program Pascasarjana S2 Terapan
				dalam DEGREE membuat proyeksi berjalannya mata kuliah-mata kuliah
				tersebut dengan pendekatan circular shift learning secara temporal
				sehingga setiap konten mata kuliah yang disajikan dalam perkuliahan
				harus berangkat dari (1) Pemahaman dasar secara teoritis, (2) Kemampuan
				praktikal, (3) Soft-skill, dan (4) Internship.
			</p>
			<p className="text-justify mb-4 font-bold">Khas Pembelajaran</p>
			<ul className="list-disc pl-8">
				<li>Full-day Laboratory-based education</li>

				<li>
					Pembelajaran berorientasi praktikal (70% praktikum, 30% teori) untuk
					memastikan bahwa semua materi perkuliahan berjalan pada jalur
					"hands-on experience"
				</li>
				<li>
					Penerapan keahlian melalui penelitian dilakukan dan dievaluasi per
					semester:
					<ul className="list-decimal pl-16">
						<li>Proposal Tesis (Semester 1)</li>
						<li>Progres Tesis 1 (Semester 2)</li>
						<li>Progres Tesis 2 (Semester 3)</li>
						<li>Tesis Final (Semester 4)</li>
					</ul>
				</li>

				<li>
					Hasil Pembelajaran:
					<ul className="list-decimal pl-16">
						<li>Product oriented research</li>
						<li>
							Publikasi pada jurnal nasional terakreditasi di bidang engineering
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default LearningSystem;
