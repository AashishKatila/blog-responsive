"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { ILogin, UserSchema } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: zodResolver(UserSchema),
  });
  const onSubmit: SubmitHandler<ILogin> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 text-offwhite lg:min-w-[400px] "
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email: </label>
        <input
          placeholder="test@test.com"
          type="email"
          {...register("email")}
          className="text-black py-1 px-2 rounded-sm placeholder:translate-y-[1px] placeholder:translate-x-2 outline-none"
        />
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password">Password: </label>
        <input
          placeholder="********"
          type="password"
          {...register("password")}
          className="text-black py-1 px-2 rounded-sm placeholder:translate-y-[1px] placeholder:translate-x-2 outline-none "
        />
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="px-4 py-1 rounded-3xl font-medium text-lg bg-offwhite text-gray-500 "
      >
        Submit
      </button>
    </form>
  );
}
