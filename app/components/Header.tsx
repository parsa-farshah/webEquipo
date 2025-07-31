"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../public/images/logo.webp";
import btnMenu from "../../public/images/icons8-menu-50.svg";
import closeBtn from "../../public/images/close.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full mx-auto bg-amber-400 flex justify-center ">
      <nav className="h-[80px] w-full 2xl:container  flex items-center md:h-[100px] bg-amber-400 relative">
        <div
          className="px-8 py-5 w-full h-full flex justify-between items-center"
          id="wrapper"
        >
          {/*------------------------ logo ---------------------*/}
          <div className="w-4/5 md:w-1/6" id="logo">
            <figure className="w-[154px] h-[34px]">
              <Image src={logo} alt="logo" />
            </figure>
          </div>

          {/*----------------- links -------------------------*/}
          <div className=" hidden h-full md:flex md:pr-5 md:w-4/6 " id="links">
            <ul className="flex w-full justify-between items-center *:w-1/6 *:h-full *:flex *:justify-between lg:text-lg  **:hover:text-white **:flex **:items-center **:justify-center **:capitalize **:text-md  **:text-black">
              <li>
                <a className="h-full w-full" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="h-full w-full" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="h-full w-full" href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="h-full w-full" href="#">
                  About US
                </a>
              </li>
              <li>
                <a className="h-full w-full" href="#">
                  News
                </a>
              </li>
            </ul>
          </div>

          {/*----------------------- btn menu -----------------------------*/}
          <div
            className="w-1/5 flex justify-end relative md:hidden"
            id="btnMenu"
          >
            <a onClick={buttonMenu} className="cursor-pointer" href="#">
              <figure
                className={`w-[20px] h-[20px] transition-transform duration-200 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                <Image
                  src={isOpen ? closeBtn : btnMenu}
                  alt="menu toggle"
                  width={20}
                  height={20}
                />
              </figure>
            </a>
          </div>
        </div>
        {/* ---------------------submenu click on btn menu------------------------- */}
        {isOpen ? (
          <div className="w-full absolute z-50 top-full right-0 h-[280px]">
            <ul className="w-full h-full  *:w-full *:flex *:items-center *:h-1/5 **:w-full  **:bg-white **:pr-4 **:flex **:items-center **:hover:bg-gray-50">
              <li>
                <a className="h-full" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="h-full" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="h-full" href="#">
                  Testimonials
                </a>
              </li>
              <li>
                <a className="h-full" href="#">
                  About US
                </a>
              </li>
              <li>
                <a className="h-full" href="#">
                  News
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </nav>
    </header>
  );
}

export default Header;
