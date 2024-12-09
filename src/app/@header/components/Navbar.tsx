"use client";

import * as React from "react";
import Link from "next/link";

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

function Navbar() {
  return (
    <div className="flex justify-between p-[14px_80px] shadow-[0_2px_4px_rgba(0,0,0,0.12)] sticky top-0 bg-white">
      <div className="h-10 w-48 border border-dashed border-secondary flex items-center justify-center">
        <span className="inline-block align-middle text-secondary">Logo</span>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-primary">Services</NavigationMenuTrigger>
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
    </div>
  );
}

export default Navbar;
