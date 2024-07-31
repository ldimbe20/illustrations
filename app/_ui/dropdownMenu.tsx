/** 
 * @format
 * @description This component is only used on small screens 
 */

import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
type DropdownMenuProps = {
  children: ReactNode;
  href?: string;
  DropdownContent?: React.ComponentType<any>;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  href,
  DropdownContent,
}) => {
  const [open, setOpen] = useState(false);
  const router = usePathname();
  const isCurrentPage = router === href;
  

  // these mouse enter and leave events support the underlining in the other links
  // const handleMouseEnter = () => {
  //   setOpen(true);
  // };

  // const handleMouseLeave = () => {
  //   setOpen(false);
  // };

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      onClick={toggleOpen}
      className="relative"
    >
      <a
        href={href}
        className={`relative mr-5 ${isCurrentPage ? "font-semibold text-slate-600" : "text-slate-600"}`}
      >
        {children}
        {/* <span
          style={{
            transform: open ? "scaleX(1)" : "scaleX(0)",
          }}
          className="md:absolute md:-bottom-2 md:-left-2 md:-right-2 md:mb-1 md:h-0.3125 md:origin-left md:scale-x-0 md:rounded-full md:bg-slate-500 md:transition-transform md:duration-300 md:ease-out"
        /> */}
      </a>
      <AnimatePresence>
        {open && DropdownContent && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-0 top-11 w-full bg-white text-slate-600 md:left-1/2 md:top-8.5 md:w-auto"
          >
            <DropdownContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
