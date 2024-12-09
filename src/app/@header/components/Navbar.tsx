"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/ui/list-item";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "ATS & Euro Pass CV | Cover letter",
    href: "#",
    description: "#OPTIONAL_CONTENT Some desciption that can be used",
  },
  {
    title: "Linkedln Optimization",
    href: "#",
    description: "#OPTIONAL_CONTENT Some desciption that can be used",
  },
  {
    title: "CV Distribution Globally",
    href: "#",
    description: "#OPTIONAL_CONTENT Some desciption that can be used",
  },
];

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="max-h-svh overflow-scroll">
        <div aria-hidden className="sr-only">
          <SheetTitle>Nav bar</SheetTitle>
        </div>
        <SheetHeader className="border-b  border-[#d9d9d9] p-[10px_16px] flex flex-row gap-2">
          <div className="flex items-center justify-center w-12 h-12 rounded-lg align-top border border-red-400">
            {/* LOGO */}
          </div>

          <div className="inline-block m-[0_0_0_4px] align-middle">
            <div className="text-sm text-left">DBX project</div>

            <div className="flex gap-1 items-center">
              <span className="text-[#e7711b] text-sm font-bold m-[0_6px_0_0] align-middle">5.0</span>

              <span className="flex gap-1">
                <span className="wp-star">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="17" height="17" viewBox="0 0 1792 1792">
                    <path
                      d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                      fill="#e7711b"
                    ></path>
                  </svg>
                </span>
                <span className="wp-star">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="17" height="17" viewBox="0 0 1792 1792">
                    <path
                      d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                      fill="#e7711b"
                    ></path>
                  </svg>
                </span>
                <span className="wp-star">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="17" height="17" viewBox="0 0 1792 1792">
                    <path
                      d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                      fill="#e7711b"
                    ></path>
                  </svg>
                </span>
                <span className="wp-star">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="17" height="17" viewBox="0 0 1792 1792">
                    <path
                      d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                      fill="#e7711b"
                    ></path>
                  </svg>
                </span>
                <span className="wp-star">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="17" height="17" viewBox="0 0 1792 1792">
                    <path
                      d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"
                      fill="#e7711b"
                    ></path>
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </SheetHeader>

        <div className="flex flex-col overflow-scroll"></div>
      </SheetContent>
    </Sheet>
  );
};

const DesktopMenu = () => (
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-white">Services</NavigationMenuTrigger>
        <NavigationMenuContent className="z-[500]">
          <ul className="grid w-[400px] gap-3 p-4 grid-cols-1 z-[500]">
            {components.map((component) => (
              <ListItem
                className="hover:bg-primaryContrast rounded-sm"
                key={component.title}
                title={component.title}
                href={component.href}
              >
                {component.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="#pricing" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Price</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="#" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="#" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex justify-between p-4 md:p-[14px_80px] shadow-[0_2px_4px_rgba(0,0,0,0.12)] sticky top-0 bg-primary">
      <div className="h-10 w-48 border border-dashed border-tertiary flex items-center justify-center">
        <span className="inline-block align-middle text-tertiary">Logo</span>
      </div>

      {isDesktop ? <DesktopMenu /> : <MobileMenu />}
    </div>
  );
}

export default Navbar;
