"use client";

import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  DocumentTextIcon,
  PlayCircleIcon,
  PencilSquareIcon,
  PhoneArrowDownLeftIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";


const STATS = [
  {
    icon: DocumentTextIcon,
    count: "10,200+",
    title: "Students",
  },
  {
    icon: PlayCircleIcon,
    count: "50+",
    title: "Instructors",
  },
  {
    icon: PencilSquareIcon,
    count: "10+",
    title: "Courses",
  },
  {
    icon: PhoneArrowDownLeftIcon,
    count: "24/7",
    title: "Support",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-80">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl" placeholder={undefined}>
            Lets Tailor Your Experience
          </Typography>
          <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button placeholder={undefined} color="gray">Would You Like Us To Pray With You?</Button>
              <Button placeholder={undefined} color="gray" variant="outlined">
                I am New, I Would Like to Know More.
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
export default OutImpressiveStats;