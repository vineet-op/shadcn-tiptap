import React from "react";

interface DisplayInfoProps {
  content?: string;
}

const DisplayInfo = ({ content }: DisplayInfoProps) => {
  return (
    <div className="mt-4 p-4 bg-white rounded-md max-w-4xl mx-auto">
      <h3 className="text-lg font-semibold mb-2">Editor Content:</h3>
      {content ? (
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <p className="text-gray-500">
          No content to display yet. Click "Send" to see the editor content
          here.
        </p>
      )}
    </div>
  );
};

export default DisplayInfo;
