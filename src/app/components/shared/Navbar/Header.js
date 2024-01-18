import React from "react";
import Menus from "./Menus";

const Header = () => {

  return (
    <header className="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center">
      <a
        href="#"
        className="flex items-center whitespace-nowrap text-2xl font-black"
      >
        <span className="mr-2 w-8">
          <img
            src="https://componentland.com/images/JOJj79gp_Djhwdp_ZOKLL.png"
            alt=""
          />
        </span>
        spline
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label
        className="absolute top-5 right-5 cursor-pointer lg:hidden"
        htmlFor="navbar-open"
      >
        <svg
          className="h-7 w-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
    {/* menus  */}
    <Menus/>
    </header>
  );
};

export default Header;
