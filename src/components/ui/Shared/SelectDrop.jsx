import React from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
const SelectDrop = () => {
  return (
    <Select>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>احمد محمد </SelectLabel>
        <SelectItem value="apple">محمد</SelectItem>
        <SelectItem value="banana">سليمان</SelectItem>
        <SelectItem value="blueberry">على</SelectItem>
    
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default SelectDrop