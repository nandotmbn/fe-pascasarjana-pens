import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Collapse, Input } from "antd";
import { HeaderAdministratorLayout } from "@/components";
import {
	BankOutlined,
	ContainerOutlined,
	DeleteOutlined,
	FileDoneOutlined,
	FileExclamationOutlined,
	FileOutlined,
	FireOutlined,
	FlagOutlined,
	FundProjectionScreenOutlined,
	GlobalOutlined,
	NotificationOutlined,
	ReconciliationOutlined,
	SettingOutlined,
	UserOutlined,
} from "@ant-design/icons";
const { Panel } = Collapse;

interface IMainLayout {
	children: JSX.Element;
}

function AdministratorLayout({ children }: IMainLayout) {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	if (!domLoaded) return <div></div>;

	return (
		<div className="h-screen w-screen bg-gray-100 flex-col flex">
			<HeaderAdministratorLayout />
			<body className="flex flex-row flex-12 px-2 py-2 items-center justify-between gap-2">
				<div className="flex-4 h-full">
					<Collapse defaultActiveKey={["1"]} ghost accordion>
						<Panel
							header={
								<div className="flex flex-row items-center justify-start">
									<UserOutlined className="text-xl" />
									<p className="mx-2 text-sm">Pengguna</p>
								</div>
							}
							key="1"
						>
							<Link href="/admin/users/biodata">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<ContainerOutlined className="text-xl" />
									<p className="text-xs ml-1">Biodata</p>
								</div>
							</Link>
							<Link href="/admin/users/education">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<BankOutlined className="text-xl" />
									<p className="text-xs ml-1">Pendidikan</p>
								</div>
							</Link>
							<Link href="/admin/users/research-and-publication">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<FireOutlined className="text-xl" />
									<p className="text-xs ml-1">Riset dan Publikasi</p>
								</div>
							</Link>
							<Link href="/admin/users/website">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<GlobalOutlined className="text-xl" />
									<p className="text-xs ml-1">Website</p>
								</div>
							</Link>
						</Panel>
						<Panel
							header={
								<div className="flex flex-row items-center justify-start">
									<FileDoneOutlined className="text-xl" />
									<p className="mx-2 text-sm">Konten</p>
								</div>
							}
							key="2"
						>
							<Link href="/admin/contents/information">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<FileExclamationOutlined className="text-xl" />
									<p className="text-xs ml-1">Informasi</p>
								</div>
							</Link>
							<Link href="/admin/contents/news">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<FlagOutlined className="text-xl" />
									<p className="text-xs ml-1">Berita</p>
								</div>
							</Link>
							<Link href="/admin/contents/document">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<FileOutlined className="text-xl" />
									<p className="text-xs ml-1">Dokumen</p>
								</div>
							</Link>
						</Panel>
						<Panel
							header={
								<div className="flex flex-row items-center justify-start">
									<ReconciliationOutlined className="text-xl" />
									<p className="mx-2 text-sm">Riset dan Inovasi</p>
								</div>
							}
							key="3"
						>
							<Link href="/admin/research-and-innovations/electric-vehicle">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<FundProjectionScreenOutlined className="text-xl" />
									<p className="text-xs ml-1">Electric Vehicle</p>
								</div>
							</Link>
							<Link href="/admin/research-and-innovations/applied-aquaculture">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<FundProjectionScreenOutlined className="text-xl" />
									<p className="text-xs ml-1">Aquaculture</p>
								</div>
							</Link>
							<Link href="/admin/research-and-innovations/medical-electronics">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<FundProjectionScreenOutlined className="text-xl" />
									<p className="text-xs ml-1">Electromedic</p>
								</div>
							</Link>
							<Link href="/admin/research-and-innovations/robotics">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<FundProjectionScreenOutlined className="text-xl" />
									<p className="text-xs ml-1">Robotics</p>
								</div>
							</Link>
							<Link href="/admin/research-and-innovations/indusrial-electronics">
								<div className="flex flex-row items-center justify-start mb-2 hover:bg-gray-400 rounded-full px-2 hover:text-white">
									<FundProjectionScreenOutlined className="text-xl" />
									<p className="text-xs ml-1">Industrial Electronics</p>
								</div>
							</Link>
						</Panel>
					</Collapse>
				</div>
				<div className="flex-20 bg-white rounded-2xl h-full">{children}</div>
				<div className="flex-1 h-full flex-col gap-4 flex pt-2">
					<div className="w-full h-12 flex items-center justify-center">
						<NotificationOutlined className="text-4xl text-gray-500" />
					</div>
					<div className="w-full h-12 flex items-center justify-center">
						<DeleteOutlined className="text-4xl text-gray-500" />
					</div>
					<div className="w-full h-12 flex items-center justify-center">
						<SettingOutlined className="text-4xl text-gray-500" />
					</div>
				</div>
			</body>
		</div>
	);
}

export default AdministratorLayout;
