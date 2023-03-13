import { Breadcrumb } from "antd";
import React from "react";
import InformationDetail from "./partials/InformationDetail";
import InformationList from "./partials/InformationList";

function AdminInformationViews() {
	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Konten",
					},
					{
						title: "Informasi",
					},
				]}
			/>
			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="flex flex-row gap-4 w-full h-full">
					<InformationList />
					<InformationDetail />
				</div>
			</div>
		</div>
	);
}

export default AdminInformationViews;
