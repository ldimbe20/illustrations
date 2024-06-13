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
					<h3 className='text-black font-sans font-semibold text-2xl text-left'>
						Block Aero Technologies
					</h3>
					<p className='md:w-1/3 text-left'>
						Block Aero Technologies is a blockchain platform empowering
						organizations across the aviation supply chain to manage their data,
						operations, and collaborative workflows efficiently. Below are
						flyers, along with Instagram and LinkedIn posts, that I created for
						the company.
					</p>
				</div>
				<ImageGallery items={items} />
				<ImageGallery items={itemsTwo} />
			</div>
		</>
	);
}
