/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import { designTypes, wildkin, wildkinPhone } from "../data";

const items = wildkinPhone;
const itemsTwo = wildkin;

export default function Wildkin() {
	return (
		<>
			<div className='container flex flex-col items-center h-full pt-10 px-10'>
				<div className='h-full py-10 text-center md:flex md:justify-between'>
					<h3 className='text-black font-sans font-semibold text-2xl text-left'>
						Wildkin
					</h3>
					<p className='md:w-1/2 text-left'>
						While freelancing for Wildkin, a retail company specializing in
						children’s bedding, school gear, nap mats, storage, and décor, I
						designed various social media advertising materials, including email
						blasts and Instagram posts. Additionally, I created callout pictures
						for their Amazon listings. These images highlighted product features
						and helped consumers visualize the size of the products in relation
						to their children.
					</p>
				</div>
				<ImageGallery items={items} />
				<ImageGallery items={itemsTwo} />
			</div>
			;
		</>
	);
}
