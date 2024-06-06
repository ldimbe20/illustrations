/** @format */

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, MouseEventHandler } from "react";

interface NavLinksProps {
	handleLinkClick: MouseEventHandler<HTMLParagraphElement>;
	isDropdownOpen?: boolean;
}

export default function NavLinks({
	handleLinkClick,
	isDropdownOpen,
}: NavLinksProps) {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		function handleResize() {
			setIsSmallScreen(window.innerWidth < 640);
		}

		handleResize(); // Call handleResize initially to set the correct initial state
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{/* Home */}
			<Link href='/'>
				<p
					onClick={handleLinkClick}
					className={clsx(
						"text-black tracking-widest custom-transition mx-5 md:mx-3",
						{
							"underline-offset-4 text-yellow-400":
								!isDropdownOpen && pathname === "/",
							"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
								isDropdownOpen,
							"hover:underline-offset-4": !isDropdownOpen,
						}
					)}
				>
					Home
				</p>
			</Link>

			{/* Services */}
			<Link href='/services'>
				<p
					onClick={handleLinkClick}
					className={clsx(
						"text-black tracking-widest custom-transition mx-5 md:mx-3",
						{
							"font-bold text-yellow-400":
								!isDropdownOpen && pathname === "/services",
							"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
								isDropdownOpen,
							"hover:font-bold": !isDropdownOpen,
						}
					)}
				>
					Graphic Design
				</p>
			</Link>

			{/* Values */}
			<Link href='/values'>
				<p
					onClick={handleLinkClick}
					className={clsx(
						"text-black tracking-widest custom-transition mx-5 md:mx-3",
						{
							"font-bold text-yellow-400":
								!isDropdownOpen && pathname === "/values",
							"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
								isDropdownOpen,
							"hover:font-bold": !isDropdownOpen,
						}
					)}
				>
					Illustration
				</p>
			</Link>

			{/* About */}
			<Link href='/about'>
				<p
					onClick={handleLinkClick}
					className={clsx(
						"text-black tracking-widest custom-transition mx-5 md:mx-3",
						{
							"font-bold text-yellow-400":
								!isDropdownOpen && pathname === "/about",
							"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
								isDropdownOpen,
							"hover:font-bold": !isDropdownOpen,
						}
					)}
				>
					Development
				</p>
			</Link>

			{/* Contact */}
			<Link
				href={isSmallScreen ? "/ContactRedirect" : "/contact"}
				target={isSmallScreen ? "_blank" : ""}
			>
				<p
					onClick={handleLinkClick}
					className={clsx(
						"text-black underline-offset-4 tracking-widest custom-transition mx-5 md:mx-3",
						{
							"font-bold text-yellow-400":
								!isDropdownOpen && pathname === "/contact",
							"py-2 hover:font-bold hover:bg-sky-tint-light custom-transition":
								isDropdownOpen,
							"hover:font-bold": !isDropdownOpen,
						}
					)}
				>
					Contact
				</p>
			</Link>
		</>
	);
}
