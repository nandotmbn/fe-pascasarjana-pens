import { LandingPageInterface } from "@/interfaces/home";
import React from "react";
import { Carousel, Image } from "antd";

function LandingPage({ searchText }: LandingPageInterface) {
	return (
		<div
			className={`flex-3 w-full duration-700 overflow-hidden ${
				searchText != "" && "hidden"
			}`}
		>
			<div className="w-full">
				<Carousel autoplay >
					<Image
						preview={false}
						className="cursor-pointer md:inline"
						src="/pens-01.jpg"
						alt="Logo Koridorlab"
					/>
					<Image
						preview={false}
						className="cursor-pointer md:inline"
						src="/pens-02.jpg"
						alt="Logo Koridorlab"
					/>
					<Image
						preview={false}
						className="cursor-pointer md:inline"
						src="/pens-03.jpg"
						alt="Logo Koridorlab"
					/>
				</Carousel>
			</div>
		</div>
	);
}

export default LandingPage;
