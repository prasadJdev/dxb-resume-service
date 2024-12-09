import React from "react";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import StarRatings from "@/components/custom-ui/star-rating";

const GooogleLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height={44} width={44} {...props}>
    <g fill="none" fillRule="evenodd">
      <path
        d="M482.56 261.36c0-16.73-1.5-32.83-4.29-48.27H256v91.29h127.01c-5.47 29.5-22.1 54.49-47.09 71.23v59.21h76.27c44.63-41.09 70.37-101.59 70.37-173.46"
        fill="#4285f4"
      />
      <path
        d="M256 492c63.72 0 117.14-21.13 156.19-57.18l-76.27-59.21c-21.13 14.16-48.17 22.53-79.92 22.53-61.47 0-113.49-41.51-132.05-97.3H45.1v61.15C83.93 439.12 163.74 492 256 492"
        fill="#34a853"
      />
      <path
        d="M123.95 300.84c-4.72-14.16-7.4-29.29-7.4-44.84s2.68-30.68 7.4-44.84v-61.15H45.1C29.12 181.87 20 217.92 20 256s9.12 74.13 25.1 105.99z"
        fill="#fbbc05"
      />
      <path
        d="M256 113.86c34.65 0 65.76 11.91 90.22 35.29l67.69-67.69C373.03 43.39 319.61 20 256 20 163.75 20 83.93 72.89 45.1 150.01l78.85 61.15c18.56-55.78 70.59-97.3 132.05-97.3"
        fill="#ea4335"
      />
      <path d="M20 20h472v472H20z" />
    </g>
  </svg>
);

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

const GoogleBadge = () => {
  return (
    <div className="flex items-center gap-1 p-2 md:p-[10px] border-t-4 border-[#4fce6a] shadow-[0_2px_5px_0_rgba(0,0,0,0.26)] bg-white hover:bg-white/23 rounded-md">
      <GooogleLogo className="align-middle w-5 h-5" />

      <div className="inline-block m-[0_0_0_4px] align-middle">
        <div className="text-[11px] md:text-sm text-left">Google Rating</div>

        <div className="flex gap-2 items-center">
          <span className="text-[#e7711b] text-sm align-middle">5.0</span>

          <StarRatings rating={5} size={12} className="text-[#e7711b] flex gap-1" />
        </div>
      </div>
    </div>
  );
};

function GoogleReviews() {
  return (
    <Sheet>
      <SheetTrigger>
        <GoogleBadge />
      </SheetTrigger>
      <SheetContent className="max-h-svh overflow-scroll">
        <div aria-hidden className="sr-only">
          <SheetTitle>Reviews</SheetTitle>
        </div>
        <SheetHeader className="border-b border-[#d9d9d9] p-[10px_16px] flex flex-row gap-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg align-top border border-red-400">
            {/* LOGO */}
          </div>

          <div className="inline-block m-[0_0_0_4px] align-middle">
            <div className="text-sm text-left">DBX project</div>

            <div className="flex gap-1 items-center">
              <span className="text-[#e7711b] text-sm font-bold m-[0_6px_0_0] align-middle">5.0</span>

              <StarRatings rating={5} size={12} className="text-[#e7711b] flex gap-1" />
            </div>
          </div>
        </SheetHeader>

        <div className="flex flex-col overflow-scroll">
          {reviews.map((review) => (
            <div key={review.id} className="flex gap-2 p-4">
              <div className="relative min-w-12 w-12 h-12 rounded-full overflow-hidden">
                <Image fill src={review.image} alt={review.name} />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h2 className="text-sm text-left">{review.name}</h2>

                  <div className="flex items-center gap-2">
                    <StarRatings rating={review.rating} size={10} className="text-[#e7711b] flex gap-1" />
                    <p className="text-[#e7711b] text-xs">({review.rating})</p>
                  </div>
                </div>

                <p className="text-sm font-primary">{review.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default GoogleReviews;
