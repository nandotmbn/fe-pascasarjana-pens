import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const MDEditor: any = dynamic(() => import("@uiw/react-md-editor"), {
	ssr: false,
});

function UserAbout() {
	const [value, setValue] = useState("**Hello world!!!**");

	return (
		<div className="h-full w-full flex-3 flex flex-col">
			<h2 className="mb-4 text-xl font-semibold flex-1">Tentang Pengguna</h2>
			<div className="relative h-full flex-12">
				<div className="no-prose overflow-y-scroll text-xs absolute inset-0 scrollbar scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-blue-100">
					<MDEditor value={value} onChange={setValue} />
				</div>
			</div>
		</div>
	);
}

export default UserAbout;
