"use client";

import { useState } from "react";
import DisplayInfo from "@/components/DisplayInfo/DisplayInfo";
import Editor from "@/components/Editor/Editor";

export default function Home() {
  const [editorContent, setEditorContent] = useState<string>("");

  const handleContentSubmit = (content: string) => {
    setEditorContent(content);
  };

  return (
    <div className="w-screen h-screen mx-auto bg-black/85 p-4">
      <Editor onContentSubmit={handleContentSubmit} />
      <DisplayInfo content={editorContent} />
    </div>
  );
}
