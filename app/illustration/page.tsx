/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import { illustrations, illustrationsTwo } from "../data";

const items = illustrations;
// Want to use grid, but didn't want a single item to be left aligned.
const itemTwo = illustrationsTwo;

export default function Illustration() {
	return (
		<div className='container flex flex-col items-center h-full pt-10 px-10'>
			<div className='h-full py-10 text-center md:flex md:justify-between'>
				<h3 className='text-black font-sans font-semibold text-2xl text-left'>
					Illustrations{" "}
				</h3>
				<p className='md:w-1/2 text-left'>
					I have always loved drawing and have been fortnatre enough to use my
					talents on a variety of projects in my graphic design portfolio. Below
					are prints I have made for artshows and for fun using a variety of
					mediums including acrylic, watercolor, pen, and procreate.
				</p>
			</div>
			<ImageGallery items={items} />
			<ImageGallery items={itemTwo} />
		</div>
	);
}
