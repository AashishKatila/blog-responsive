import { IError } from "@/utils/types";
import React from "react";

const ErrorComponent = ({ error }: IError) => {
  return <div className="p-10 text-3xl text-red-500">{error}</div>;
};

export default ErrorComponent;
