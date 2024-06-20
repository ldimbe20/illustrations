/** @format */

import Link from "next/link";
import { MouseEvent } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface HamburgerLinksProps {
	handleLinkClick: (
		event: MouseEvent<HTMLParagraphElement | HTMLAnchorElement>
	) => void;
	isDropdownOpen: boolean;
}

export default function HamburgerLinks({
	handleLinkClick,
}: HamburgerLinksProps) {
	const pathname = usePathname();

	return (
		<div className='text-center underline-offset-8 decoration-1 mt-3'>
			<Link href='/graphics'>
				<p
					onClick={handleLinkClick}
					className='block py-2 px-4 text-black hover:underline cursor-pointer'
				>
					Graphic Design
				</p>
			</Link>
			<Link href='/illustration'>
				<p
					onClick={handleLinkClick}
					className='block py-2 px-4 text-black hover:underline cursor-pointer'
				>
					Illustration
				</p>
			</Link>
			<Link href='/development'>
				<p
					onClick={handleLinkClick}
					className='block py-2 px-4 text-black hover:underline cursor-pointer'
				>
					development
				</p>
			</Link>
			<Link href='/'>
				<p
					onClick={handleLinkClick}
					className='block py-2 px-4 text-black hover:underline cursor-pointer'
				>
					Work
				</p>
			</Link>
		</div>
	);
}
