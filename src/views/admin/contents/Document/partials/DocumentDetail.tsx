import dynamic from "next/dynamic";
import React, { useState } from "react";
import { markkdownInit } from "@/constants";

const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {
	ssr: false,
});

function DocumentDetail() {
	return (
		<div className="h-full w-full flex-5 flex flex-col">
			<h2 className="mb-4 text-xl font-semibold flex-1">Preview Dokumen</h2>
			<div className="relative h-full flex-12">
				<div className="prose-ol:list-decimal prose-ul:list-disc prose-li overflow-y-scroll text-xs absolute inset-0 scrollbar scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-blue-100">
					<PDFViewer />
				</div>
			</div>
		</div>
	);
}

export default DocumentDetail;
