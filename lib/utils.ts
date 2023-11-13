import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ProductQuery } from "./store/server/product/types";
import { ReadonlyURLSearchParams } from "next/navigation";

import qs from "qs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateProductQueryString(payload: ProductQuery) {
  const { filters, pagination } = payload;

  const queryObject = {} as any;

  if (payload.initialFilter) {
    queryObject.filters = {
      [payload.initialFilter.slug]: {
        [payload.initialFilter.catcher]: payload.initialFilter.value,
      },
    };
  }

  if (filters?.category) {
    const category = filters.category;
    queryObject.filters = {
      category: {
        [category.slug]: {
          [category.catcher]: category.value,
        },
      },
      ...queryObject.filters,
    };
  }

  if (filters?.ids) {
    const ids = filters.ids;

    queryObject.filters = {
      id: {
        [ids.catcher]: ids.value,
      },
      ...queryObject.filters,
    };
  }

  if (filters?.search) {
    const search = filters.search;

    queryObject.filters = {
      [search.slug]: {
        [search.catcher]: search.value,
      },
      ...queryObject.filters,
    };
  }

  if (pagination) {
    queryObject.pagination = {
      ...pagination,
    };
  }

  return qs.stringify(queryObject, {
    encode: false,
  });
}

export function createURL(
  params: URLSearchParams | ReadonlyURLSearchParams,
  pathname: string
) {
  const paramString = params.toString();
  const query = `${paramString.length ? "?" : ""}${paramString}`;
  return `${pathname}${query}`;
}
