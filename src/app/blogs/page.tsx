"use client";

import { useEffect, useState } from "react";
import useFetch from "@/hooks/useFetch";
import BlogCard from "@/components/BlogCard";
import Filter from "@/components/Filter";
import PageControl from "@/components/PageControl";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader";
import ErrorComponent from "@/components/ErrorComponent";

const AllBlogs = () => {
  const router = useRouter();

  const limit = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("oldest");
  const [labelFilter, setLabelFilter] = useState("");

  const { data, loading, error } = useFetch({
    url: `/`,
  });

  useEffect(() => {
    const queryString = `?page=${currentPage}&limit=${limit}`;
    router.push(queryString);
  }, [currentPage, limit, router]);

  useEffect(() => {
    setCurrentPage(1);
  }, [dateFilter, labelFilter]);

  const sortedAndPaginatedData = () => {
    let sortedData = data ? [...data] : [];

    if (labelFilter) {
      sortedData = sortedData.filter((item) =>
        item.label.toLowerCase().includes(labelFilter.toLowerCase())
      );
    }

    // Apply date sorting
    if (dateFilter === "oldest") {
      sortedData = sortedData.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    } else if (dateFilter === "latest") {
      sortedData = sortedData.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    const startIndex = (currentPage - 1) * limit;
    const paginatedData = sortedData.slice(startIndex, startIndex + limit);
    return { paginatedData, totalItems: sortedData.length };
  };

  const { paginatedData, totalItems } = sortedAndPaginatedData();

  const totalPages = Math.ceil(totalItems / limit);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) {
    return (
      <div className="h-[calc(100vh-81px)] flex flex-wrap gap-4 ">
        <Loader count={4} />
      </div>
    );
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <div className="md:px-32 px-8 pt-10 text-white">
      <div className="flex justify-between mb-4">
        <h2 className="md:text-xl text-lg font-medium">All Blogs</h2>
        <Filter
          filter={filter}
          setFilter={setFilter}
          setDateFilter={setDateFilter}
          setLabelFilter={setLabelFilter}
        />
      </div>
      <div className="flex flex-wrap gap-6 md:gap-0 pt-6 md:pt-0 ">
        {paginatedData &&
          paginatedData.map((item) => (
            <BlogCard
              date={item.createdAt || ""}
              key={item.id}
              description={item.blog}
              imageSource={item.image}
              labelText={item.label}
              title={item.title}
              id={item.id || ""}
              className="w-full md:w-1/2 "
            />
          ))}
      </div>
      <PageControl
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        lastPage={totalPages}
      />
    </div>
  );
};

export default AllBlogs;
