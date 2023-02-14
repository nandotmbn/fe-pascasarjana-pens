import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
	return (
		<nav className="w-full flex items-center justify-evenly">
			<Link href="/">
				<Image
					className="cursor-pointer"
					src="/pens-long-logo.png"
					alt="Logo Koridorlab"
					width={200}
					height={300}
				/>
			</Link>

			<ul className="flex flex-row gap-6 text-base text-gray-900 items-center">
				<li>
					<button>Program</button>
				</li>
				<li>
					<button>Dosen dan Staf</button>
				</li>
				<li>
					<button>Riset dan Inovasi</button>
				</li>
				<li>
					<button>Penerimaan Mahasiswa</button>
				</li>
				<li>
					<button>Lain-lain</button>
				</li>
				<li className="flex flex-row gap-4 ml-16">
					<button className="py-2 rounded-full text-white">
						<Image
							className="cursor-pointer"
							src="/id.png"
							alt="Logo Koridorlab"
							width={40}
							height={40}
						/>
					</button>

					<button className="py-2 rounded-full text-white">
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
		</nav>
	);
}

export default Header;
