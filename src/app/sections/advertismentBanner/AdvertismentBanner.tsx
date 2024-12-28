import React from "react";
import Link from "next/link";
import Image from "next/image";

import whatsAppImage from "@/assets/icons/whatsapp-icon.png";

function AdvertismentBanner() {
  return (
    <>
      <section
        id="featured-advertisement"
        className="bg-primaryContrast transition-[background_0.3s,border_0.3s,border-radius_0.3s,box-shadow_0.3s] p-[40px]"
      >
        <div className="max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 mx-auto">
          <div className="flex flex-col md:p-6 md:px-8 md:w-3/4">
            <h3 className="text-left mb-6 text-2xl font-secondary text-primary font-semibold">
              Take Your Career to the Next Level
            </h3>
            <p className="text-left mb-6 text-xl text-primary font-primary">
              Ready to stand out from the competition? Our professional Resume Writing, LinkedIn Optimization, and CV
              Distribution Services are here to open doors to new opportunities worldwide
            </p>
          </div>

          <div className="md:w-1/4">
            <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
              Chat with us
            </button>
          </div>
        </div>
      </section>
      <div className="sticky bottom-10 z-[1000] isolate w-fit ml-auto m-4 mr-10 xl:mr-20 bg-white rounded-full filter drop-shadow-xl p-4">
        <Link href="https://wa.me/971582239328?text=Hello" target="_blank" className="w-75 h-75 ">
          <Image alt="Whatsapp" src={whatsAppImage} width={35} height={35} />
        </Link>
      </div>
    </>
  );
}

export default AdvertismentBanner;
