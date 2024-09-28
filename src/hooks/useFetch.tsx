import { BlogPost, IUseFetchProps } from "@/utils/types";
import { useEffect, useState } from "react";

const PROJECT_TOKEN = process.env.NEXT_PUBLIC_MOCK_API_SECRET_KEY;

const useFetch = ({ url = "" }: IUseFetchProps) => {
  const [data, setData] = useState<BlogPost[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | any>();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://${PROJECT_TOKEN}.mockapi.io/api/v1/blogs${url}`
        );
        console.log(
          "url = ",
          `https://${PROJECT_TOKEN}.mockapi.io/api/v1/blogs${url}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("Result = ", result);
        setData(result);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
