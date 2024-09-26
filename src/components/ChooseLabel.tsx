import { IChooseLabel } from "@/utils/types";
import React from "react";

const ChooseLabel = ({ filter, setFilter }: IChooseLabel) => {
  return (
    <select
      name="Filter"
      id="filter"
      value={filter}
      className="mt-2 max-w-min bg-gray-200 rounded-3xl md:px-4 px-2"
      onChange={(e) => {
        setFilter(e.target.value);
        console.log(e.target.value);
      }}
    >
      <option value="Food">Food</option>
      <option value="Tech">Tech</option>
      <option value="Research">Research</option>
    </select>
  );
};

export default ChooseLabel;
