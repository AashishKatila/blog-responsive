"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import ReactQuill from "react-quill";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getDate } from "@/utils/dateFormatter";
import Button from "@/components/Button";
import "react-quill/dist/quill.bubble.css";
import "./post-blog.css";
import colors from "@/utils/colors";
import { CiCirclePlus } from "react-icons/ci";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogPost, BlogSchema } from "@/utils/types";

const PostBlog = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogPost>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      createdAt: getDate(),
      label: "Food",
      author: session?.user?.name || "Anonymous",
    },
  });

  const [valueEditor, setValueEditor] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>();
  const [imageURL, setImageURL] = useState<string | ArrayBuffer | null>("");
  const [filter, setFilter] = useState("Food");

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/");
    }
  }, [session, status]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
    ],
  };

  const handleDraft = () => {
    const author = session?.user?.name || "Anonymous";
    const blogData = {
      image: imageURL,
      title: title,
      filter: filter,
      blog: valueEditor,
      label: filter,
      author: author,
    };
    localStorage.setItem("blog_data", JSON.stringify(blogData));
    toast("Saved as Draft");
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
        if (typeof base64Image === "string") {
          setImageURL(base64Image);
          setValue("image", base64Image);
        } else {
          console.error(
            "Error: Image could not be converted to base64 string."
          );
        }
      };
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit: SubmitHandler<BlogPost> = async (data) => {
    console.log("Submit triggered");
    console.log("Data = ", data);
    let blogData;
    if (status === "authenticated" && session && session.user) {
      blogData = {
        title: title,
        blog: valueEditor,
        label: data.label,
        image: imageURL,
        author: data.author,
        createdAt: data.createdAt,
      };
    }
    const PROJECT_TOKEN = process.env.NEXT_PUBLIC_MOCK_API_SECRET_KEY;

    fetch(`https://${PROJECT_TOKEN}.mockapi.io/api/v1/blogs`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blogData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((_) => {
        toast.success("Succesfully Published");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      })
      .catch((error) => {
        toast.error("Error while posting");
        console.log("Error", error);
      });
  };

  return (
    <form className="md:px-32 px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex md:gap-6 gap-4 justify-end">
        <Button
          text=" Save as Draft"
          buttonStyle="bg-blue-400 text-offwhite md:text-lg text-sm"
          onClick={handleDraft}
        />
        <button
          className="px-6 py-1 rounded-3xl bg-purple text-offwhite md:text-lg text-sm"
          type="submit"
        >
          + Post
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-4 ">
        <input
          type="text"
          placeholder="Title"
          {...register("title")}
          className="text-3xl text-offwhite bg-transparent outline-none"
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <span className="text-red-600">{errors.title.message}</span>
        )}
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="flex  items-center gap-2">
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
          {errors.image && (
            <span className="text-red-600">{errors.image.message}</span>
          )}
          <select
            name="Filter"
            id="filter"
            className="mt-2 max-w-min bg-gray-200 rounded-3xl md:px-4 px-2"
            onChange={(e) => {
              setFilter(e.target.value);
              console.log(e.target.value);
            }}
          >
            <option value="Food">Food</option>
            <option value="Tech">Tech</option>
            <option value="Research">Research</option>
          </select>
        </div>
      </div>
      <ReactQuill
        theme="bubble"
        value={valueEditor}
        onChange={(val) => {
          setValueEditor(val);
          setValue("content", val);
        }}
        className="mt-6 bg-offwhite min-h-[calc(100vh-300px)]"
        placeholder="Enter your blog"
        modules={modules}
      />
      {errors.content && (
        <span className="text-red-600">{errors.content.message}</span>
      )}
    </form>
  );
};

export default PostBlog;
