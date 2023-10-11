import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProductQuery } from "./store/server/product/types";
import FullStarIcon from "@/app/icons/FullStar";
import EmptyStarIcon from "@/app/icons/EmptyStar";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateProductQueryString(payload: ProductQuery) {
  const { filters, pagination } = payload;

  const queryString = `api/products?${
    filters
      ? `filters[${filters.slug.name}][$eq]=${filters.slug.value}&populate=*`
      : ""
  }${
    pagination
      ? `pagination[page]=${pagination.page}&pagination[limit]=${pagination.limit}`
      : ""
  }`;

  return queryString;
}
