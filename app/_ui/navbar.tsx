/** @format */

"use client";
import Image from "next/image";
import NavLinks from "./navlinks";
import { useState } from "react";

export default function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [rotate, setRotate] = useState(false);
	const [hideRectangle, setHideRectangle] = useState(false);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
		setRotate(!rotate);
		setHideRectangle(!hideRectangle);
	};

	const handleLinkClick = () => {
		setIsDropdownOpen(!isDropdownOpen);
		setRotate(!rotate);
		setHideRectangle(!hideRectangle);
	};

	return (
		<>
			<div className='w-full h-15 py-3 sticky bg-white'>
				<div className='flex justify-between ml-2 md:mr-2 md:justify-between'>
					{/* regular menu to display on larger screens*/}
					<div className='hidden  md:flex md:items-center md:mx-0'>
						<NavLinks handleLinkClick={handleLinkClick} />
					</div>
					{/* hamburger menu to display on small screens*/}
					<div className='flex items-center text-black mr-3 md:hidden cursor-pointer'>
						<div className='flex items-center relative h-full transition-delay hover:text-yellow-400'>
							<button onClick={toggleDropdown}>
								<svg viewBox='0 0 100 100' className='w-9 h-9 items-center p-1'>
									{/* top rectangle */}
									{!hideRectangle && (
										<rect
											className='fill-current rounded-lg'
											width='80'
											height='10'
											x='10'
											y='20'
											rx='5'
											ry='5'
										/>
									)}
									{/* middle rectangles */}
									<rect
										className='fill-current transition-transform duration-300'
										width='80'
										height='10'
										x='10'
										y='50'
										rx='5'
										ry='5'
										transform={rotate ? "rotate(45  50 55)" : ""}
									/>
									<rect
										className='fill-current transition-transform duration-300'
										width='80'
										height='10'
										x='10'
										y='50'
										rx='5'
										ry='5'
										transform={rotate ? "rotate(-45  50 55)" : ""}
									/>
									{/* bottom rectangle */}
									{!hideRectangle && (
										<rect
											className='fill-current'
											width='80'
											height='10'
											x='10'
											y='80'
											rx='5'
											ry='5'
										/>
									)}
								</svg>
							</button>
						</div>
						{isDropdownOpen && (
							<div className='absolute top-[75px] left-0 text-center right-0 bg-sky-tint transition-all duration-500 delay-100 pb-3'>
								<NavLinks
									handleLinkClick={handleLinkClick}
									isDropdownOpen={isDropdownOpen}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
