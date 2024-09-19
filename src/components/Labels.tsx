import colors from "@/utils/colors";
import { ILabel } from "@/utils/types";

const Labels = ({ label }: ILabel) => {
  const labelColors: {
    [key in ILabel["label"]]: string;
  } = {
    Food: colors.food,
    Tech: colors.tech,
    Research: colors.research,
  };
  return (
    <div
      className="md:px-8 max-w-min px-4 py-1 md:text-md text-lg font-medium rounded-3xl cursor-pointer bg-label_bg "
      style={{
        color: labelColors[label],
      }}
    >
      {label}
    </div>
  );
};

export default Labels;
