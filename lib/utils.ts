import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProductQuery } from "./store/server/product/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateProductQueryString(payload: ProductQuery) {
  const { filters, pagination } = payload;

  const queryString = `api/products?${
    filters
      ? `filters[${filters.slug.name}]${
          filters.deep ? `[${filters.deep.columnName}]` : ""
        }[${filters.property || "$eq"}]=${filters.slug.value}&populate=*`
      : ""
  }${
    pagination
      ? `pagination[page]=${pagination.page}&pagination[limit]=${pagination.limit}`
      : ""
  }`;

  return queryString;
}
