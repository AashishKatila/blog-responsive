import React from "react";
import Button from "./Button";
import { IPageControl } from "@/utils/types";

const PageControl = ({
  currentPage,
  lastPage,
  handleNextPage,
  handlePrevPage,
}: IPageControl) => {
  return (
    <div className="flex w-full pt-4 pb-6 justify-between  ">
      <Button
        text="Previous"
        buttonStyle={`text-purple ${
          currentPage === 1 && "disabled opacity-60 cursor-not-allowed"
        } `}
        onClick={handlePrevPage}
      />
      <Button
        text="Next"
        buttonStyle={`text-purple  ${
          currentPage === lastPage && "disabled opacity-60 cursor-not-allowed"
        }`}
        onClick={handleNextPage}
      />
    </div>
  );
};

export default PageControl;
