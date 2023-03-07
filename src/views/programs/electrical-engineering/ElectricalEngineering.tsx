import React from "react";
import Link from "next/link";
import { NewsCardInterface } from "@/interfaces/home";
import Image from "next/image";
import EEJumbotron from "./partials/Jumbotron";
import EEVisionAndMission from "./partials/VisionAndMission";
import EEQualification from "./partials/Qualification";
import EESpecifications from "./partials/Specifications";

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
				{/* <div className="flex-4 p-2">
					<div className="flex flex-row gap-1 mt-2">
						<div className="w-2 h-2 rounded-full bg-white"></div>
						<div className="w-2 h-2 rounded-full bg-white"></div>
						<div className="w-2 h-2 rounded-full bg-white"></div>
					</div>
					<h5
						className={`font-semibold text-xl ${
							isOdd ? "text-white" : "text-gray-800"
						}`}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h5>
				</div>
				<div className="self-end flex-1 p-2">
					<Link href="/article" className="flex flex-row items-center gap-2">
						<p className={`text-sm ${isOdd ? "text-white" : "text-gray-800"}`}>
							Baca Selengkapnya...
						</p>
						<button
							className={`w-6 h-6 rounded-full ${
								isOdd ? "bg-white" : "bg-gray-800"
							}`}
						>
							<span className="material-symbols-outlined text-yellow-400">
								chevron_right
							</span>
						</button>
					</Link>
				</div>
				<div className="relative">
					<div
						className={`absolute right-0 top-0 h-8 w-8 rounded-br-lg rounded-tl-lg ${
							isOdd ? "bg-yellow-400" : "bg-blue-800"
						}`}
					></div>
					<div
						className={`absolute -right-12 top-0 h-16 w-16 rounded-br-lg rounded-tl-lg rotate-45 bg-gray-50`}
					></div>
				</div> */}
			</div>
		</div>
	);
}

function ElectricalEngineeringView() {
	return (
		<div className="flex w-full flex-col">
			<EEJumbotron />
      <div className="relative">
				<div className="absolute left-0 -top-12">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_2.png"
						alt="Jumbotron PENS"
						width={120}
						height={1}
					/>
				</div>
			</div>
			<EEVisionAndMission />
      <div className="relative">
				<div className="absolute right-0 -top-20">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_4.png"
						alt="Jumbotron PENS"
						width={60}
						height={1}
					/>
				</div>
			</div>
			<EEQualification />
      <div className="relative">
				<div className="absolute left-0 -top-20">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_2.png"
						alt="Jumbotron PENS"
						width={100}
						height={1}
					/>
				</div>
			</div>
			<EESpecifications />
      <div className="relative">
				<div className="absolute right-0 -top-72">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_4.png"
						alt="Jumbotron PENS"
						width={60}
						height={1}
					/>
				</div>
			</div>
		</div>
	);
}

export default ElectricalEngineeringView;
