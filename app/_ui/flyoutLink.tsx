/** @format */

import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FlyoutLinkProps = {
  children: ReactNode;
  href: string;
  FlyoutContent?: React.ComponentType<any>;
};

const FlyoutLink: React.FC<FlyoutLinkProps> = ({
  children,
  href,
  FlyoutContent,
}) => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <a href={href} className="relative mr-5 text-black">
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="md:absolute md:-bottom-2 md:-left-2 md:-right-2 md:mb-1 md:h-0.375 md:origin-left md:scale-x-0 md:rounded-full md:bg-slate-500 md:transition-transform md:duration-300 md:ease-out"
        />
      </a>
      <AnimatePresence>
        {open && FlyoutContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 top-11 w-full bg-white text-black md:left-1/2 md:top-8.5 md:w-auto"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
