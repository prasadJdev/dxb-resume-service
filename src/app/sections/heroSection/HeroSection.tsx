"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

import { Typewriter } from "react-simple-typewriter";
import GoogleReviews from "./components/GoogleReviews";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function HeroSection() {
  return (
    <section
      id="hero-section"
      className="flex items-center justify-center flex-col lg:flex-row gap-11 px-8 sm:px-12 p-4 sm:p-8 md:p-12 lg:p-16 py-16 xl:py-24 bg-cover"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1063%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 45%2c 107%2c 1)'%3e%3c/rect%3e%3cpath d='M0 0L683.12 0L0 208.44z' fill='rgba(255%2c 255%2c 255%2c .1)'%3e%3c/path%3e%3cpath d='M0 208.44L683.12 0L898.74 0L0 370.78999999999996z' fill='rgba(255%2c 255%2c 255%2c .075)'%3e%3c/path%3e%3cpath d='M0 370.78999999999996L898.74 0L969.9300000000001 0L0 413.56999999999994z' fill='rgba(255%2c 255%2c 255%2c .05)'%3e%3c/path%3e%3cpath d='M0 413.56999999999994L969.9300000000001 0L1234.56 0L0 499.91999999999996z' fill='rgba(255%2c 255%2c 255%2c .025)'%3e%3c/path%3e%3cpath d='M1440 560L958.0699999999999 560L1440 505.94z' fill='rgba(0%2c 0%2c 0%2c .1)'%3e%3c/path%3e%3cpath d='M1440 505.94L958.0699999999999 560L669.31 560L1440 279.4z' fill='rgba(0%2c 0%2c 0%2c .075)'%3e%3c/path%3e%3cpath d='M1440 279.4L669.31 560L516.0899999999999 560L1440 137.46999999999997z' fill='rgba(0%2c 0%2c 0%2c .05)'%3e%3c/path%3e%3cpath d='M1440 137.46999999999997L516.0899999999999 560L394.8399999999999 560L1440 106.45999999999997z' fill='rgba(0%2c 0%2c 0%2c .025)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1063'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e")`,
      }}
    >
      <div className="max-w-lg">
        <h1 className="font-secondary text-3xl md:text-[2rem] lg:text-[2.5rem] leading-[1.4] font-semibold m-0 mb-6 lg:pr-24 md:pr-20 text-white">
          Increase your chances of getting interviews with an ATS-friendly CV
        </h1>

        <p className="font-secondary mb-8 text-lg md:text-3xl lg:pr-24 h-[108px] text-white">
          Over the last 6 years I have been{" "}
          <span className="font-secondary font-semibold text-tertiary">
            <Typewriter
              loop
              cursor
              cursorBlinking
              words={["creating resumes.", "optimizing LinkedIn profiles.", "distributing CVs globally."]}
            />
          </span>
        </p>

        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
          <GoogleReviews />

          <Link
            href="#pricing"
            className="px-6 py-4 border-t-4 border-transparent bg-secondary text-white text-xl rounded-md font-semibold hover:bg-secondary/80 hover:shadow-lg flex items-center justify-center"
          >
            Explore Our Pricing
            <ChevronsRight />
          </Link>
        </div>
      </div>

      <div className="relative w-full min-h-[320px] max-w-lg flex-1 z-[1]">
        <Image fill src="https://picsum.photos/seed/picsum/620/320" alt="Banner" />
      </div>
    </section>
  );
}

export default HeroSection;
