"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/pastor.jpg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card placeholder={undefined} className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl" placeholder={undefined}            >
              Unlock the Power of the God with our Integrity of the Word
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900" placeholder={undefined}>
              Are you ready to embark on an exciting christian with other
              Children of God? Look no further! Our integerity is the word of God
              and it continually gain it&apos;s mastery over us.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button placeholder={undefined} color="gray">Watch our Sermons</Button>
              <Button placeholder={undefined} color="gray" variant="outlined">
                View More sermons
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
              {/* <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-pinterest.svg"
                alt="pinterest"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-netflix.svg"
                alt="netflix"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-coinbase.svg"
                alt="coinbase"
              />
              <Image
                width={144}
                height={144}
                className="w-36 grayscale opacity-60"
                src="/logos/logo-google.svg"
                alt="google"
              /> */}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
