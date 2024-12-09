import React from "react";
import Link from "next/link";

function AdvertismentBanner() {
  return (
    <section
      id="featured-advertisement"
      className="bg-primaryContrast transition-[background_0.3s,border_0.3s,border-radius_0.3s,box-shadow_0.3s] p-[40px_0px_40px_0px] my-12"
    >
      <div className="max-w-5xl flex items-center justify-between gap-8 mx-auto relative">
        <div className="flex flex-col p-6 px-8 w-2/3">
          <h3 className="text-left mb-6 text-2xl font-secondary text-primary font-semibold">
            Take Your Career to the Next Level
          </h3>
          <p className="text-left mb-6 text-xl text-primary font-primary">
            Ready to stand out from the competition? Our professional Resume Writing, LinkedIn Optimization, and CV
            Distribution Services are here to open doors to new opportunities worldwide
          </p>
        </div>

        <div className="w-1/3">
          <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
            Chat with us
          </button>
        </div>
      </div>
    </section>
  );
}

export default AdvertismentBanner;
