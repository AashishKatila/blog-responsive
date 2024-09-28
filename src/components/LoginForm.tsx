"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { Login, UserSchema } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import InputField from "./InputField";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: zodResolver(UserSchema),
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<Login> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });
    if (result?.error) {
      toast.error("Invalid Credentials");
    } else if (result?.ok) {
      toast.success("Login Succesful");
      router.push("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 text-offwhite lg:min-w-[400px] "
    >
      <div className="flex flex-col gap-1">
        <InputField
          label="Username"
          type="text"
          placeholder="John Doe"
          register={register}
          error={errors.username}
        />
      </div>

      <div className="flex flex-col gap-1">
        <InputField
          label="Password"
          type="password"
          placeholder="Your Password"
          register={register}
          error={errors.password}
        />
      </div>

      <button
        type="submit"
        className="px-4 py-1 rounded-3xl font-medium text-lg bg-offwhite text-black "
      >
        Submit
      </button>
    </form>
  );
}
