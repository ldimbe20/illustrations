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
		console.log(open)
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
						className={`relative text-black mr-5 md:ml-0 font-semibold text-base z-50 block w-full py-2 px-4 transition-colors duration-300 ${
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
						className={`relative text-black mr-5 text-base md:ml-0 z-50 block w-full py-2 px-4 transition-colors duration-300 ${
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
