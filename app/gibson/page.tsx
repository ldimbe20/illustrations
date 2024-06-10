/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import { designTypes } from "../data";

const items = designTypes;

export default function Gibson() {
	return (
		<div className='container flex flex-col  h-full pt-10 sm:px-10rem'>
			<div className='flex justify-between w-full'>
				<h3 className='text-xl'>C.R Gibson</h3>
				<h5 className='text-xl'>Lorem ipson sdfnondsfn afpnniasfonoasnf</h5>
			</div>
			<ImageGallery items={items} />
		</div>
	);
}
