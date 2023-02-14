import Image from "next/image";
import React, { useState } from "react";

function HomeViews() {
	const [searchText, setSearchText] = useState("");
	return (
		<div
			className={`w-full flex flex-col md:flex-row gap-8 px-2 md:px-8 ${
				searchText &&
				"duration-700 bg-black absolute inset-0 h-screen w-screen"
			}`}
		>
			<div
				className={`items-center flex flex-col md:items-start ${
					searchText ? "justify-center h-full lg:w-6/12" : "flex-2"
				}`}
			>
				{searchText && (
					<Image
						className="cursor-pointer"
						src="/pens-long-logo.png"
						alt="Logo PENS"
						width={200}
						height={300}
					/>
				)}
				<h2
					className={`font-semibold font-xl md:text-3xl lg:text-6xl duration-700 ${
						searchText ? "text-white" : "text-gray-700"
					}`}
				>
					Apa yang sedang anda cari?
				</h2>
				<div className="w-full flex flex-row justify-between mt-4 border-2 border-gray-400 rounded-full px-4 py-2">
					<input
						className={`flex-7 outline-0 bg-transparent ${
							searchText && "text-white"
						}`}
						type="text"
						onChange={(event) => {
							setSearchText(event.target.value);
						}}
					/>
					<div className="flex-1 items-center flex justify-center">
						<i className={`material-icons ${searchText && "text-white"}`}>
							search
						</i>
					</div>
				</div>
				{searchText && (
					<div className="text-white mt-44">
						
					</div>
				)}
			</div>
			<div
				className={`flex-3 bg-yellow-400 h-44 w-full duration-700 ${
					searchText && "hidden"
				}`}
			></div>
		</div>
	);
}

export default HomeViews;
