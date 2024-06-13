/** @format */
"use client";
import React, { useEffect, useState } from "react";
import ImageGallery from "../_ui/imageGallery";
import { jjill, jjillSingle } from "../data";

const items = jjill;
const itemsTwo = jjillSingle;


export default function JJill() {
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
					<h3 className='text-black font-sans font-semibold text-2xl text-left'>
						J.Jill
					</h3>
					<p className='md:w-1/2 text-left'>
						J. Jill, is a fashion retailer that offers unique and fashionable
						women’s apparel, accessories, and footwear. While working for J.Jill
						I created and edited catalog spreads along with marketing materials
						such as posters, easel, and vouchers. Below are some samples of my
						work.
					</p>
				</div>
				<ImageGallery items={items} />
				<ImageGallery items={itemsTwo} />
			</div>
			;
		</>
	);
}
