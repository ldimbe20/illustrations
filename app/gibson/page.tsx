/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import { designTypes, gibson } from "../data";

const items = gibson;

export default function Gibson() {
	return (
		<>
			<div className='container flex flex-col items-center h-full pt-10 px-10'>
				<div className='h-full py-10 text-center md:flex md:justify-between'>
					<h3 className='text-black font-sans font-semibold text-2xl text-left'>
						C.R Gibson
					</h3>
					<p className='md:w-1/2 text-left'>
						As a designer for C.R. Gibson, I delved into everything
						baby-related, researching, updating, and designing new products for
						their baby department. My work included creating renders for
						potential products and developing items from start to
						finish. Below are some of my favorite creations and adorable babies!
					</p>
				</div>
				<ImageGallery items={items} />
			</div>
			;
		</>
	);
}
