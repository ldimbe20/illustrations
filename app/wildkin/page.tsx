/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import { designTypes } from "../data";

const items = designTypes;

export default function Wildkin() {
	return (
		<div className='container flex flex-col items-center h-full pt-10 sm:px-10rem'>
			<h3 className='mb-4 text-xl py-10'>Wildkin</h3>
			<ImageGallery items={items} />
		</div>
	);
}
