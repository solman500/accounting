
"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = ({ placeholder }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
  };
  return (
    <div className="bg-background  flex items-center gap-2.5 px-3 py-[7px] border rounded-md ">
      <Search size={16} className="text-muted-foreground" />
      <Input
        onChange={handleChange}
        type="text"
        className="p-0 bg-gray-300 text-center  border-none h-auto text-sm font-normal placeholder:font-normal focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
        placeholder="ابحث هنا "
      />
    </div>
  );
};

export default SearchInput;
