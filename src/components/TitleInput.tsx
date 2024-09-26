import { ITitleInput } from "@/utils/types";

const TitleInput = ({ register, title, setTitle, errors }: ITitleInput) => {
  return (
    <>
      <input
        type="text"
        placeholder="Title"
        {...register("title")}
        value={title}
        className="text-3xl text-offwhite bg-transparent outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      {errors.title && (
        <span className="text-red-600">{errors.title.message}</span>
      )}
    </>
  );
};

export default TitleInput;
