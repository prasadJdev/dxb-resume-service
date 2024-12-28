import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import whatsAppImage from "@/assets/icons/whatsapp-icon.png";

const Footer = () => {
  return (
    <>
      <div className="sticky bottom-10 z-[1000] isolate w-fit ml-auto m-4 mr-10 xl:mr-20 bg-white rounded-full filter drop-shadow-xl p-4">
        <Link href="https://wa.me/971582239328?text=Hello" target="_blank" className="">
          <Image alt="Whatsapp" src={whatsAppImage} width={35} height={35} />
        </Link>
      </div>

      <footer className="bg-gray-100 py-8 -mt-[7rem] pt-[7rem]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="h-10 w-48 border border-dashed border-tertiary flex items-center justify-center">
              <span className="inline-block align-middle text-tertiary">Logo</span>
            </Link>
            {/* <div className="text-xl text-center border-dotted border border-red-300 font-bold">Logo</div> */}

            <div className="flex justify-evenly w-full mt-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="mt-6 md:mt-0">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-600">
              <a href="#">About</a>
              <a href="#">Authors</a>
              <a href="#">Archive</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
