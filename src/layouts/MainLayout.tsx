import { Header } from "@/components";
import React from "react";

interface IMainLayout {
	children: JSX.Element;
}

function MainLayout({ children }: IMainLayout) {
	return (
		<div>
			<Header />
			<div className="w-full flex justify-center pt-40">{children}</div>
		</div>
	);
}

export default MainLayout;
