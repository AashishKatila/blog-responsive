import { cn } from "@/lib/utils";
import { IButton } from "@/utils/types";

const Button = ({ text, buttonStyle }: IButton) => {
  return (
    <div
      className={cn(
        "md:px-8 md:py-2 px-4 py-1 md:text-md text-sm bg-offwhite font-medium rounded-3xl text-black",
        buttonStyle
      )}
    >
      {text}
    </div>
  );
};

export default Button;
