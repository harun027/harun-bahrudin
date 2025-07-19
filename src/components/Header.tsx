"use client";
import icons from "@/public/assets/icons";
import LanguageToggle from "./LanguageToggle";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menus = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Work",
      href: "#work",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="px-[15px] py-[20px] lg:px-[60px] lg:py-[16px] border-b border-gray-300 pb-4 relative sticky top-0 bg-white z-50">
      {/* Desktop */}
      <div className="gap-5 lg:gap-2 justify-between hidden md:flex">
        <div className="flex gap-2 items-center">
          <icons.HarunIcon width={40} height={40} color="black" />
          <h1 className="text-xl font-bold">Harun</h1>
        </div>
        <div className="flex gap-4 items-center">
          <ul className="flex gap-2">
            {menus.map((menu) => (
              <li className="px-[12px] py-[8px] font-semibold" key={menu.name}>
                <a href={menu.href}>{menu.name}</a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>
      </div>
      {/* Mobile */}
      <div className="flex md:hidden justify-between items-center">
        <div className="flex gap-2 items-center">
          <icons.HarunIcon width={30} height={30} color="black" />
          <h1 className="text-lg font-bold">Harun</h1>
        </div>
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <icons.AddIcon className="rotate-45 w-[20px] h-[20px]" /> : <icons.HamburgerIcon />}
        </div>
      </div>
      
      {/* Mobile Menu Fullscreen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/50 backdrop-blur-sm z-50 md:hidden">
          {/* Header in overlay */}
          <div className="px-[15px] py-[20px] border-b border-gray-300 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <icons.HarunIcon width={30} height={30} color="black" />
              <h1 className="text-lg font-bold">Harun</h1>
            </div>
            <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <icons.AddIcon className="rotate-45 w-[20px] h-[20px]" />
            </div>
          </div>
          
          {/* Menu Content */}
          <div className="px-[15px] py-[20px] flex flex-col h-full gap-4">
            <ul className="flex flex-col gap-1">
              {menus.map((menu) => (
                <li key={menu.name}>
                  <a 
                    href={menu.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-[8px] py-[8px] text-lg hover:bg-gray-50 rounded-lg"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Language Toggle at bottom */}
            <div className="px-[8px]">
              <LanguageToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}