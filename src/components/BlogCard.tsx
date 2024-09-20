import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Labels from "./Labels";
import Image from "next/image";
import { IBlogCard } from "@/utils/types";
import { cn } from "@/lib/utils";

const BlogCard = ({
  imageSource,
  date,
  title,
  description,
  labelText,
  className,
}: IBlogCard) => {
  return (
    <div
      className={cn(
        "md:h-[40vh] h-[50vh] flex md:flex-row flex-col gap-4 px-2 ",
        className
      )}
    >
      <div className="md:w-1/2 h-full w-full relative">
        <Image src={imageSource} alt="Image" fill objectFit="contain" />
      </div>
      <div className="md:w-1/2 w-full flex flex-col gap-2 justify-center ">
        <h2 className="text-purple ">{date}</h2>
        <div className="flex justify-between items-center cursor-pointer group">
          <h1 className="text-offwhite text-xl font-medium  ">{title}</h1>
          <MdOutlineArrowOutward
            size={26}
            className="text-white transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-purple "
          />
        </div>
        <p className="text-gray-500 ">{description}</p>
        <Labels label={labelText} />
      </div>
    </div>
  );
};

export default BlogCard;
