import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

// Define the structure of the fetch response
interface FetchResponse<T> {
  count: number;
  results: T[];
}

// Custom hook to fetch data from an API endpoint
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  // State to store the fetched data
  const [data, setData] = useState<T[]>([]);
  // State to store any errors that occur during the fetch
  const [error, setErrors] = useState("");
  // State to indicate whether the data is currently being loaded
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      // Create an AbortController to cancel the request if needed
      const controller = new AbortController();

      // Set loading state to true before starting the fetch
      setIsLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          // Update the data state with the fetched results
          setData(res.data.results);
          // Set loading state to false after the fetch is complete
          setIsLoading(false);
        })
        .catch((err) => {
          // Handle any errors that occur during the fetch
          if (err instanceof CanceledError) return;
          setErrors(err.message);
          setIsLoading(false);
        });

      // Cleanup function to abort the request if the component unmounts
      return () => controller.abort();
    },
    deps ? [...deps] : [] // Dependencies array for useEffect
  );

  // Return the data, error, and loading state
  return { data, error, isLoading };
};

export default useData;
