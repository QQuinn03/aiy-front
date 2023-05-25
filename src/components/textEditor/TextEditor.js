import React, { useState, useEffect } from "react";
import "./TextEditor.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

const TextEditor = ({ content, onContentChange }) => {
  const [editorValue, setEditorValue] = useState(content);

  useEffect(() => {
    setEditorValue(content);
  }, [content]);

  const handleEditorChange = (value) => {
    setEditorValue(value);
    onContentChange(value); // Call the callback function
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
  ];

  return (
    <div className="text-editor">
      <ReactQuill
        value={editorValue}
        onChange={handleEditorChange}
        modules={modules}
        formats={formats}
        readOnly={false}
        theme={"snow"}
      />
    </div>
  );
};

export default TextEditor;
