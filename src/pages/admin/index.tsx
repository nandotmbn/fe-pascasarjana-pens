import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor: any = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

function Admin() {
  const [value, setValue] = useState("**Hello world!!!**");
  return (
    <div className="">
      <MDEditor value={value} onChange={setValue} />
    </div>
  );
}

export default Admin;