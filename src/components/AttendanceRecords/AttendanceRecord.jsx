import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import attendanceData from "../../../Data/attendanceData";

// Table Headers (Arabic)
const tableHeaders = [
  "موقع الدوام",
  "عدد الساعات",
  "الآن",
  "الراحة",
  "تسجيل خروج",
  "تسجيل دخول",
  "التاريخ",
];

// Attendance Data (Expanded)

const AttendanceRecord = () => {
  return (
    <Table className="my-5 border">
      {/* Table Header */}
      <TableHeader className="border-b">
        <TableRow className="bg-gray-100 text-center">
          {tableHeaders.map((title) => (
            <TableHead key={title} className="border px-4 py-2">
              {title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      {/* Table Body */}
      <TableBody>
        {attendanceData.map((row, index) => (
          <TableRow key={index} className={`text-center ${index % 2 === 0 ? "bg-green-100" : "bg-gray-50"}`}>
            {row.now === "إجازة مرضية" ? (
              <TableCell colSpan={3} className="border font-bold bg-white">
                {row.now}
              </TableCell>
            ) : (
              <>
                {[row.location, row.totalHours, row.now, row.rest, row.checkOut, row.checkIn, row.date].map((cell, i) => (
                  <TableCell key={i} className="border">
                    {cell}
                  </TableCell>
                ))}
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AttendanceRecord;
