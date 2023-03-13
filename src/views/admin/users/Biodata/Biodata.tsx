import { Breadcrumb } from "antd";
import React from "react";
import UserBiodata from "./partials/UserBiodata";
import BiodataUserList from "./partials/UserList";

function AdminBiodataViews() {
	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Pengguna",
					},
					{
						title: "Biodata",
					},
				]}
			/>
			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="flex flex-row gap-8 w-full h-full">
					<BiodataUserList />
					<UserBiodata />
				</div>
			</div>
		</div>
	);
}

export default AdminBiodataViews;
