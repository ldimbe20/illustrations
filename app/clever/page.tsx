/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import { clever } from "../data";

const items = clever;

export default function Clever() {
	return (
		<>
			<div className='container flex flex-col items-center h-full pt-10 px-10'>
				<div className='h-full py-10 text-center md:flex md:justify-between'>
					<h3 className='text-black font-sans font-semibold text-2xl text-left'>
						The Clever Factory
					</h3>
					<p className='md:w-1/2 text-left'>
						At The Clever Factory I work as a Senior Designer creating gift bags
						and boxes. I was always inspired by the purchased art we used and
						was lucky enough to create my own to be used on their products.
						Below are some samples of bags I designed during my time at The
						Clever Factory.
					</p>
				</div>
				<ImageGallery items={items} />
			</div>
			;
		</>
	);
}
