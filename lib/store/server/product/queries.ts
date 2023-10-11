import axios from "@/lib/api/axios";
import { useQuery } from "react-query";
import { Product, ProductQuery, ProductResponse } from "./types";
import { GetResponse } from "@/lib/types/api";
import { generateProductQueryString } from "@/lib/utils";

const fetchBestSellingProducts = async (
  payload: ProductQuery
): Promise<GetResponse<ProductResponse>> => {
  const queryString = generateProductQueryString(payload);
  const response = await axios.get(queryString);
  return response.data;
};

export const useGetBestSellingProducts = (payload: ProductQuery) => {
  return useQuery({
    queryKey: ["best-selling-products", payload],
    queryFn: () => fetchBestSellingProducts(payload),
    select: (data): Product[] => {
      return data.data.map((item) => {
        const itemAttributes = item.attributes;
        return {
          id: item.id,
          name: itemAttributes.name,
          price: itemAttributes.price,
          dis_price: itemAttributes.dis_price,
          rating: itemAttributes.rating,
          variant: itemAttributes.variant,
          voting: itemAttributes.voting,
          image: itemAttributes.image.data[0].attributes.url,
        };
      });
    },
  });
};
