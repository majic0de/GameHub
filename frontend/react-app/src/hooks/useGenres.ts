import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

export interface Genre {
  id: number;
  slug: string;
  name: string;
  games_count: number;
  image_background: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
      })
      .catch((err) => {
        setError(err.message);
      });

    return () => controller.abort();
  }, []);
  return { genres, error };
};

export default useGenres;
