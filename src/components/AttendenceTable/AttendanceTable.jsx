"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Printer } from "lucide-react";
import SalaryTable from "../SalaryTable/SalaryTable";
import SalaryDetails from "../SalaryDetails/SalaryDetails";
import AttendanceRecord from "../AttendanceRecords/AttendanceRecord";
import PersonDetails from "../PersonDetails/personDetails";


export default function AttendanceCard() {
  const [activeTab, setActiveTab] = useState("personal-info");

  return (
    <div className="border rounded-lg p-4">
      {/* Tabs Navigation */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
        <div className="flex justify-between border-b ">
          <div>
            <TabsList className="flex bg-gray-100 rounded-t-lg">
              <TabsTrigger value="personal-info" className="px-4 py-2">
                معلومات شخصية
              </TabsTrigger>
              <TabsTrigger value="attendance-records" className="px-4 py-2">
                سجلات حضور
              </TabsTrigger>
              <TabsTrigger value="salary-details" className="px-4 py-2">
                تفاصيل المرتب
              </TabsTrigger>
            </TabsList>
          </div>
          <Button className="flex bg-green-400 items-center space-x-2">
            <span>طباعة</span>
            <Printer className="w-4 h-4" />
          </Button>
        </div>

        {/* Tab Content */}
        
        <TabsContent value="attendance-records" className="p-4 bg-white ">
          <div className="flex justify-between my-5">
            <span className="text-3xl font-bold">ساعات الدوام:64/15</span>
            <span className="text-2xl font-bold">أ/ محمد أحمد</span>
          </div>
          <AttendanceRecord />
          
        </TabsContent>

        <TabsContent value="personal-info" className="p-4 bg-white">
        <PersonDetails/>
        </TabsContent>

        <TabsContent value="salary-details" className="p-4 bg-white ">
          <div className="flex justify-between my-5">
            <span className="text-3xl font-bold">S0s0026</span>
            <span className="text-2xl font-bold">أ/ محمد أحمد</span>
          </div>
          <SalaryTable />
          <SalaryDetails />
        </TabsContent>
      </Tabs>
    </div>
  );
}
