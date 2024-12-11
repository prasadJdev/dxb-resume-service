"use client";
import React from "react";
import { AudioLinesIcon, SirenIcon } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type offering = {
  id: string;
  packageName: string;
  listPrice: number;
  actualPrice: number;
  tagLine: string;
  offerings: string[];
  offeringsTagLine: string;
  isRecommended?: boolean;
  audio: string;
};

const offerings: offering[] = [
  {
    id: "full-cv-package",
    packageName: "Full CV Package",
    listPrice: 250,
    actualPrice: 78,
    tagLine: "Sample file within 24 hour",
    offeringsTagLine: "You will receive your sample file in next 24 hour. For faster CV go for Emergency Service",
    audio: "https://actions.google.com/sounds/v1/crowds/female_crowd_celebration.ogg",
    offerings: [
      "One ATS CV with photo",
      "One ATS CV without photo",
      "One ATS Europass CV with photo",
      "One ATS Europass CV cover letters",
    ],
  },
  {
    id: "linkedln-boost-cv-power-pack",
    packageName: "Linkedln Boost",
    listPrice: 450,
    actualPrice: 170,
    tagLine: "Boost your carrer",
    offeringsTagLine: "CV sample file within 24 hour, LinkedIn 3-4 days, CV distribution 2-4 week",
    audio: "https://actions.google.com/sounds/v1/crowds/female_crowd_celebration.ogg",
    offerings: [
      "Full CV package",
      "Linkedln SEO",
      "Linkedln profile optimization",
      "Personal branding",
      "Professioinal Linkedln profile",
    ],
  },
  {
    id: "complete-career-package",
    packageName: "Complete Career Package",
    listPrice: 700,
    actualPrice: 230,
    tagLine: "Stand out today",
    offeringsTagLine: "CV sample file within 24 hour, LinkedIn 3-4 days, CV distribution 2-4 week",
    audio: "https://actions.google.com/sounds/v1/crowds/female_crowd_celebration.ogg",
    offerings: ["Full CV package", "Linkedln account optimization", "150 companines job apply"],
    isRecommended: true,
  },
  {
    id: "ultimate-job-seeker-package",
    packageName: "Ultimate Job Seeker Package",
    listPrice: 850,
    actualPrice: 320,
    tagLine: "Advance your carrer",
    offeringsTagLine: "CV sample file within 24 hour, LinkedIn 3-4 days, CV distribution 2-4 week",
    audio: "https://actions.google.com/sounds/v1/crowds/female_crowd_celebration.ogg",
    offerings: ["Full CV package", "Linkedln account optimization", "250 companines job apply"],
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="py-12 max-w-6xl mx-auto flex justify-center gap-12 flex-wrap px-4 sm:px-12 p-4 sm:p-8 md:p-12 lg:p-16 sm:py-8 md:py-12 xl:py-24"
    >
      <h2 className="text-4xl mb-4 font-bold text-center font-secondary text-primary">
        Find a plan to power your carrer
      </h2>

      <Carousel
        className="max-w-[-webkit-fill-available]"
        opts={{ loop: true, align: "start" }}
        plugins={[Autoplay({ delay: 4000 })]}
      >
        <CarouselContent>
          {offerings.map((offering) => (
            <CarouselItem id={offering.id} key={offering.id} className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
              <div
                className={cn(
                  "flex flex-col gap-5 border border-[#d9d9d9] rounded-xl p-4 max-w-xs relative h-full",
                  offering.isRecommended && "bg-gray-100"
                )}
              >
                {offering.isRecommended && (
                  <div className="absolute top-2 right-4 px-1 py-1 bg-secondary z-10 text-xs rounded-md text-white font-semibold">
                    Recommended
                  </div>
                )}
                <div className="border-b border-[#d9d9d9] font-primary flex flex-col gap-1 py-4">
                  <h6 className="text-xl font-bold text-primary">{offering.packageName}</h6>

                  <div className="flex items-baseline gap-2">
                    <h5 className="font-bold text-3xl text-primary">AED</h5>

                    <div className="flex items-baseline">
                      {offering.listPrice ? (
                        <s className="text-lg tracking-wide text-tertiary">{offering.listPrice}</s>
                      ) : null}

                      <h4 className="text-5xl font-bold text-primary">{offering.actualPrice}</h4>
                    </div>
                  </div>

                  <p className="font-primary text-lg font-semibold text-secondary">{offering.tagLine}</p>
                </div>

                <div className="font-primary">
                  <div className="flex justify-between items-center">
                    <h6 className="text-base font-semibold my-4 text-primary font-secondary">OFFERINGS</h6>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="outline" size="icon" className="text-secondary h-7 w-7 border-none">
                            <AudioLinesIcon />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-bold text-secondary text-base">Listen</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>

                  <p className="text-sm text-primary font-medium">{offering.offeringsTagLine}</p>

                  <ul className="my-5 space-y-2 text-primary">
                    {offering.offerings.map((off) => (
                      <li
                        className="flex items-center text-sm gap-2 font-medium before:bg-cover before:content-[''] before:block before:w-5 before:h-5 before:bg-[url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6.456%202.89c.13.113.143.31.03.44L3.212%207.08a.313.313%200%200%201-.47%200l-1.31-1.5a.313.313%200%200%201%20.47-.41L2.977%206.4l3.038-3.48a.313.313%200%200%201%20.44-.03m2.095.035c.124.119.13.317.01.442l-3.57%203.75a.312.312%200%200%201-.475-.027l-.179-.234a.313.313%200%200%201%20.448-.43l3.325-3.49a.313.313%200%200%201%20.442-.011%22%20fill%3D%22%2302818C%22%2F%3E%3C%2Fsvg%3E)]"
                        key={off}
                      >
                        {off}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-6 mt-auto">
                  <Button variant="outline" className="flex-1 font-semibold text-secondary">
                    Start Now
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="relative flex justify-end p-8 gap-4">
          <CarouselPrevious className="relative left-[unset] top-[unset] translate-y-0" />
          <CarouselNext className="relative right-[unset] top-[unset] translate-y-0" />
        </div>
      </Carousel>

      <div className="border rounded-lg bg-secondary p-12 flex items-center justify-between w-full">
        <p className="text-white font-secondary text-2xl font-medium">
          Get your CV within 3-5 hour in <strong className="font-bold text-4xl">100 AED</strong>
        </p>

        <Button variant="outline1" className="text-secondary font-semibold">
          <SirenIcon />
          Emergency Plan
        </Button>
      </div>
    </section>
  );
}

export default Pricing;
