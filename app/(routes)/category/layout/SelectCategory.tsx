"use client";

import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCategory } from "@/lib/store/server/category/queries";
import { useRouter, useSearchParams } from "next/navigation";

export function SelectCategory() {
  const { data } = useGetCategory();

  const router = useRouter();
  const params = useSearchParams();

  const queue = params.get("q");

  return (
    <Select
      value={queue ? queue : ""}
      onValueChange={(value) => {
        const newParams = new URLSearchParams();
        if (value) {
          newParams.set("q", value);
        } else {
          newParams.delete("q");
        }
        const paramsString = newParams.toString();
        router.push(`/category?${paramsString}`);
      }}
    >
      <SelectTrigger className="w-[200px] rounded-sm">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Category</SelectLabel>
          {data?.map((item) => (
            <SelectItem
              className="cursor-pointer"
              key={item.label}
              value={item.label}
            >
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
