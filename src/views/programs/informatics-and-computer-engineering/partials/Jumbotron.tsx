import React from "react";
import { NewsCardInterface } from "@/interfaces/home";
import Image from "next/image";

function NewsCard({ isOdd }: NewsCardInterface) {
	return (
		<div className="inline-block px-3">
			<div
				className={`w-96 max-w-xs overflow-hidden rounded-lg hover:drop-shadow-2xl transition-shadow duration-300 ease-in-out py-8 flex flex-col justify-between ${
					isOdd ? "bg-blue-800" : "bg-yellow-400"
				}`}
			>
				<div className="flex-2">
					<Image
						className="contain w-full relative"
						src="/images/home/pens_jumbotron.png"
						alt="Jumbotron PENS"
						width={1960}
						height={1}
					/>
				</div>
			</div>
		</div>
	);
}

function ICEJumbotron() {
  return (
    <div className="w-full flex flex-row">
			<div className="flex flex-col flex-4 p-8">
				<h1 className="text-5xl font-bold text-blue-800">
					S2 Terapan Teknik Informatika dan Komputer
				</h1>
				<p className="text-justify mt-8">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
					quia sed officia sunt! Repellat iste id molestiae cum rerum aut ipsa,
					saepe facere autem dolore quisquam unde nesciunt nemo. Distinctio
					rerum expedita ducimus libero. Pariatur doloribus officiis cupiditate
					error aliquid!
				</p>
			</div>
			<div className="flex flex-5 overflow-x-scroll py-10 hide-scroll-bar flex-9">
				<div className="flex flex-nowrap ml-10 ">
					{[1, 2, 3, 4, 5].map((e: any, i: number) => {
						return <NewsCard key={i} isOdd={i % 2 == 0 ? true : false} />;
					})}
				</div>
			</div>
		</div>
  );
}

export default ICEJumbotron;