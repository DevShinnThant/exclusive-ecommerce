"use client";

import { FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const input = form.search as HTMLInputElement;

    const newParams = new URLSearchParams(searchParams.toString());

    if (input.value) {
      newParams.delete("tag");
      newParams.delete("name");
      newParams.set("q", input.value);
    } else {
      newParams.delete("q");
      newParams.delete("tag");
      newParams.delete("name");
    }

    const paramsString = newParams.toString();
    const query = `${paramsString.length ? "?" : ""}${paramsString}`;

    if (paramsString) {
      router.push(`/search/product${query}`);
    } else {
      router.push("/");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-64 items-center justify-between pr-4 bg-secondary shadow-sm rounded-sm">
        <Input
          type="text"
          name="search"
          placeholder="What are you looking for?"
          aria-label="Search"
          autoComplete="off"
          className="bg-none text-xs tracking-wide shadow-none border-none focus-visible:ring-0"
        />
        <FiSearch size={20} />
      </div>
    </form>
  );
}
