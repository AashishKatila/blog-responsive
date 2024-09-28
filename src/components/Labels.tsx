import { cn } from "@/lib/utils";
import colors from "@/utils/colors";
import { ILabel } from "@/utils/types";

const Labels = ({ label, labelStyle }: ILabel) => {
  const labelColors: {
    [key in ILabel["label"]]: string;
  } = {
    Food: colors.food,
    Tech: colors.tech,
    Research: colors.research,
  };
  return (
    <div
      className={cn(
        `md:px-8 max-w-min px-4 md:text-lg text-md font-medium rounded-3xl cursor-pointer bg-label_bg`,
        labelStyle
      )}
      style={{
        color: labelColors[label],
      }}
    >
      {label}
    </div>
  );
};

export default Labels;
