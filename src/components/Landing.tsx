"use client";

import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Labels from "./Labels";
import BlogCard from "./BlogCard";
import useFetch from "@/hooks/useFetch";
import { getDate } from "@/utils/dateFormatter";

const Landing = () => {
  const { data, loading, error } = useFetch({
    url: `?page=1&limit=3`,
  });

  if (error) {
    return <p className="text-red-500 text-3xl">Error loading Data</p>;
  }

  const firstItem = data?.[0];

  const shortParagraph = firstItem?.blog.split(" ").slice(0, 26).join(" ");

  const secondAndThirdItems = data?.slice(1, 3);
  console.log(secondAndThirdItems);

  return (
    <div className="md:px-32 md:h-[calc(100vh-80px)] px-8 pt-6 text-offwhite ">
      <div className="flex flex-col  gap-4 md:flex-row">
        <div className="w-full mt-2 flex py-2 md:py-4 flex-col md:justify-center gap-2 md:w-1/2 px-4 cursor-pointer group ">
          <Image
            src={firstItem?.image || ""}
            alt={firstItem?.title || "Image"}
            width={550}
            height={500}
          />
          <h2 className="text-purple md:text-lg md:font-medium font-normal ">
            {firstItem?.createdAt ? getDate({ date: firstItem.createdAt }) : ""}
          </h2>
          <div className="flex justify-between items-center">
            <h1 className="text-offwhite md:text-2xl text-xl font-semibold ">
              {firstItem?.title}
            </h1>
            <MdOutlineArrowOutward
              size={26}
              className="text-white transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-purple "
            />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: shortParagraph || "",
            }}
            className=" text-gray-500 "
          />
          <Labels label="Research" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-0 ">
          {loading ? (
            <p className="text-offwhite text-2xl">Loading....</p>
          ) : (
            secondAndThirdItems &&
            secondAndThirdItems.map((item) => (
              <BlogCard
                key={item.id}
                id={item.id || ""}
                date={item.createdAt}
                description={item.blog}
                imageSource={item.image}
                labelText={item.label}
                title={item.title}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
