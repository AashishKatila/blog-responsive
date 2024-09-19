import { IButton } from "@/utils/types";

const Button = ({ text }: IButton) => {
  return (
    <div className="md:px-8 md:py-2 px-4 py-1 md:text-md text-sm bg-offwhite font-medium rounded-3xl text-black">
      {text}
    </div>
  );
};

export default Button;
