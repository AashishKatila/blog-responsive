"use client";

import colors from "@/utils/colors";
import { IUploadImageProps } from "@/utils/types";
import { useState, useRef, ChangeEvent } from "react";
import { CiCirclePlus } from "react-icons/ci";

const ImageUpload = ({ setValue, setImageURL, errors }: IUploadImageProps) => {
  const [image, setImage] = useState<File | null>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImage(file);

      const reader = new FileReader(); //allows to asynchronously read the contents of files stored on the user’s computer

      reader.readAsDataURL(file); // reads the file and encodes its contents as a Base64 string

      reader.onloadend = () => {
        const base64Image = reader.result; // Base64 string
        if (typeof base64Image === "string") {
          setImageURL(base64Image);
          setValue("image", base64Image);
        } else {
          console.error(
            "Error: Image could not be converted to base64 string."
          );
        }
      };
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <>
      <div className="flex items-center gap-2">
        <CiCirclePlus
          size={30}
          color={colors.offwhite}
          className="cursor-pointer"
          onClick={handleIconClick}
        />
        {image && <span className="text-gray-700">{image.name}</span>}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      {errors.image && (
        <span className="text-red-600">{errors.image.message}</span>
      )}
    </>
  );
};

export default ImageUpload;
