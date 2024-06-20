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
						className='relative text-black mr-5 font-semibold z-50'
						style={{ position: "relative", display: "inline-block" }}
					>
						{text}
						<span
							style={{
								transform: open ? "scaleX(1)" : "scaleX(0)",
							}}
							className='absolute -bottom-1 -left-2 -right-2 h-0.5 origin-left scale-x-0 rounded-full bg-slate-500 transition-transform duration-300 ease-out'
						/>
					</h3>
				</Link>
			) : (
				<Link href={href}>
					<p
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						className='block text-black ml-3 mt-3 text-small z-50'
						style={{ position: "relative", display: "inline-block" }}
					>
						{text}
						<span
							style={{
								transform: open ? "scaleX(1)" : "scaleX(0)",
							}}
							className='absolute -bottom-1 -left-2 -right-2 h-0.5 origin-left scale-x-0 rounded-full bg-slate-500 transition-transform duration-300 ease-out'
						/>
					</p>
				</Link>
			)}
		</>
	);
};

export default AnimationLinks;
