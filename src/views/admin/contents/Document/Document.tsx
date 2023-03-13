import { Breadcrumb } from "antd";
import React from "react";
import DocumentDetail from "./partials/DocumentDetail";
import DocumentList from "./partials/DocumentList";

function AdminDocumentViews() {
	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Konten",
					},
					{
						title: "Dokumen",
					},
				]}
			/>
			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="flex flex-row gap-4 w-full h-full">
					<DocumentList />
					<DocumentDetail />
				</div>
			</div>
		</div>
	);
}

export default AdminDocumentViews;
