import { cn } from "@/lib/utils";
import { IButton } from "@/utils/types";

const Button = ({ text, buttonStyle, onClick }: IButton) => {
  return (
    <div
      className={cn(
        "md:px-8 px-2 py-1 md:text-md text-sm bg-offwhite font-medium  rounded-3xl text-black cursor-pointer",
        buttonStyle
      )}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
