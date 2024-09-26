import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { IQuillTextEditor } from "@/utils/types";

const QuillTextEditor = ({
  setValueEditor,
  valueEditor,
  setValue,
  errors,
}: IQuillTextEditor) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };
  return (
    <>
      <ReactQuill
        theme="bubble"
        value={valueEditor}
        onChange={(val) => {
          setValueEditor(val);
          setValue("blog", val);
        }}
        className="mt-6 bg-offwhite min-h-[calc(100vh-300px)]"
        placeholder="Enter your blog"
        modules={modules}
      />
      {errors.blog && (
        <span className="text-red-600">{errors.blog.message}</span>
      )}
    </>
  );
};

export default QuillTextEditor;
