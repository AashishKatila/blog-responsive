import { z, ZodType } from "zod"; 

export interface IButton{
    text: string;
    buttonStyle?: string;
    onClick? : () => void;
}

export interface ILabel{
    label: "Food" | "Tech" | "Research";
}

export interface IBlogCard{
    imageSource: string;
    date: string;
    title: string;
    description: string;
    labelText: "Food" | "Tech" | "Research";
    className?: string;
}

export type ILogin = {
    username: string;
    password: string;
};

export const UserSchema: ZodType<ILogin> = z
.object({
    username: z.string().min(3, { message: "User name is too short" }),
  password: z
    .string()
    .min(4, { message: "Password is too short" })
    .max(12, { message: "Password is too long" }),
});