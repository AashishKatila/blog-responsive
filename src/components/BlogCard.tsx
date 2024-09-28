"use client";

import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Labels from "./Labels";
import Image from "next/image";
import { IBlogCard } from "@/utils/types";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { getDate } from "@/utils/dateFormatter";

const BlogCard = ({
  imageSource,
  date,
  title,
  description,
  labelText,
  className,
  id,
}: IBlogCard) => {
  const [shortDesc, useShortDesc] = useState("");
  const router = useRouter();

  const formattedDate = getDate({ date });

  const handleBlog = (id: string) => {
    router.push(`/blogs/${id}`);
  };

  useEffect(() => {
    const contents = description.split(" ").slice(0, 12).join(" ");
    useShortDesc(contents);
  }, [description]);
  return (
    <div
      className={cn(
        "md:h-[40vh] h-[50vh] flex md:flex-row flex-col gap-4 p-2 cursor-pointer group ",
        className
      )}
      onClick={() => handleBlog(id)}
    >
      <div className="md:w-1/2 h-full w-full relative">
        <Image src={imageSource} alt="Image" fill objectFit="contain" />
      </div>
      <div className="md:w-1/2 w-full flex flex-col gap-2 justify-center ">
        <h2 className="text-purple ">{formattedDate}</h2>
        <div className="flex justify-between items-center ">
          <h1 className="text-offwhite text-xl font-medium  ">{title}</h1>
          <MdOutlineArrowOutward
            size={26}
            className="text-white transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-purple "
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: shortDesc,
          }}
          className="text-lg text-gray-500 "
        />
        <Labels label={labelText} />
      </div>
    </div>
  );
};

export default BlogCard;
