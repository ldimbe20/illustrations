/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import {  graphics } from "../data";

const items = graphics;

export default function Graphics() {
	return (
		<div className='container flex flex-col items-center h-full py-10 sm:px-10rem'>
			<h3 className='mb-4 text-xl py-10'>Graphic Design</h3>
			<ImageGallery items={items} />
		</div>
	);
}
