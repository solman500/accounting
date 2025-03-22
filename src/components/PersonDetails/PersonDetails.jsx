import React from 'react'
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const PersonDetails = () => {
  return (
    <div className="border p-5 rounded-lg">
      <div className="grid grid-cols-3 gap-4">
        {/* Row 1 */}
        <Input placeholder="الاسم" defaultValue="محمد احمد" />
        <Input placeholder="تاريخ الميلاد" defaultValue="3/3/2003" />
        <Input placeholder="المؤهل" defaultValue="بكالوريوس ادارة" />

        {/* Row 2 */}
        <Input placeholder="الوظيفة" defaultValue="محاسب" />
        <Select className="w-full">
          <SelectTrigger>
            <SelectValue placeholder="طبيعة العمل" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="متنوع">متنوع</SelectItem>
            <SelectItem value="ثابت">ثابت</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="تاريخ بدء العمل" defaultValue="17/10/2025" />

        {/* Row 3 */}
        <Input placeholder="بدلات" defaultValue="2500" />
        <Input placeholder="صافي المرتب" defaultValue="2500" />
      </div>
    </div>
  );
};

export default PersonDetails
