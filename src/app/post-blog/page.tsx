"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogPost, BlogSchema } from "@/utils/types";
import useMutate from "@/hooks/useMutate";
import ChooseLabel from "@/components/ChooseLabel";
import ImageUpload from "@/components/ImageUpload";
import TitleInput from "@/components/TitleInput";
import QuillTextEditor from "@/components/QuillTextEditor";
import FormButtons from "@/components/FormButtons";

const PostBlog = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { mutateData } = useMutate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BlogPost>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      createdAt: new Date().toISOString(),
      label: "Food",
      author: session?.user?.name || "Anonymous",
    },
  });

  const [valueEditor, setValueEditor] = useState("");
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState<string | ArrayBuffer | null>("");
  const [filter, setFilter] = useState("Food");

  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/");
    }
  }, [session, status]);

  useEffect(() => {
    // Load draft data from local storage
    const savedDraft = localStorage.getItem(`blog_data_${session?.user?.name}`);
    if (savedDraft) {
      const draftData = JSON.parse(savedDraft);
      setValue("title", draftData.title);
      setTitle(draftData.title);
      setImageURL(draftData.image);
      setValueEditor(draftData.blog);
      setFilter(draftData.label);
    }
  }, []);

  const handleDraft = () => {
    const author = session?.user?.name || "Anonymous";
    const blogData = {
      id: Math.floor(Math.random() * 10) + 1,
      image: imageURL,
      title: title,
      filter: filter,
      blog: valueEditor,
      label: filter,
      author: author,
    };
    localStorage.setItem(
      `blog_data_${session?.user?.name}`,
      JSON.stringify(blogData)
    );
    toast("Saved as Draft");
  };

  const onSubmit: SubmitHandler<BlogPost> = async (data) => {
    console.log("Submit triggered");
    console.log("Data = ", data);
    let blogData;
    if (status === "authenticated" && session && session.user) {
      blogData = {
        title: title,
        blog: valueEditor,
        label: filter,
        image: imageURL,
        author: data.author,
        createdAt: data.createdAt,
      };

      const result = await mutateData(blogData as BlogPost);

      if (result) {
        toast.success("Succesfully Published");
        localStorage.removeItem("blog_data");
        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        toast.error("Error publishing data");
      }
    }
  };

  return (
    <form className="md:px-32 px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
      <FormButtons handleDraft={handleDraft} />
      <div className="flex flex-col gap-4 mt-4 ">
        <TitleInput
          register={register}
          title={title}
          setTitle={setTitle}
          errors={errors}
        />
        <div className="flex flex-col md:flex-row justify-between ">
          <ImageUpload
            setValue={setValue}
            setImageURL={setImageURL}
            errors={errors}
          />
          <ChooseLabel filter={filter} setFilter={setFilter} />
        </div>
      </div>
      <QuillTextEditor
        setValue={setValue}
        setValueEditor={setValueEditor}
        errors={errors}
        valueEditor={valueEditor}
      />
    </form>
  );
};

export default PostBlog;
