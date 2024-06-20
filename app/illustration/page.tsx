/** @format */
"use client";
import React, { useEffect, useState } from "react";
import ImageGallery from "../_ui/imageGallery";
import { illustrations, illustrationsTwo } from "../data";

const items = illustrations;
const itemTwo = illustrationsTwo;

export default function Illustration() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);

	return (
		<div className='container flex flex-col items-center h-full pt-10 px-10'>
			<div
				className={`h-full py-10 text-center md:flex md:justify-between transition-opacity duration-500 ease-in-out ${
					loaded ? "opacity-100" : "opacity-0"
				}`}
			>
				<h3 className='text-black font-sans font-semibold text-2xl text-left mb-5 md:mb-0'>
					Illustrations{" "}
				</h3>
				<p className='md:w-1/2 text-left'>
					I have always loved drawing and have been fortunate enough to use my
					talents on a variety of projects in my graphic design portfolio. Below
					are prints I have made for art shows and for fun using a variety of
					mediums including acrylic, watercolor, pen, and Procreate.
				</p>
			</div>
			<ImageGallery items={items} />
			<ImageGallery items={itemTwo} />
		</div>
	);
}
