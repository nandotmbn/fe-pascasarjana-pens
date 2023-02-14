// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
	const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
	const handleMobileMenuOpened = () => {
		setMobileMenuOpened(!isMobileMenuOpened);
	};
	return (
		<nav className="w-full flex items-center justify-between md:justify-evenly md:gap-8">
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
						<Link href="/program">
							<button className="text-left text-sm border-b-2 border-yellow-500">Program</button>
						</Link>
					</li>
					<li className="">
						<Link href="/lecturer-and-staff">
							<button className="text-left text-sm border-b-2 border-yellow-500">
								Dosen dan Staf
							</button>
						</Link>
					</li>
					<li className="">
						<Link href="/research-and-innovations">
							<button className="text-left text-sm border-b-2 border-yellow-500">
								Riset dan Inovasi
							</button>
						</Link>
					</li>
					<li className="">
						<Link href="/admissions">
							<button className="text-left text-sm border-b-2 border-yellow-500">
								Penerimaan Mahasiswa
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

			<ul className="hidden flex flex-row gap-2 md:gap-4 text-xs xl:text-base text-gray-900 items-center md:flex">
				<li className="">
					<Link href="/program">
						<button className="text-left border-b-2 border-yellow-500">Program</button>
					</Link>
				</li>
				<li className="">
					<Link href="/lecturer-and-staff">
						<button className="text-left border-b-2 border-yellow-500">Dosen dan Staf</button>
					</Link>
				</li>
				<li className="">
					<Link href="/research-and-innovations">
						<button className="text-left border-b-2 border-yellow-500">Riset dan Inovasi</button>
					</Link>
				</li>
				<li className="">
					<Link href="/admissions">
						<button className="text-left border-b-2 border-yellow-500">Penerimaan Mahasiswa</button>
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
