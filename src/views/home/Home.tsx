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
			<News />
		</div>
	);
}

export default HomeViews;
