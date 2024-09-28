import Link from "next/link";

const Notfound = () => {
  return (
    <div className="text-offwhite flex flex-col h-[calc(100vh-81px)]  items-center justify-center gap-10">
      <div className="lg:text-9xl md:text-6xl text-3xl font-bold">
        Error 400 - Not Found
      </div>
      <Link href="/" className="text-blue md:text-3xl text-xl font-semibold">
        Go back to home page
      </Link>
    </div>
  );
};

export default Notfound;
