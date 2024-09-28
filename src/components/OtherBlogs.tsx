"use client";

import BlogCard from "./BlogCard";
import useFetch from "@/hooks/useFetch";
import { Loader } from "./Loader";
import Link from "next/link";
import ErrorComponent from "./ErrorComponent";

const OtherBlogs = () => {
  const { data, loading, error } = useFetch({
    url: "?page=1&limit=4",
  });

  if (loading) {
    return (
      <div className="flex gap-4">
        <Loader count={4} />
      </div>
    );
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }
  return (
    <div className="md:px-32 px-8 pt-10 ">
      <div className="flex justify-between">
        <h2 className="md:text-2xl text-xl text-offwhite cursor-pointer hover:text-purple transition-all duration-300">
          <Link href="/blogs">All Blogs</Link>
        </h2>
        {/* Filter  */}
      </div>
      <div className="flex flex-wrap gap-6 md:gap-0 pt-6 md:pt-0 ">
        {data?.length ? (
          <>
            {data.map((item) => (
              <BlogCard
                key={item.id}
                id={item.id || ""}
                date={item.createdAt}
                description={item.blog}
                imageSource={item.image}
                labelText={item.label}
                title={item.title}
                className="w-full md:w-1/2"
              />
            ))}
            <div className="my-6 text-offwhite md:text-2xl text-xl font-medium w-full text-center cursor-pointer hover:text-purple transition-all duration-300 ">
              <Link href="/blogs">See All Blogs</Link>
            </div>
          </>
        ) : (
          <div className="text-offwhite mt-4">No Blog Posts Found</div>
        )}
      </div>
    </div>
  );
};

export default OtherBlogs;
