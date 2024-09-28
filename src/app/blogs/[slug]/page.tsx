"use client";

import Labels from "@/components/Labels";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import { useParams } from "next/navigation";
import "./BlogById.css";
import { getDate } from "@/utils/dateFormatter";
import { Loader } from "@/components/Loader";
import Notfound from "./notfound";

const BlogsById = () => {
  const params = useParams();
  const { data, loading, error } = useFetch({ url: `/${params.slug}` });

  const blogData = Array.isArray(data) ? data[0] : data;

  if (loading) {
    return <Loader count={1} loaderStyle="flex-col" />;
  }

  if (error) {
    return <Notfound />;
  }

  const formattedDate = blogData ? getDate({ date: blogData?.createdAt }) : "";

  return (
    <div className="md:px-32 px-8 mt-10 mb-8 text-muted-foreground blog-content ">
      {blogData ? (
        <div className="flex flex-col md:gap-4 gap-2 text-xl">
          <h2 className="md:text-5xl text-2xl tracking-wider text-center text-offwhite font-semibold">
            {blogData.title}
          </h2>
          <div className="relative w-full max-w-2xl mx-auto md:h-[300px] h-[25vh] ">
            <Image
              src={blogData.image}
              alt="Blog Image"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <p className="text-purple">{formattedDate}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: blogData.blog,
            }}
            className="text-lg"
          />
          <p className="flex gap-2">
            Author :<p className="text-purple font-medium">{blogData.author}</p>
          </p>
          <Labels label={blogData.label} labelStyle="cursor-default" />
        </div>
      ) : (
        <p className="text-offwhite">No Blog</p>
      )}
    </div>
  );
};

export default BlogsById;
