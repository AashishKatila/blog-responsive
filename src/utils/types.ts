import { UseFormRegister, UseFormSetValue } from "react-hook-form";
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
    author? : string
    id: string;
}

export interface IUseFetchProps {
  url?: string;
}

export type Login = {
    username: string;
    password: string;
};

export const UserSchema: ZodType<Login> = z
.object({
    username: z.string().min(3, { message: "User name is too short" }),
  password: z
    .string()
    .min(4, { message: "Password is too short" })
    .max(12, { message: "Password is too long" }),
});

const MAX_FILE_SIZE = 512 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export type BlogPost = {
    title: string;
    blog: string;
    author?: string;
    createdAt: string;
    label: "Food" | "Tech" | "Research";
    image: string;
}

export const BlogSchema: ZodType<BlogPost> = z
.object({
    title: z.string()
    .min(2, { message: "Title is too short" })
    .max(30, { message: "Title is too long" }),
    blog: z.string(),
    label: z.enum(["Food", "Tech", "Research"]),
    author: z.string(),
    createdAt: z.string(),
    image: z.string()
    .min(1,{message:"image required"})
    .refine(
      (imageString) => imageString.length <= MAX_FILE_SIZE,
      `Max image size is 512 KB.`
    )
    .refine(
      (imageString) => {
        const mimeType = imageString.substring(5, imageString.indexOf(";"));
        return ACCEPTED_IMAGE_TYPES.includes(mimeType);
      },
      "Only .jpg, .jpeg, .png, and .webp formats are supported."
    ),
})

export interface ITitleInput{
  register: UseFormRegister<BlogPost> ;
  title: string;
  setTitle: (title: string) => void;
  errors: any;
}

export interface IUploadImageProps {
  setValue: UseFormSetValue<BlogPost>;
  setImageURL: (value: string | ArrayBuffer | null) => void;
  errors: any;
}

export interface IChooseLabel{
  filter: string;
  setFilter: (filter: string) => void;
}

export interface IQuillTextEditor{
  valueEditor: string;
  setValueEditor: (value: string) => void;
  setValue: UseFormSetValue<BlogPost>;
  errors: any;
}

export interface IFormButtons {
  handleDraft: () => void;
}