/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Collapse } from "antd";
import {
	BankOutlined,
	ContainerOutlined,
	FileDoneOutlined,
	FileExclamationOutlined,
	FileOutlined,
	FireOutlined,
	FlagOutlined,
	FundProjectionScreenOutlined,
	GlobalOutlined,
	ReconciliationOutlined,
	UnorderedListOutlined,
	UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
const { Panel } = Collapse;

function NavigationBarAdministratorLayout() {
	const [isMounted, setMounted] = useState(false);
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const router = useRouter();
	const [openedNav, setOpenedNav] = useState("");
	const [focusedNav, setFocusedNav] = useState("");

	const focusedHandler = (navName: string): string => {
		if (navName == focusedNav)
			return "bg-blue-500 text-white hover:bg-blue-300";
		return "";
	};

	useEffect(() => {
		if (router.route.split("/")[2] == "users") {
			setOpenedNav("1");
			if (router.route.split("/")[3] == "biodata") setFocusedNav("biodata");
			else if (router.route.split("/")[3] == "education")
				setFocusedNav("education");
			else if (router.route.split("/")[3] == "research-and-publication")
				setFocusedNav("research-and-publication");
			else if (router.route.split("/")[3] == "website")
				setFocusedNav("website");
			else if (router.route.split("/")[3] == "list") setFocusedNav("list");
		} else if (router.route.split("/")[2] == "contents") {
			if (router.route.split("/")[3] == "information")
				setFocusedNav("information");
			else if (router.route.split("/")[3] == "news") setFocusedNav("news");
			else if (router.route.split("/")[3] == "document")
				setFocusedNav("document");
			setOpenedNav("2");
		} else if (router.route.split("/")[3] == "research-and-innovations") {
			setOpenedNav("3");
		}

		setMounted(true);
	}, []);
	return (
		<div className="flex-4 h-full">
			{!isMounted ? null : (
				<Collapse
					ghost
					defaultActiveKey={isTabletOrMobile ? openedNav : [1, 2, 3]}
					accordion={isTabletOrMobile ? true : false}
				>
					<Panel
						header={
							<div className="flex flex-row items-center justify-start">
								<UserOutlined className="text-sm" />
								<p className="mx-2 text-xs">Pengguna</p>
							</div>
						}
						key="1"
					>
						<Link href="/admin/users/list">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									"list"
								)}`}
							>
								<UnorderedListOutlined className="text-sm" />
								<p className="text-xs ml-1">Daftar</p>
							</div>
						</Link>
						<Link href="/admin/users/biodata">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									"biodata"
								)}`}
							>
								<ContainerOutlined className="text-sm" />
								<p className="text-xs ml-1">Biodata</p>
							</div>
						</Link>
						<Link href="/admin/users/education">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									"education"
								)}`}
							>
								<BankOutlined className="text-sm" />
								<p className="text-xs ml-1">Pendidikan</p>
							</div>
						</Link>
						<Link href="/admin/users/research-and-publication">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									"research-and-publication"
								)}`}
							>
								<FireOutlined className="text-sm" />
								<p className="text-xs ml-1">Riset dan Publikasi</p>
							</div>
						</Link>
						<Link href="/admin/users/website">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									"website"
								)}`}
							>
								<GlobalOutlined className="text-sm" />
								<p className="text-xs ml-1">Website</p>
							</div>
						</Link>
					</Panel>
					<Panel
						header={
							<div className="flex flex-row items-center justify-start">
								<FileDoneOutlined className="text-sm" />
								<p className="mx-2 text-xs">Konten</p>
							</div>
						}
						key="2"
					>
						<Link href="/admin/contents/information">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									"information"
								)}`}
							>
								<FileExclamationOutlined className="text-sm" />
								<p className="text-xs ml-1">Informasi</p>
							</div>
						</Link>
						<Link href="/admin/contents/news">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									"news"
								)}`}
							>
								<FlagOutlined className="text-sm" />
								<p className="text-xs ml-1">Berita</p>
							</div>
						</Link>
						<Link href="/admin/contents/document">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									"document"
								)}`}
							>
								<FileOutlined className="text-sm" />
								<p className="text-xs ml-1">Dokumen</p>
							</div>
						</Link>
					</Panel>
					<Panel
						header={
							<div className="flex flex-row items-center justify-start">
								<ReconciliationOutlined className="text-sm" />
								<p className="mx-2 text-xs">Riset dan Inovasi</p>
							</div>
						}
						key="3"
					>
						<Link href="/admin/research-and-innovations/electric-vehicle">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									""
								)}`}
							>
								<FundProjectionScreenOutlined className="text-sm" />
								<p className="text-xs ml-1">Electric Vehicle</p>
							</div>
						</Link>
						<Link href="/admin/research-and-innovations/applied-aquaculture">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									""
								)}`}
							>
								<FundProjectionScreenOutlined className="text-sm" />
								<p className="text-xs ml-1">Aquaculture</p>
							</div>
						</Link>
						<Link href="/admin/research-and-innovations/medical-electronics">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									""
								)}`}
							>
								<FundProjectionScreenOutlined className="text-sm" />
								<p className="text-xs ml-1">Electromedic</p>
							</div>
						</Link>
						<Link href="/admin/research-and-innovations/robotics">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									""
								)}`}
							>
								<FundProjectionScreenOutlined className="text-sm" />
								<p className="text-xs ml-1">Robotics</p>
							</div>
						</Link>
						<Link href="/admin/research-and-innovations/indusrial-electronics">
							<div
								className={`flex flex-row items-center justify-start mb-1 hover:bg-gray-400 rounded-full px-2 hover:text-white ${focusedHandler(
									""
								)}`}
							>
								<FundProjectionScreenOutlined className="text-sm" />
								<p className="text-xs ml-1">Industrial Electronics</p>
							</div>
						</Link>
					</Panel>
				</Collapse>
			)}
		</div>
	);
}

export default NavigationBarAdministratorLayout;
