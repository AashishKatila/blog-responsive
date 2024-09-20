import BlogCard from "@/components/BlogCard";
import PageControl from "@/components/PageControl";
import React from "react";

const AllBlogs = () => {
  const blogPosts = [
    {
      imageSource:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Sunday, Jan 01,2023",
      title: "Foodie Day ",
      description:
        " How do you create compelling presentations that wow your colleagues and impress your managers?",
      labelText: "Food" as "Food",
    },
    {
      imageSource:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Sunday, Jan 01,2023",
      title: "Techie Stuff",
      description:
        " How do you create compelling presentations that wow your colleagues and impress your managers?",
      labelText: "Tech" as "Tech",
    },
    {
      imageSource:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Sunday, Jan 01,2023",
      title: "Foodie Day ",
      description:
        " How do you create compelling presentations that wow your colleagues and impress your managers?",
      labelText: "Food" as "Food",
    },
    {
      imageSource:
        "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "Sunday, Jan 01,2023",
      title: "Techie Stuff",
      description:
        " How do you create compelling presentations that wow your colleagues and impress your managers?",
      labelText: "Tech" as "Tech",
    },
  ];
  return (
    <div className="md:px-32 px-8 pt-10 text-white">
      <div className="flex justify-between ">
        <h2 className="md:text-xl text-lg font-medium">All Blogs</h2>
        {/* <h2 className=" text-lg">Filter</h2> */}
      </div>
      <div className="flex flex-wrap gap-6 md:gap-0 pt-6 md:pt-0 ">
        {blogPosts.map((item) => (
          <BlogCard
            date={item.date}
            description={item.description}
            imageSource={item.imageSource}
            labelText={item.labelText}
            title={item.title}
            className="w-full md:w-1/2 "
          />
        ))}
      </div>
      <PageControl />
    </div>
  );
};

export default AllBlogs;
