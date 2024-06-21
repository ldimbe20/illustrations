/** @format */
"use client";
import React, { useEffect, useState } from "react";
import ImageGallery from "../_ui/imageGallery";
import { designTypes, gibson } from "../data_exports";

const items = gibson;

export default function Gibson() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);
	return (
		<>
			<div className='container flex flex-col items-center h-full pt-10 px-10'>
				<div
					className={`h-full py-10 text-center md:flex md:justify-between transition-opacity duration-500 ease-in-out ${
						loaded ? "opacity-100" : "opacity-0"
					}`}
				>
					<h3 className='text-black font-sans font-semibold text-2xl text-left mb-5 md:mb-0'>
						C.R Gibson
					</h3>
					<p className='md:w-1/2 text-left'>
						As a designer for C.R. Gibson, I delved into everything
						baby-related, researching, updating, and designing new products for
						their baby department. My work included creating renders for
						potential products and developing items from start to finish. Below
						are some of my favorite creations and adorable babies!
					</p>
				</div>
				<ImageGallery items={items} />
			</div>
			;
		</>
	);
}
