"use client";

import Labels from "@/components/Labels";
import Image from "next/image";

const BlogsById = () => {
  const savedBlogData = localStorage.getItem("blog_data");
  const parsedBlogData = savedBlogData ? JSON.parse(savedBlogData) : null;
  return (
    <div className="md:px-32 px-8 mt-10 mb-8">
      {parsedBlogData && (
        <div className="flex flex-col md:gap-4 gap-2 text-xl text-offwhite">
          <h2 className="md:text-5xl text-2xl tracking-wider text-center font-semibold">
            {parsedBlogData.title}
          </h2>
          <div className="relative w-full max-w-2xl mx-auto md:h-[300px] h-[40vh] ">
            <Image
              src={parsedBlogData.image}
              alt="Blog Image"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <p className="text-purple">{parsedBlogData.date}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: parsedBlogData.content,
            }}
            className="text-lg text-muted-foreground"
          />
          <p className="flex gap-2">
            Author :
            <span className="text-purple font-medium">Aashish Katila</span>
          </p>
          <Labels label={parsedBlogData.filter} />
        </div>
      )}
    </div>
  );
};

export default BlogsById;
