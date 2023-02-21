// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, message, Space } from "antd";

const items: MenuProps["items"] = [
	{
		label: (
			<Link href="/program/electrical-engineering">
				<button className="text-left border-b-2 border-yellow-500">
					Teknik Elektro
				</button>
			</Link>
		),
		key: "1",
	},
	{
		label: (
			<Link href="/program/informatics-and-computer-engineering">
				<button className="text-left border-b-2 border-yellow-500">
					Teknik Informatika dan Komputer
				</button>
			</Link>
		),
		key: "2",
	},
];

function Header() {
	const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
	const [isOnTop, setOnTop] = useState<Boolean>(true);
	const handleMobileMenuOpened = () => {
		setMobileMenuOpened(!isMobileMenuOpened);
	};

	const handleScroll = () => {
		if(window.scrollY) return setOnTop(true)
		setOnTop(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	});

	return (
		<nav className={`w-full fixed z-10 flex items-center justify-between md:justify-evenly md:gap-8 duration-700 ${isOnTop ? "bg-blue-100" : ""}`}>
			<div className="px-1 py-2">
				<Link href="/">
					<Image
						className="cursor-pointer hidden lg:inline"
						src="/pens-long-logo.png"
						alt="Logo PENS"
						width={200}
						height={300}
					/>
					<Image
						className="cursor-pointer lg:hidden"
						src="/pens-long-logo.png"
						alt="Logo PENS"
						width={120}
						height={20}
					/>
				</Link>
			</div>

			<button
				className="flex flex-row items-center md:hidden bg-blue-900 text-sm text-white px-2 py-4 self-start"
				onClick={handleMobileMenuOpened}
			>
				{!isMobileMenuOpened ? (
					<>
						<p>Menu</p>
						<i className="material-icons text-yellow-500">expand_more</i>
					</>
				) : (
					<>
						<p>Close</p>
						<i className="material-icons text-yellow-500">expand_less</i>
					</>
				)}
			</button>

			{!isMobileMenuOpened ? null : (
				<ul className="absolute top-20 w-full md:hidden grid grid-cols-2 gap-4 px-4 bg-white">
					<li className="">
						<Dropdown menu={{ items }}>
							<div>
								<button className="text-left border-b-2 border-yellow-500 text-xs mr-2">
									Program
								</button>
								<DownOutlined className="text-xs" />
							</div>
						</Dropdown>
					</li>
					<li className="">
						<Link href="/lecturer-and-staff">
							<button className="text-left text-xs border-b-2 border-yellow-500">
								Dosen dan Staf
							</button>
						</Link>
					</li>
					<li className="">
						<Link href="/research-and-innovations">
							<button className="text-left text-xs border-b-2 border-yellow-500">
								Riset dan Inovasi
							</button>
						</Link>
					</li>
					<li className="">
						<Link href="/admissions">
							<button className="text-left text-xs border-b-2 border-yellow-500">
								Penerimaan Mahasiswa
							</button>
						</Link>
					</li>
					<li className="">
						<Link href="/information">
							<button className="text-left text-xs border-b-2 border-yellow-500">
								Informasi
							</button>
						</Link>
					</li>
					<li className="flex flex-row gap-4">
						<button className="rounded-full text-white">
							<Image
								className="cursor-pointer"
								src="/id.png"
								alt="Logo Koridorlab"
								width={40}
								height={40}
							/>
						</button>

						<button className="rounded-full text-white">
							<Image
								className="cursor-pointer"
								src="/en.png"
								alt="Logo Koridorlab"
								width={40}
								height={40}
							/>
						</button>
					</li>
				</ul>
			)}

			<ul className="hidden flex flex-row gap-2 md:gap-4 text-xs text-gray-900 items-center md:flex">
				<li className="">
					<Dropdown menu={{ items }}>
						<div>
							<button className="text-left border-b-2 border-yellow-500 text-xs mr-2">
								Program
							</button>
							<DownOutlined className="text-xs" />
						</div>
					</Dropdown>
				</li>
				<li className="">
					<Link href="/lecturer-and-staff">
						<button className="text-left border-b-2 border-yellow-500">
							Dosen dan Staf
						</button>
					</Link>
				</li>
				<li className="">
					<Link href="/research-and-innovations">
						<button className="text-left border-b-2 border-yellow-500">
							Riset dan Inovasi
						</button>
					</Link>
				</li>
				<li className="">
					<Link href="/admissions">
						<button className="text-left border-b-2 border-yellow-500">
							Penerimaan Mahasiswa
						</button>
					</Link>
				</li>
				<li className="">
					<Link href="/informasi">
						<button className="text-left border-b-2 border-yellow-500">
							Informasi
						</button>
					</Link>
				</li>
				<li className="flex  flex-row gap-4 ml-4 lg:ml-16">
					<button className="py-2 rounded-full text-white">
						<Image
							className="cursor-pointer md:inline lg:hidden"
							src="/id.png"
							alt="Logo Koridorlab"
							width={20}
							height={20}
						/>
						<Image
							className="cursor-pointer hidden lg:inline"
							src="/id.png"
							alt="Logo Koridorlab"
							width={40}
							height={40}
						/>
					</button>

					<button className="py-2 rounded-full text-white">
						<Image
							className="cursor-pointer md:inline lg:hidden"
							src="/en.png"
							alt="Logo Koridorlab"
							width={20}
							height={20}
						/>
						<Image
							className="cursor-pointer hidden lg:inline"
							src="/en.png"
							alt="Logo Koridorlab"
							width={40}
							height={40}
						/>
					</button>
				</li>
			</ul>
		</nav>
	);
}

export default Header;
