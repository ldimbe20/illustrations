/** @format */

"use client";
import NavLinks from "./navlinks";
import { useState } from "react";
import HamburgerLinks from "./hamburgerLinks";

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
			<div className='w-full h-15 py-3 sticky bg-white border-b-2 border-slate-500'>
				<div className='flex justify-between items-center ml-2 md:mr-2'>
					{/* regular menu to display on larger screens*/}
					<div className='hidden md:flex justify-between md:items-center md:w-full'>
						<div className='md:flex md:items-center'>
							<h2 className='text-black font-sans font-semibold text-2xl'>
								Lauren Dimberg
							</h2>
						</div>
						<div className='ml-auto uppercase text-l md:flex md:items-center md:mx-0'>
							<NavLinks handleLinkClick={handleLinkClick} />
						</div>
					</div>
					{/* hamburger menu to display on small screens*/}
					<div className='flex items-center text-black mr-3 md:hidden cursor-pointer'>
						<div className='flex items-center relative h-full transition-delay hover:text-gray-800'>
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
							<div className='absolute top-[75px] left-0 text-center right-0 bg-white transition-all duration-500 delay-100 pb-3 z-50'>
								<HamburgerLinks
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
