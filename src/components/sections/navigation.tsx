"use client";

import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navItems = [
  {
    href: "https://www.andyouth.or.kr/kr/content/feeling.php",
    label: "콘텐츠",
  },
  {
    href: "https://www.andyouth.or.kr/kr/program_and/regular.php",
    label: "프로그램",
  },
  {
    href: "https://www.andyouth.or.kr/kr/community/notice.php",
    label: "커뮤니티",
  },
  {
    href: "https://www.andyouth.or.kr/kr/center/greeting.php",
    label: "센터",
  },
];

const NavLink = ({
  href,
  label,
  isMobile = false,
}: {
  href: string;
  label: string;
  isMobile?: boolean;
}) => (
  <a
    href={href}
    className={`flex items-centerwhitespace-nowrap text-lg font-medium text-[#424242] hover:text-[#1976D2] transition-colors ${
      isMobile ? "py-2" : ""
    }`}
  >
    <span>앤드(</span>
    <b className="mx-0.5 inline-flex items-center align-middle">
      <Image
        src="https://www.andyouth.or.kr/images/icon/icon_and.png"
        alt="and icon"
        width={13}
        height={13}
      />
    </b>
    <span>){label}</span>
  </a>
);

export default function Navigation() {
  return (
    <header className="bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1)] h-[88px] flex items-center sticky top-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-5 w-full">
        <a href="https://www.andyouth.or.kr/kr/">
          <Image
            src="https://www.andyouth.or.kr/images/common/logo.png"
            alt="앤드센터"
            width={200}
            height={48}
            className="w-auto h-auto max-w-[150px] md:max-w-none"
            priority
          />
        </a>
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <NavLink key={item.label} href={item.href} label={item.label} />
          ))}
        </nav>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="w-11 h-11 bg-[#4A4A4A] flex items-center justify-center rounded"
              >
                <div className="flex flex-col space-y-[5px]">
                  <span className="block w-5 h-0.5 bg-white"></span>
                  <span className="block w-5 h-0.5 bg-white"></span>
                  <span className="block w-5 h-0.5 bg-white"></span>
                </div>
              </button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <div className="mt-12 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                    <NavLink href={item.href} label={item.label} isMobile />
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}