"use client";

import React from "react";
import { Typography, Card, CardBody, CardHeader, Button } from "@material-tailwind/react";
import EventCard from "@/components/event-card";

const EVENTS = [
  {
    img: "/image/blogs/blog-1.svg",
    title: "It's Faith Thing",
    desc: "Episode 1. Looking Beyond the Logical",
    buttonLabel: "Follow",
  },
  {
    img: "/image/blogs/blog2.svg",
    title: "Holy Culture Tour",
    desc: "Join in touring through the country, and spreading the gospel to every institution of Higher Learning",
    buttonLabel: "register for free",
  },
  {
    img: "/image/blogs/blog3.svg",
    title: "Music Releases",
    desc: "Listen to our music and anticipate new music",
    buttonLabel: "Listen",
  },
  // {
  //   img: "/image/blogs/blog4.svg",
  //   title: "Web Accessibility: Building Inclusive Websites",
  //   desc: "Industry experts will discuss the importance of inclusive design and share strategies for creating websites.",
  //   buttonLabel: "get ticket",
  // },
];

export function Events() {
  return (
    <section className="py-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4" placeholder={undefined}>
          Trending Now!
        </Typography>
        <Typography placeholder={undefined}
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Messages and Upcoming Events
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {EVENTS.map((props, idx) => (
          <EventCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}


export default Events;
