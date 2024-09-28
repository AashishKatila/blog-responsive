import { FC } from "react";
import { InputFieldProps } from "@/utils/types";

const InputField: FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={label.toLowerCase()} className="mb-1">
        {label}:
      </label>
      <input
        id={label.toLowerCase()}
        placeholder={placeholder}
        type={type}
        {...register(label.toLowerCase())} // Registering input field using the label as the key
        className="text-black py-1 px-2 rounded-sm placeholder:translate-y-[1px] placeholder:translate-x-2 outline-none"
      />
      {error && <span className="text-red-600">{error.message}</span>}
    </div>
  );
};

export default InputField;
