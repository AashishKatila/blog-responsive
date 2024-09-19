import Image from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Labels from "./Labels";
import BlogCard from "./BlogCard";

const Landing = () => {
  const otherBlogs = [
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
    <div className="md:px-32  px-8  pt-6  mb-20 text-offwhite">
      <h2 className="md:text-2xl text-lg">Recent Blog Posts</h2>
      <div className="flex flex-col md:h-[calc(100vh-100px)] gap-4 md:flex-row pt-4">
        <div className="w-full flex py-2 md:py-4 flex-col gap-2 md:w-1/2 px-4 ">
          <Image
            src="https://images.pexels.com/photos/5380678/pexels-photo-5380678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Image"
            width={600}
            height={500}
          />
          <h2 className="text-purple md:text-lg md:font-medium font-normal ">
            Sunday, Jan 01,2023
          </h2>
          <div className="flex justify-between items-center cursor-pointer group">
            <h1 className="text-offwhite md:text-2xl text-xl font-semibold ">
              UX review presentations
            </h1>
            <MdOutlineArrowOutward
              size={26}
              className="text-white transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:text-purple "
            />
          </div>
          <p className="text-gray-500 ">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
          <Labels label="Research" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-0 ">
          {otherBlogs.map((item) => (
            <BlogCard
              date={item.date}
              description={item.description}
              imageSource={item.imageSource}
              labelText={item.labelText}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
