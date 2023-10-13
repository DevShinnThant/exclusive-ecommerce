import axios from "@/lib/api/axios";
import { useQuery } from "react-query";

import { GetResponse } from "@/lib/types/api";
import { CategoryResponse } from "./types";

const fetchCategory = async (): Promise<GetResponse<CategoryResponse>> => {
  const response = await axios.get("api/categories");
  return response.data;
};

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategory(),
    staleTime: Infinity,
    select: (data) => {
      return data.data.map((category) => ({
        label: category.attributes.Name,
        value: String(category.id),
      }));
    },
  });
};
