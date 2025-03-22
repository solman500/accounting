"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CirclePlus } from "lucide-react";

export default function SalaryTable() {
  const data = Array(15).fill({
    date: "12/06/2023",
    amount: 100,
    type: "خصم",
    category: "يوم اضافي",
  });

  return (
    <div className=" rounded-lg p-4 overflow-x-auto">
      {/* Table Header */}
      <Table className="w-full ">
        <TableHeader className="bg-gray-300 text-white">
          <TableRow>
            <TableHead className="text-right">السبب</TableHead>
            <TableHead className="text-right  ">نوع الحركة</TableHead>
            <TableHead className="text-right">المبلغ</TableHead>
            <TableHead className="text-right">التاريخ</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-green-100" : "bg-white"}
            >
              <TableCell className="text-right">{row.category}</TableCell>
              <TableCell className="text-right">
                <div className="flex  items-center justify-center space-x-1">
                  <span>{row.type}</span>
                  <CirclePlus className="text-green-500 w-4 h-4 " />
                </div>
              </TableCell>

              <TableCell className="text-right">{row.amount}</TableCell>
              <TableCell className="text-right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      
     
    </div>
  );
}
