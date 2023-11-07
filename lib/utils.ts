import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProductQuery } from "./store/server/product/types";
import { ReadonlyURLSearchParams } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateProductQueryString(
  payload: ProductQuery,
  isDetail: boolean = false
) {
  const { filters, pagination } = payload;

  const queryString = `${
    isDetail ? "api/product-size-colors" : "api/products"
  }?${
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

export function createURL(
  params: URLSearchParams | ReadonlyURLSearchParams,
  pathname: string
) {
  const paramString = params.toString();
  const query = `${paramString.length ? "?" : ""}${paramString}`;
  return `${pathname}${query}`;
}
