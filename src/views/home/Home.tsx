import React, { CSSProperties, useState } from "react";
import Jumbotron from "./partials/Jumbotron";

function HomeViews() {
	const [searchText, setSearchText] = useState("");
	return (
		<div className={`w-full flex flex-col`}>
			<Jumbotron />
		</div>
	);
}

export default HomeViews;
