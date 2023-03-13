import { Breadcrumb } from "antd";
import React from "react";
import NewsDetail from "./partials/NewsDetail";
import NewsList from "./partials/NewsList";

function AdminNewsViews() {
	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Konten",
					},
					{
						title: "Berita",
					},
				]}
			/>
			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="flex flex-row gap-4 w-full h-full">
					<NewsList />
					<NewsDetail />
				</div>
			</div>
		</div>
	);
}

export default AdminNewsViews;
