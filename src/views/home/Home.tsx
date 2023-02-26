import React, { CSSProperties, useState } from "react";
import LandingPage from "./partials/LandingPage";
import SearchPanel from "./partials/SearchPanel";

const homeStyle: CSSProperties = {
	height: "400vh"
}

function HomeViews() {
	const [searchText, setSearchText] = useState("");
	return (
		<div
			className={`w-full flex flex-col md:flex-row gap-8 px-2 md:px-8 ${
				searchText &&
				"duration-700 bg-black z-50 absolute inset-0 h-screen w-screen"
			}`}

			style={homeStyle}
		>
			{/* <SearchPanel searchText={searchText} setSearchText={setSearchText} /> */}
			{/* <LandingPage searchText={searchText} /> */}
		</div>
	);
}

export default HomeViews;
