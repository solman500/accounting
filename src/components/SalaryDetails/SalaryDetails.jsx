import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const data = [
  {
    year: "2024",
    timeDetails: "200",
    installment: "400",
    discount: "200",
    total: "1000",
    increase: "1000",
    netAmount: "3000",
  },
  // Add more rows as needed
];
const SalaryDetails = () => {
  return (
    <div className="overflow-x-auto my-10">
      <div className="text-2xl text-right my-2 font-semibold ">
        تفاصيل الراتب الشهرى{" "}
      </div>
      <Table className=" border">
        <TableHeader className="border border-gray-300 bg-gray-200">
          <TableRow className="border border-gray-300 bg-gray-200 text-left">
            {[
              "السنة",
              "وقت التصافي",
              "احتساب المقسط",
              "احتساب الخصم",
              "المجموع",
              "زيادة",
              "صافي المبلغ",
            ].map((title) => (
              <TableHead
                key={title}
                className="px-4 py-2 border border-gray-300"
              >
                {title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index} className="border">
              <TableCell className="px-4 py-2 border">{row.year}</TableCell>
              <TableCell className="px-4 py-2 border">
                {row.timeDetails}
              </TableCell>
              <TableCell className="px-4 py-2 border">
                {row.installment}
              </TableCell>
              <TableCell className="px-4 py-2 border">{row.discount}</TableCell>
              <TableCell className="px-4 py-2 border">{row.total}</TableCell>
              <TableCell className="px-4 py-2 border">{row.increase}</TableCell>
              <TableCell className="px-4 py-2 border">
                {row.netAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SalaryDetails;
