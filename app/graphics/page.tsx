/** @format */
"use client";
import React from "react";
import ImageGallery from "../_ui/imageGallery";
import { graphics } from "../data";

const items = graphics;

export default function Graphics() {
	return (
		<div className='container flex flex-col items-center h-full pt-10 px-10'>
			<div className='h-full py-10 text-center md:flex md:justify-between'>
				<h3 className='text-black font-sans font-semibold text-2xl text-left'>
					Graphic Design{" "}
				</h3>
				<p className='md:w-1/2 text-left'>
					As a seasoned graphic designer with 6 years of experience, I have
					worked on a diverse range of projects across both print and digital
					media. My expertise spans Adobe Creative Cloud along with Canva and
					Figma. My print work includes flyers, posters, easels, and stationery
					products. On the digital front, I specialize in creating content for
					social media platforms, including email campaigns, Instagram posts,
					and LinkedIn updates, ensuring a visually appealing brand presence.
					Below, you will find some examples of my work.
				</p>
			</div>
			<ImageGallery items={items} />
		</div>
	);
}
