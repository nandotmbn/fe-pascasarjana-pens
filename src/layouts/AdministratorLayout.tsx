import React, { useEffect, useState } from "react";
import { HeaderAdministratorLayout } from "@/components";
import NavigationBarAdministratorLayout from "@/components/AdministratorLayout/NavigationBar";
import SidebarAdministratorLayout from "@/components/AdministratorLayout/Sidebar";

interface IMainLayout {
	children: JSX.Element;
}

function AdministratorLayout({ children }: IMainLayout) {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	if (!domLoaded) return <div></div>;

	return (
		<div className="h-screen w-screen bg-gray-100 flex-col flex">
			<HeaderAdministratorLayout />
			<body className="flex flex-row flex-12 px-2 py-2 items-center justify-between gap-2">
				<NavigationBarAdministratorLayout />
				<div className="flex-20 bg-white rounded-2xl h-full p-4">
					{children}
				</div>
				<SidebarAdministratorLayout />
			</body>
		</div>
	);
}

export default AdministratorLayout;
