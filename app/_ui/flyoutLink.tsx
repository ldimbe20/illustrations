/** @format */

import React, { ReactNode, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

type FlyoutLinkProps = {
  children: ReactNode;
  href?: string;
  FlyoutContent?: React.ComponentType<any>;
  open: boolean;
};

const FlyoutLink: React.FC<FlyoutLinkProps> = ({
  children,
  href,
  FlyoutContent,
  open,
}) => {
  const router = usePathname();
  const isCurrentPage = router === href;

  return (
    <div className="relative">
      <a
        className={`relative mr-5 ${isCurrentPage ? "font-semibold text-slate-600" : "text-slate-600"}`}
      >
        {children}
        <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="md:absolute md:-bottom-2 md:-left-2 md:-right-2 md:mb-1 md:h-0.3125 md:origin-left md:scale-x-0 md:rounded-full md:bg-slate-500 md:transition-transform md:duration-300 md:ease-out"
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
            className="absolute left-0 top-11 w-full bg-white text-slate-600 md:left-1/2 md:top-8.5 md:w-auto"
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
