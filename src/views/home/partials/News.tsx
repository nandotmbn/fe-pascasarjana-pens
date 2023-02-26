import Image from "next/image";
import Link from "next/link";
import React from "react";

function NewsCard() {
	return (
		<div className="inline-block px-3">
			<div className="w-64 max-w-xs overflow-hidden rounded-lg drop-shadow-xl bg-blue-800 hover:drop-shadow-2xl transition-shadow duration-300 ease-in-out border-t-4 border-t-blue-800 border-r-4 border-r-yellow-400 py-8 flex flex-col justify-between">
				<div className="flex-2">
					<Image
						className="contain w-full relative"
						src="/images/home/pens_jumbotron.png"
						alt="Jumbotron PENS"
						width={1960}
						height={1}
					/>
				</div>
        <div className="flex-4 p-2">
          <div className="flex flex-row gap-1 mt-2">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <h5 className="font-semibold text-xl text-white">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h5>
        </div>
				<div className="self-end flex-1 p-2">
					<Link href="/article" className="flex flex-row items-center gap-2">
						<p className="text-white text-sm">Baca Selengkapnya...</p>
						<button className="w-6 h-6 rounded-full bg-white">
							<span className="material-symbols-outlined text-yellow-400">
								chevron_right
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

function News() {
	return (
		<div className="mt-12">
			<h2 className="text-2xl border-b-4 border-gray-300 text-center mb-4">
				Berita Terbaru
			</h2>
			<div className="w-full flex flex-row">
				<div className="relative flex-2">
					<div className="absolute left-0 top-0">
						<Image
							className="contain w-full relative"
							src="/images/home/ornament_2.png"
							alt="Jumbotron PENS"
							width={640}
							height={1}
						/>
					</div>
				</div>
				<div className="flex overflow-x-scroll py-10 hide-scroll-bar flex-8">
					<div className="flex flex-nowrap ml-10 ">
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
						<NewsCard />
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
