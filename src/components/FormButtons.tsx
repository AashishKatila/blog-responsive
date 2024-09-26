import Button from "./Button";
import { IFormButtons } from "@/utils/types";

const FormButtons = ({ handleDraft }: IFormButtons) => {
  return (
    <div className="w-full flex md:gap-6 gap-4 justify-end">
      <Button
        text=" Save as Draft"
        buttonStyle="bg-blue text-offwhite md:text-lg text-sm"
        onClick={handleDraft}
      />
      <button
        className="px-6 py-1 rounded-3xl bg-purple text-offwhite md:text-lg text-sm"
        type="submit"
      >
        + Post
      </button>
    </div>
  );
};

export default FormButtons;
