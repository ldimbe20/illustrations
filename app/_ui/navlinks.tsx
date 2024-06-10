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
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		function handleResize() {
			setIsSmallScreen(window.innerWidth < 640);
		}

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

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
			{/* Work */}
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
					<div className='absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md'>
						<Link href='/graphics'>
							<p
								onClick={handleDropdownLinkClick}
								className='block py-2 px-4 text-black hover:bg-gray-200 cursor-pointer'
							>
								Graphic Design
							</p>
						</Link>
						<Link href='/illustration'>
							<p
								onClick={handleDropdownLinkClick}
								className='block py-2 px-4 text-black hover:bg-gray-200 cursor-pointer'
							>
								Illustration
							</p>
						</Link>
						<Link href='/development'>
							<p
								onClick={handleDropdownLinkClick}
								className='block py-2 px-4 text-black hover:bg-gray-200 cursor-pointer'
							>
								Development
							</p>
						</Link>
						{isSmallScreen && (
							<Link href='/contact'>
								<p
									onClick={handleDropdownLinkClick}
									className='block py-2 px-4 text-black hover:bg-gray-200 cursor-pointer'
								>
									Contact
								</p>
							</Link>
						)}
						<Link href='/'>
							<p
								onClick={handleDropdownLinkClick}
								className='block py-2 px-4 text-black hover:bg-gray-200 cursor-pointer'
							>
								Home
							</p>
						</Link>
					</div>
				)}
			</div>

			{/* Contact */}
			{!isSmallScreen && (
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
			)}
		</>
	);
}
