"use client";

import { useEffect } from "react";
import { IFilterProps } from "@/utils/types";

const Filter = ({
  filter,
  setFilter,
  setDateFilter,
  setLabelFilter,
}: IFilterProps) => {
  useEffect(() => {
    if (filter === "date") {
      setDateFilter("oldest");
      setLabelFilter("");
    } else if (filter === "label") {
      setLabelFilter("food");
      setDateFilter("");
    } else {
      setFilter("");
      setDateFilter("");
      setLabelFilter("");
    }
  }, [filter, setDateFilter, setLabelFilter]);

  return (
    <div className="flex gap-4">
      {/* Filter  */}
      <select
        className="text-black px-4 rounded-3xl outline-none"
        onClick={(e) => setFilter(e.currentTarget.value)}
      >
        <option value="">Filter</option>
        <option value="date">Date</option>
        <option value="label">Label</option>
      </select>

      {/* Date Filter  */}
      {filter === "date" && (
        <select
          className="text-black px-4 rounded-3xl outline-none"
          onClick={(e) => setDateFilter(e.currentTarget.value)}
        >
          <option value="oldest">Oldest</option>
          <option value="latest">Latest</option>
        </select>
      )}

      {/* Label Filter  */}
      {filter === "label" && (
        <select
          className="text-black px-4 rounded-3xl outline-none"
          onClick={(e) => setLabelFilter(e.currentTarget.value)}
        >
          <option value="food">Food</option>
          <option value="tech">Tech</option>
          <option value="research">Research</option>
        </select>
      )}
    </div>
  );
};

export default Filter;
