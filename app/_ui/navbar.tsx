/** @format */
"use client";
import NavLinks from "./navlinks";
import { useState } from "react";
import FlyoutLink from "./flyoutLink";
import { Portfolio } from "../data_exports";


const PortfolioLinks = Portfolio


export default function Navbar() {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [rotate, setRotate] = useState(false);
	const [hideRectangle, setHideRectangle] = useState(false);
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
		setRotate(!rotate);
		setHideRectangle(!hideRectangle);
	};


	return (
		<>
			<div className='w-full h-12 py-3 fixed items-center bg-slate-100 border-b-2 border-slate-500 z-50'>
				<div className='flex justify-between ml-2 md:mr-2'>
					{/* regular menu to display on larger screens*/}
					<div className='hidden justify-between md:flex md:items-center md:w-full'>
						<div className='md:flex md:items-center'>
							<h2 className='text-black font-sans font-semibold text-xl'>
								Lauren Dimberg
							</h2>
						</div>
						<div className='ml-auto text-l md:flex md:items-center md:mx-0'>
							<NavLinks />
						</div>
					</div>
					{/* hamburger menu to display on small screens*/}
					<div className='flex items-center text-black mr-3 md:hidden cursor-pointer'>
						<div className='flex items-center relative h-full transition-delay hover:text-gray-800'>
							<div
								className='flex items-center text-black mr-3 md:hidden cursor-pointer relative'
								onMouseEnter={toggleDropdown}
								onMouseLeave={toggleDropdown}
							>
								<div>
									<FlyoutLink href='/' FlyoutContent={PortfolioLinks}>
										<button>
											<svg
												viewBox='0 0 100 100'
												className='w-9 h-9 items-center p-1'
											>
												{/* top rectangle */}
												{!hideRectangle && (
													<rect
														className='fill-current rounded-lg'
														width='80'
														height='5'
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
													height='5'
													x='10'
													y='50'
													rx='5'
													ry='5'
													transform={rotate ? "rotate(45  50 55)" : ""}
												/>
												<rect
													className='fill-current transition-transform duration-300'
													width='80'
													height='5'
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
														height='5'
														x='10'
														y='80'
														rx='5'
														ry='5'
													/>
												)}
											</svg>
										</button>{" "}
									</FlyoutLink>
								</div>

								{/* <AnimatePresence>
									{isDropdownOpen && (
										<motion.div
											initial={{ opacity: 0, y: 15, height: "auto" }}
											animate={{ opacity: 1, y: 0, height: "auto" }}
											exit={{ opacity: 0, y: 15, height: 0 }}
											transition={{ duration: 0.3, ease: "easeOut" }}
											className='absolute top-[61px] left-0 w-full  bg-slate-100 transition-all duration-500 delay-100 z-50 uppercase md:absolute items-center md:h-full'
										>
											<HamburgerLinks2 isDropdownOpen={isDropdownOpen} />
										</motion.div>
									)}
								</AnimatePresence> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
