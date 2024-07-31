/** @format */

import { usePathname } from "next/navigation";
// import AnimationLinks from "./animationLinks";

const NavLinks = () => {
  const router = usePathname();

  return (
    <div className="z-30 flex pr-5">
      <a
        className={`relative mr-5 ${
          router === "/" ? "font-semibold text-slate-600" : "text-slate-600"
        }`}
        href="/"
      >
        Home
      </a>
      <a
        className={`relative mr-5 ${
          router === "/graphics"
            ? "font-semibold text-slate-600"
            : "text-slate-600"
        }`}
        href="/graphics"
      >
        Graphic Design
      </a>
      <a
        className={`relative mr-5 ${
          router === "/illustration"
            ? "font-semibold text-slate-600"
            : "text-slate-600"
        }`}
        href="/illustration"
      >
        Illustrations
      </a>
      <a
        className={`relative mr-5 ${
          router === "/development"
            ? "font-semibold text-slate-600"
            : "text-slate-600"
        }`}
        href="/development"
      >
        Development
      </a>
      <a
        className={`relative mr-5 ${
          router === "/contact"
            ? "font-semibold text-slate-600"
            : "text-slate-600"
        }`}
        href="/contact"
      >
        Contact
      </a>
    </div>
  );
};

export default NavLinks;
