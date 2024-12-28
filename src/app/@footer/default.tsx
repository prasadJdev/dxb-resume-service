import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start gap-4">
          <div className="h-10 w-48 border border-dashed border-tertiary flex items-center justify-center">
            <span className="inline-block align-middle text-tertiary">Logo</span>
          </div>
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
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <a href="#">About</a>
            <a href="#">Authors</a>
            <a href="#">Archive</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
