/** @format */

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, MouseEvent } from "react";

interface NavLinksProps {
	handleLinkClick: (
		event: MouseEvent<HTMLParagraphElement | HTMLAnchorElement>
	) => void;
	isDropdownOpen?: boolean;
}

export default function NavLinks({
	handleLinkClick,
	isDropdownOpen,
}: NavLinksProps) {
	const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
	const pathname = usePathname();

	const toggleWorkDropdown = () => {
		setIsWorkDropdownOpen((prev) => !prev);
	};

	const closeWorkDropdown = () => {
		setIsWorkDropdownOpen(false);
	};

	const handleDropdownLinkClick = (
		event: MouseEvent<HTMLParagraphElement | HTMLAnchorElement>
	) => {
		handleLinkClick(event);
		closeWorkDropdown();
	};

	return (
		<>
			<div className='relative'>
				<p
					onClick={(event) => {
						handleLinkClick(event);
						toggleWorkDropdown();
					}}
					className={clsx(
						"text-black underline-offset-8 decoration-1 tracking-widest custom-transition mx-5 md:mx-3 cursor-pointer",
						{
							underline: !isDropdownOpen && pathname === "/",
							"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
								isDropdownOpen,
							"hover:underline": !isDropdownOpen,
						}
					)}
				>
					Work
				</p>
				{isWorkDropdownOpen && (
					<div className='absolute top-[31px] -ml-1 mt-3 w-48 bg-slate-100 underline-offset-8 decoration-1 tracking-widest custom-transition mx-5 text-black'>
						<Link href='/graphics'>
							<p
								onClick={handleDropdownLinkClick}
								className='py-2 px-4 text-black text-opacity-90 hover:underline cursor-pointer'
							>
								Graphic Design
							</p>
						</Link>
						<Link href='/illustration'>
							<p
								onClick={handleDropdownLinkClick}
								className='py-2 px-4 text-black text-opacity-90 hover:underline cursor-pointer'
							>
								Illustration
							</p>
						</Link>
						<Link href='/development'>
							<p
								onClick={handleDropdownLinkClick}
								className='py-2 px-4 text-black text-opacity-90 hover:underline cursor-pointer'
							>
								Development
							</p>
						</Link>
						<Link href='/'>
							<p
								onClick={handleDropdownLinkClick}
								className='py-2 px-4 text-black text-opacity-90 hover:underline cursor-pointer'
							>
								Home
							</p>
						</Link>
					</div>
				)}
			</div>
			<Link href='/contact'>
				<p
					onClick={handleLinkClick}
					className={clsx(
						"text-black underline-offset-8 decoration-1 tracking-widest custom-transition mx-5 md:mx-3",
						{
							underline: !isDropdownOpen && pathname === "/contact",
							"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
								isDropdownOpen,
							"hover:underline": !isDropdownOpen,
						}
					)}
				>
					Contact
				</p>
			</Link>
		</>
	);
}
