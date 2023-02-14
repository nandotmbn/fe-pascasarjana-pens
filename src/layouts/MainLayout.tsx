import { Header } from "@/components";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IMainLayout {
	children: JSX.Element;
}

function MainLayout({ children }: IMainLayout) {

	return (
		<div>
			<Header />
			<div className="w-full flex justify-center my-8">{children}</div>
		</div>
	);
}

export default MainLayout;
