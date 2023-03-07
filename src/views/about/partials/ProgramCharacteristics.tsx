import { Table } from "antd";
import React from "react";

const dataSource = [
	{
		key: "1",
		characteristics: "Domain Pengetahuan",
		pens: "Bidang ilmu yang berkaitan dengan aplikasi pengetahuan teknologi dan metode ilmiah yang dikombinasikan dengan keahlian teknikal untuk mendukung aktivitas rekayasa",
		common:
			"Bidang ilmu yang berkaitan dengan pengetahuan teknologi dan metode ilmiah yang dikombinasikan dengan keahlian konseptual untuk mendukung aktivitas rekayasa",
	},
	{
		key: "2",
		characteristics: "Pendekatan Pendidikan",
		pens: "Pendidikan rekayasa berbasis teknologi",
		common: "Pendidikan rekayasa berbasis sains",
	},
	{
		key: "3",
		characteristics: "Fokus Kurikulum",
		pens: "Fokus pada aplikasi teknologi dan implementasinya",
		common: "Fokus pada teori seputar teknologi dan desain konseptual",
	},
	{
		key: "4",
		characteristics: "Tujuan Keahlian",
		pens: "Mengembangkan kemampuan aplikatif teknologi",
		common: "Mengembangkan kemampuan konseptual teknologi",
	},
	{
		key: "5",
		characteristics: "Orientasi Teknikal",
		pens: "Biasanya bersifat khusus dan mempunyai orientasi pada aplikasi teknologi yang dipicu oleh permasalahan yang spesifik",
		common:
			"Secara relatif cukup luas dan mempunyai kemampuan analitik dan kreativitas pada bidang teknologi yang dipicu oleh permasalahan teknis yang umum",
	},
	{
		key: "6",
		characteristics: "Penekanan Desain Teknikal",
		pens: "Prosedur-prosedur desain teknologi terkini yang dapat diaplikasikan ke arah teknikal yang khusus pada permasalahan",
		common:
			"Dasar-dasar desain teknologi yang umum dan tools yang dapat diaplikasikan ke arah yang luas pada situasi permasalahan baru",
	},
	{
		key: "7",
		characteristics: "Penekanan Program",
		pens: "Penerapan pengetahuan teknologi terkini dan pengalaman untuk permasalahan teknis yang spesifik",
		common:
			"Pengembangan metode analisis teknologi dan solusi untuk permasalahan desain yang umum",
	},
	{
		key: "8",
		characteristics: "Penekanan Materi Perkuliahan",
		pens: "Menekankan pada aplikasi dari pengetahuan teknikal dan metode terkini untuk solusi permasalahan bisnis dan industri",
		common:
			"Menekankan pada teori dasar, aplikasi terkini dan potensial pada dunia bisnis dan industri",
	},
	{
		key: "9",
		characteristics: "Penekanan Materi Praktek",
		pens: "Menekankan pada solusi desain yang praktis serta pembuatan dan teknik evaluasi yang cocok bagi permasalahan industri",
		common:
			"Menekankan pada kerja yang intensif pada metode eksperimen dan teori dasar terkait",
	},
];

const columns = [
	{
		title: "Karakteristik",
		dataIndex: "characteristics",
		key: "characteristics",
	},
	{
		title: "Pascasarjana S2 Terapan Teknologi Rekayasa di PENS",
		dataIndex: "pens",
		key: "pens",
	},
	{
		title: "Pascasarjana S2 Sains Rekayasa pada umumnya",
		dataIndex: "common",
		key: "common",
	},
];

function ProgramCharacteristics() {
	return (
		<div className="text-justify">
			<p>
				Pascasarjana S2 Terapan Teknologi Rekayasa di PENS mempunyai
				karakteristik yang khas dalam penyelenggaraan pendidikan dan pendekatan
				pengajaran dibandingkan dengan Program Pascasarjana S2 Sains Rekayasa
				yang telah berjalan pada berbagai perguruan tinggi di Indonesia.
				Perbedaan tersebut dapat dilihat dari berbagai kriteria pada tabel
				berikut ini.
			</p>
			<Table dataSource={dataSource} columns={columns} />;
		</div>
	);
}

export default ProgramCharacteristics;
