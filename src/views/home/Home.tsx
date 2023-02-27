import Image from "next/image";
import React, { CSSProperties, useState } from "react";
import Announcements from "./partials/Announcements";
import Jumbotron from "./partials/Jumbotron";
import News from "./partials/News";

function HomeViews() {
	const [searchText, setSearchText] = useState("");
	return (
		<div className={`w-full flex flex-col`}>
			<Jumbotron />
			<Announcements />
			<div className="relative">
				<div className="absolute right-0 top-0">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_3.png"
						alt="Jumbotron PENS"
						width={120}
						height={1}
					/>
				</div>
			</div>
			<News />
			<div className="relative">
				<div className="absolute right-0 top-0">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_4.png"
						alt="Jumbotron PENS"
						width={120}
						height={1}
					/>
				</div>
			</div>
			{/* <News /> */}
		</div>
	);
}

export default HomeViews;
