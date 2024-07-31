/** @format */

import { usePathname } from "next/navigation";
import { NavigationLinks } from "../data_exports";
import { useState } from "react";
const links = NavigationLinks;

const NavLinks = () => {
  const router = usePathname();
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (href:any) => {
    setHoveredLink(href);
    console.log("hovered");
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
    console.log("hoveredtwo");
  };

  return (
    <div className="z-30 flex pr-5">
      {links.map((link) => (
        <div key={link.href} className="relative mr-5">
          <a
            onMouseEnter={() => handleMouseEnter(link.href)}
            onMouseLeave={handleMouseLeave}
            className={`relative ${
              router === link.href
                ? "font-semibold text-slate-600"
                : "text-slate-600"
            }`}
            href={link.href}
          >
            {link.navlinkName}
          </a>
          <span
            style={{
              transform: hoveredLink === link.href ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 left-0 right-0 mb-1 h-0.5 origin-left scale-x-0 rounded-full bg-slate-500 transition-transform duration-300 ease-out"
          ></span>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
