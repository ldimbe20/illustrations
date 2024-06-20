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
					className='absolute -bottom-2 -left-2 -right-2 h-0.5 origin-left scale-x-0 rounded-full bg-slate-500 transition-transform duration-300 ease-out'
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
						className='absolute left-1/2 top-11 bg-white text-black'
						// above changes the space between the header and navbar
					>
						<div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
						<div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
						<FlyoutContent />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default FlyoutLink;
