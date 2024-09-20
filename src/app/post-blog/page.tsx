"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import Button from "@/components/Button";
import "react-quill/dist/quill.snow.css";

const PostBlog = () => {
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("Food");
  const [show, setShow] = useState(false);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
    ],
  };

  const handlePost = () => {
    const blogData = {
      content: value,
      filter: filter,
    };
    localStorage.setItem("blog_data", JSON.stringify(blogData));
  };

  const savedBlogData = localStorage.getItem("blog_data");
  const parsedBlogData = savedBlogData ? JSON.parse(savedBlogData) : null;

  return (
    <div className="md:px-32 px-8 py-6 ">
      <div className="w-full flex md:gap-6 gap-4 justify-end">
        <Button
          text=" Save as Draft"
          buttonStyle="bg-blue-400 text-offwhite md:text-lg text-sm  "
        />
        <button
          className="px-6 py-1 rounded-3xl bg-purple text-offwhite md:text-lg text-sm"
          onClick={handlePost}
        >
          + Post
        </button>
      </div>
      <ReactQuill
        theme="snow"
        modules={modules}
        value={value}
        onChange={setValue}
        className="bg-white mt-6 min-h-[calc(100vh-300px)]"
      />
      <select
        name="Filter"
        id="filter"
        className="mt-2 bg-gray-200 rounded-3xl md:px-4 px-2"
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="Food">Food</option>
        <option value="Tech">Tech</option>
        <option value="Research">Research</option>
      </select>
      <button
        onClick={() => setShow((prev) => !prev)}
        className="text-white text-3xl m-10"
      >
        Show
      </button>

      {/* FOR TEST  */}
      {show && parsedBlogData && (
        <div className="text-xl text-white">
          <div
            dangerouslySetInnerHTML={{
              __html: parsedBlogData.content,
            }}
            className="text-xl text-white"
          />
          <p>
            <strong>Label :</strong> {parsedBlogData.filter}
          </p>
        </div>
      )}
    </div>
  );
};

export default PostBlog;
