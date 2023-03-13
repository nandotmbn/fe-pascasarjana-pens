import { Breadcrumb } from "antd";
import React from "react";
import UserAbout from "./partials/UserAbout";
import BiodataUserList from "./partials/UserList";

function AboutViews() {
	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Pengguna",
					},
					{
						title: "Tentang",
					},
				]}
			/>
			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="flex flex-row gap-8 w-full h-full">
					<BiodataUserList />
					<UserAbout />
				</div>
			</div>
		</div>
	);
}

export default AboutViews;
