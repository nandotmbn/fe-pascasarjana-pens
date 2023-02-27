import { Header } from "@/components";
import Footer from "@/components/Footer";
import React from "react";

interface IMainLayout {
	children: JSX.Element;
}

function MainLayout({ children }: IMainLayout) {
	return (
		<div>
			<Header />
			<div className="w-full flex justify-center pt-16">{children}</div>
			<Footer />
		</div>
	);
}

export default MainLayout;
