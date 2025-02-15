"use client";
import Button from "@/components/ui/Button";
import { useRef } from "react";

export default function FilteredEventsData() {
  // action={formAction}

  const yearRef = useRef();
  const monthRef = useRef();

  
  const handelSubmit = (e) => {
    e.preventDefault();
    const selectedYear = yearRef.current?.value;
    const selectedMonth = monthRef.current?.value;
    const data = {
      year :  selectedYear,
      month :  selectedMonth
    }
  };

  const data = {};
  return (
    <div>
      <form onSubmit={handelSubmit} className="border p-5 w-[500px] rounded-md">
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="font-semibold">
            Year
          </label>
          <select
            ref={yearRef}
            name="year"
            id="year"
            className="border w-[100%] rounded-md p-2 "
          >
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="" className="font-semibold">
            Month
          </label>
          <select
            ref={monthRef}
            name="month"
            id="month"
            className="border w-[100%] rounded-md p-2 "
          >
            <option value="1">january</option>
            <option value="2">february</option>
            <option value="3">March</option>
            <option value="4">April</option>
          </select>
        </div>

        <Button type="submit">Filter</Button>
      </form>
    </div>
  );
}
