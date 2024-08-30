"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import Link from "next/link";

const ReservationCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-center mb-4 text-xl font-semibold">
        Agende su llamada
      </h2>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Link href={"/"}>
        <Button 
        variant={'default'}
        className="mt-4 bg-sky-600">Regresar</Button>
      </Link>
    </div>
  );
};

export default ReservationCalendar;
