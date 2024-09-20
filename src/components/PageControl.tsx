import React from "react";
import Button from "./Button";

const PageControl = () => {
  return (
    <div className="flex w-full pt-4 justify-between ">
      <Button text="Previous" buttonStyle="text-purple" />
      <Button text="Next" buttonStyle="text-purple" />
    </div>
  );
};

export default PageControl;
