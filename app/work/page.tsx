/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import { designTypes } from "../data";

const items = designTypes;

export default function Work() {
	return (
		<div className='container flex justify-center items-center h-full sm:px-10rem'>
			<ImageGallery items={items} />
		</div>
	);
}
