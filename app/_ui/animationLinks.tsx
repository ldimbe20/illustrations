/** @format */

import Link from "next/link";
import { useState } from "react";

export type ImageCardProps = {
  text: string;
  href: string;
  isHeader: boolean;
};

const AnimationLinks: React.FC<ImageCardProps> = ({ text, href, isHeader }) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
    console.log(open);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <>
      {isHeader ? (
        <Link href={href}>
          <h3
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative z-30 mr-5 block w-full px-4 py-2 text-base font-semibold text-black transition-colors duration-300 md:ml-0 ${
              open && "bg-slate-300"
            }`}
          >
            {text}
          </h3>
        </Link>
      ) : (
        <Link href={href}>
          <h3
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative z-30 mr-5 block w-full px-4 py-2 text-base text-black transition-colors duration-300 md:ml-0 ${
              open && "bg-slate-300"
            }`}
          >
            {text}
          </h3>
        </Link>
      )}
    </>
  );
};

export default AnimationLinks;
