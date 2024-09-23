"use client";

import { ChangeEvent, useRef, useState } from "react";
import ReactQuill from "react-quill";
import Button from "@/components/Button";
import { CiCirclePlus } from "react-icons/ci";
import colors from "@/utils/colors";
import "./post-blog.css";
import "react-quill/dist/quill.bubble.css";
import { getDate } from "@/utils/dateFormatter";
// import Image from "next/image";

const PostBlog = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>();
  const [imageURL, setImageURL] = useState<string | ArrayBuffer | null>("");
  const [filter, setFilter] = useState("Food");
  const [currentDate, setCurrentDate] = useState(getDate());
  // const [show, setShow] = useState(false);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  const handlePost = () => {
    const blogData = {
      image: imageURL,
      title: title,
      content: value,
      filter: filter,
      date: currentDate,
    };
    localStorage.setItem("blog_data", JSON.stringify(blogData));
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage(file);

      const reader = new FileReader(); //allows to asynchronously read the contents of files stored on the user’s computer

      reader.readAsDataURL(file); // reads the file and encodes its contents as a Base64 string

      reader.onloadend = () => {
        const base64Image = reader.result; // Base64 string
        setImageURL(base64Image);
        // console.log("Base64 Image: ", base64Image);
      };

      // console.log("File selected: ", file);
      // console.log("URL created: ", imageURL);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
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
      <div className="flex flex-col gap-4 mt-4 ">
        <input
          type="text"
          placeholder="Title"
          className="text-3xl text-offwhite bg-transparent outline-none"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex justify-between items-center ">
          <div className="flex items-center gap-2">
            <CiCirclePlus
              size={30}
              color={colors.offwhite}
              className="cursor-pointer"
              onClick={handleIconClick}
            />
            {image && <span className="text-gray-700">{image.name}</span>}
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
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
        </div>
      </div>
      <ReactQuill
        theme="bubble"
        value={value}
        onChange={setValue}
        className="mt-6 bg-offwhite min-h-[calc(100vh-300px)]"
        placeholder="Enter your blog"
        modules={modules}
      />

      {/* FOR TEST  */}

      {/* <button
        onClick={() => setShow((prev) => !prev)}
        className="text-white text-3xl m-10"
      >
        Show
      </button> */}

      {/* {show && parsedBlogData && (
        <div className="text-xl text-white">
          <Image
            src={parsedBlogData.image}
            alt="Image"
            width={400}
            height={400}
          />
          <p className="text-3xl">{parsedBlogData.title}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: parsedBlogData.content,
            }}
            className="text-xl text-white"
          />
          <p>
            By : <span className="font-semibold">Aashish Katila</span>
          </p>
          <p>
            <span className="">Label :</span> {parsedBlogData.filter}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default PostBlog;
