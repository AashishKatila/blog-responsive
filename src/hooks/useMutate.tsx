import { BlogPost } from "@/utils/types";
import { useState } from "react";

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_MOCK_API_SECRET_KEY;

const useMutate = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>(false);

  const mutateData = async (data: BlogPost) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://${PROJECT_TOKEN}.mockapi.io/api/v1/blogs`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setSuccess(true);
      return result;
    } catch (error) {
      setError("Error sending data");
      console.error("Error sending data:", error);
    } finally {
      setLoading(false);
    }
  };
  return { mutateData, loading, error, success };
};

export default useMutate;
