/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import { block, blockDigital } from "../data";

const items = blockDigital;

const itemsTwo = block;

export default function Block() {
	return (
		<>
			<div className='container flex flex-col items-center h-full pt-10 px-10'>
				<div className='h-full py-10 text-center md:flex md:justify-between'>
					<h3 className='text-black font-sans font-semibold text-2xl text-center'>
						Block Aero Technologies
					</h3>
					<p className='pt-5 md:w-1/3'>
						lorem ipsum dolor sit amet, consectetur adipis lorem ipsomething
						lorem ipsum dolor sit amet, consectetur adipis lorem ipsomething
						lorem ipsum dolor sit amet, consectetur adipis lorem ipsomething
					</p>
				</div>
				<ImageGallery items={items} />
				<ImageGallery items={itemsTwo} />
			</div>
		</>
	);
}
