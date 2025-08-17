"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Filter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const path = usePathname();

  const handleFilter = (slug) => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", slug);
    router.push(`${path}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="flex items-center justify-end ext-sm text-gray-500 my-6 gap-2">
      <span>Short by:</span>
      <select
        onChange={(e) => handleFilter(e.target.value)}
        className="ring-1 ring-gray-200 shadow-md rounded-md px-2 py-1"
        name="sort"
        id="sort"
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
