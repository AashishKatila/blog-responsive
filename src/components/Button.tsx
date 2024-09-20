import { cn } from "@/lib/utils";
import { IButton } from "@/utils/types";
import Link from "next/link";

const Button = ({ text, buttonStyle }: IButton) => {
  return (
    <div
      className={cn(
        "md:px-8 px-4 py-1 md:text-md text-sm bg-offwhite font-medium rounded-3xl text-black cursor-pointer",
        buttonStyle
      )}
    >
      {text}
    </div>
  );
};

export default Button;
