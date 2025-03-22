import AttendanceCard from "@/components/AttendenceTable/AttendanceTable";
import SearchInput from "@/components/ui/Shared/SearchInput";
import SelectDrop from "@/components/ui/Shared/SelectDrop";

import { Button } from "@/components/ui/button";

import Image from "next/image";
import React from "react";

const EmpData = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-5">
      <div className="flex items-center justify-between relative mx-5">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="font-semibold">د/ أحمد براهيم</div>
          <Image src={"./user.svg"} alt="vector" width={47} height={47} />
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <SearchInput />
        </div>

        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="font-semibold">مرحبا بك في شركة SB</div>
          <Image src={"./circle.svg"} alt="logo" width={27} height={27} />
        </div>
      </div>

      <div className="flex items-center justify-end mt-10 mb-5 ">
        <div className="font-semibold text-2xl">بيانات الموظف</div>
        <Image
          src={"./Vector.svg"}
          alt="vector"
          width={30}
          height={30}
          className="pr-1"
        />
      </div>

      <div className="my-5 flex justify-between items-center mx-5">
        <Button className="bg-green-400 flex items-center">
          <span className="text-white">موظف جديد</span>
          <Image src={"./plus.svg"} alt="vector" width={24} height={24} />
        </Button>

        <div className="flex space-x-3 rtl:space-x-reverse">
          <div className="flex flex-col items-end">
            <div>التاريخ</div>
            <SelectDrop />
          </div>
          <div className="flex flex-col items-end">
            <div>الموظف</div>
            <SelectDrop />
          </div>
        </div>
      </div>

      <AttendanceCard />
    </section>
  );
};

export default EmpData;
