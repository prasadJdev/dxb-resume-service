import React from "react";

import Image from "next/image";

import googleLogoFull from "@/assets/logos/google-full-logo.png";
import StarRatings from "@/components/custom-ui/star-rating";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type Review = {
  id: string | number;
  name: string;
  image: string;
  rating: number;
  dateTime: string;
  description: string;
};

const reviews: Review[] = [
  {
    id: 124,
    name: "John Doe",
    image: "https://picsum.photos/seed/picsum/50/50",
    rating: 4,
    dateTime: "7 months ago",
    description:
      "They have been looking after my business for many years now and i can honestly say they are easy to deal with , very efficient and get results. I have and will continue to encourage businesses to get in touch with them. Keep up the great work guys and THANKYOU",
  },
  {
    id: 2,
    name: "John Doe",
    image: "https://picsum.photos/seed/picsum/50/50",
    rating: 4,
    dateTime: "7 months ago",
    description:
      "They have been looking after my business for many years now and i can honestly say they are easy to deal with , very efficient and get results. I have and will continue to encourage businesses to get in touch with them. Keep up the great work guys and THANKYOU",
  },
  {
    id: "12",
    name: "John Doe",
    image: "https://picsum.photos/seed/picsum/50/50",
    rating: 4,
    dateTime: "7 months ago",
    description:
      "They have been looking after my business for many years now and i can honestly say they are easy to deal with , very efficient and get results. I have and will continue to encourage businesses to get in touch with them. Keep up the great work guys and THANKYOU",
  },
  {
    id: 32,
    name: "John Doe",
    image: "https://picsum.photos/seed/picsum/50/50",
    rating: 4,
    dateTime: "7 months ago",
    description:
      "They have been looking after my business for many years now and i can honestly say they are easy to deal with , very efficient and get results. I have and will continue to encourage businesses to get in touch with them. Keep up the great work guys and THANKYOU",
  },
  {
    id: "42",
    name: "John Doe",
    image: "https://picsum.photos/seed/picsum/50/50",
    rating: 4,
    dateTime: "7 months ago",
    description:
      "They have been looking after my business for many years now and i can honestly say they are easy to deal with , very efficient and get results. I have and will continue to encourage businesses to get in touch with them. Keep up the great work guys and THANKYOU",
  },
  {
    id: 122,
    name: "John Doe",
    image: "https://picsum.photos/seed/picsum/50/50",
    rating: 4,
    dateTime: "7 months ago",
    description:
      "They have been looking after my business for many years now and i can honestly say they are easy to deal with , very efficient and get results. I have and will continue to encourage businesses to get in touch with them. Keep up the great work guys and THANKYOU",
  },
];

function GoogleTestimonialSection() {
  return (
    <section
      id="testimonials"
      className="flex flex-col md:flex-row gap-24 items-center justify-between max-w-7xl mx-auto  px-4 sm:px-12 p-4 sm:p-8 md:p-12 lg:p-16 sm:py-8 md:py-12 xl:py-24 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="relative w-28 h-10">
            <Image fill src={googleLogoFull} alt="Google" />
          </div>

          <StarRatings rating={5} className=" text-actionLinkGold flex gap-2" />
        </div>

        <div className="text-primary divide-x divide-primary m-1 text-sm">
          <strong className="pr-2">4.8 stars</strong>

          <span className="pl-2">1,700 reviews</span>
        </div>
      </div>

      <Carousel className="md:ml-8 md:max-w-3xl max-w-[-webkit-fill-available]" opts={{ loop: true }}>
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="lg:basis-1/3 md:basis-1/2">
              <div key={review.id} className="flex flex-col gap-4 border border-[#d9d9d9] p-6 rounded-xl">
                <div className="flex gap-2">
                  <div className="relative min-w-12 w-12 h-12 rounded-full overflow-hidden">
                    <Image fill src={review.image} alt={review.name} />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h2 className="text-sm text-left text-primary font-primary font-semibold">{review.name}</h2>

                    <div className="flex items-center gap-2">
                      <StarRatings rating={review.rating} size={10} className="text-[#e7711b] flex gap-1" />
                      {/* <p className="text-[#e7711b] text-xs">({review.rating})</p> */}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-sm font-primary">{review.description}</p>
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
    </section>
  );
}

export default GoogleTestimonialSection;
