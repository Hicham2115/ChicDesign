import Image from "next/image";
import { Playfair_Display, Mulish } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import logo from "@/app/assets/logo.jpg";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { active: true, label: "Home" },
  { href: "#", label: "About Us" },
  { href: "#", label: "Contact Us" },
];

export default function Component() {
  return (
    <header className="px-4 md:px-6">
      <div className="relative flex h-16 w-full items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                size="icon"
                variant="ghost"
              >
                <svg
                  className="pointer-events-none"
                  fill="none"
                  height={16}
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width={16}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="-translate-y-[7px] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-315"
                    d="M4 12L20 12"
                  />
                  <path
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    d="M4 12H20"
                  />
                  <path
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135"
                    d="M4 12H20"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, _index) => (
                    <NavigationMenuItem key={link.label} className="w-full">
                      <NavigationMenuLink
                        active={link.active}
                        href={link.href}
                        className={`${mulish.className} font-semibold py-1.5`}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          {/* Main nav */}
          <div className="flex items-center gap-6">
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, _index) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink
                      active={link.active}
                      className={`${mulish.className} font-semibold py-1.5`}
                      href={link.href}
                    >
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 font-semibold text-lg flex gap-2 items-center">
          <a className="text-primary hover:text-primary/90" href="#">
            <Image src={logo} alt="Chic Design Logo" width={60} height={60} />
          </a>
          <h2 className={`${playfair.className} text-2xl font-bold`}>
            Chic Design
          </h2>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button asChild className="text-sm rounded-sm px-6" size="sm">
            <a href="#">Sign In</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
