/** @format */
"use client";
import NavLinks from "./navlinks";
import { useState } from "react";
import DropDownMenu from "./dropdownMenu";
import { DropdownMenuDetails } from "../data_exports";

const DropdownMenuDetailsLinks = DropdownMenuDetails;

const Navbar = () => {
  const [rotate, setRotate] = useState(false);
  const [hideRectangle, setHideRectangle] = useState(false);
  const toggleAnimation = () => {
    setRotate(!rotate);
    setHideRectangle(!hideRectangle);
  };

  return (
    <>
      <div className="z-30 h-12 w-full items-center border-b-2 border-slate-500 bg-slate-100 py-3">
        <div className="ml-2 flex justify-between md:mr-2">
          {/* regular menu to display on larger screens*/}
          <div className="hidden md:flex md:w-full md:items-center md:justify-between">
            <div className="md:flex md:items-center">
              <h2 className="font-sans text-xl font-semibold text-slate-600">
                Lauren Dimberg
              </h2>
            </div>
            <div className="text-l ml-auto md:mx-0 md:flex md:items-center">
              <NavLinks />
            </div>
          </div>
          {/* hamburger menu to display on small screens*/}
          <div className="mr-3 flex cursor-pointer items-center text-slate-600 md:hidden">
            <div className="absolute mt-7" onClick={toggleAnimation}>
              <DropDownMenu DropdownContent={DropdownMenuDetails}>
                <button>
                  {/* hamburger icon and X animation*/}
                  <svg
                    viewBox="0 0 100 100"
                    className="h-9 w-9 items-center p-1"
                  >
                    {/* top rectangle */}
                    {!hideRectangle && (
                      <rect
                        className="rounded-lg fill-current"
                        width="80"
                        height="5"
                        x="10"
                        y="20"
                        rx="5"
                        ry="5"
                      />
                    )}
                    {/* middle rectangles */}
                    <rect
                      className="fill-current transition-transform duration-300"
                      width="80"
                      height="5"
                      x="10"
                      y="50"
                      rx="5"
                      ry="5"
                      transform={rotate ? "rotate(45 50 55)" : ""}
                    />
                    <rect
                      className="fill-current transition-transform duration-300"
                      width="80"
                      height="5"
                      x="10"
                      y="50"
                      rx="5"
                      ry="5"
                      transform={rotate ? "rotate(-45 50 55)" : ""}
                    />
                    {/* bottom rectangle */}
                    {!hideRectangle && (
                      <rect
                        className="fill-current"
                        width="80"
                        height="5"
                        x="10"
                        y="80"
                        rx="5"
                        ry="5"
                      />
                    )}
                  </svg>
                </button>
              </DropDownMenu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
