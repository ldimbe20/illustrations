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
			className='relative'
		>
			<a href={href} className='relative text-black mr-5'>
				{children}
				<span
					style={{
						transform: open ? "scaleX(1)" : "scaleX(0)",
					}}
					className='absolute -bottom-2 mb-1 -left-2 -right-2 h-0.375 origin-left scale-x-0 rounded-full bg-slate-500 transition-transform duration-300 ease-out'
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
						className='absolute top-12 left-0 w-full md:w-auto md:left-1/2 md:top-11 bg-white text-black'
					>
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FlyoutLink;
