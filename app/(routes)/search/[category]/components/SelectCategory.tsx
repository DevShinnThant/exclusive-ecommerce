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
import { useParams, useRouter } from "next/navigation";

export function SelectCategory({ disabled = false }: { disabled?: boolean }) {
  const { data } = useGetCategory();

  const router = useRouter();

  const { category } = useParams();

  return (
    <Select
      disabled={disabled}
      value={(category as string).toLocaleLowerCase() || ""}
      onValueChange={(value) => {
        if (value) {
          router.push(`/search/${value}`);
        }
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
