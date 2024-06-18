/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { designTypes } from "./data";
import ImageGallery from "./_ui/imageGallery";

const items = designTypes;

export default function Home() {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(true);
	}, []);
	return (
		<>
			<div className='container flex flex-col items-center h-full pt-10 px-10'>
				<div
					className={`h-full py-10 text-center md:flex md:justify-between transition-opacity duration-500 ease-in-out ${
						loaded ? "opacity-100" : "opacity-0"
					}`}
				>
					<h3 className='text-black font-sans font-semibold text-2xl text-left md:w-1/3 '>
						Hey I’m Lauren!
						<br />
						Graphic Designer? Illustrator? Developer?? Ok, just call me Lauren.
					</h3>
					<p className='md:w-1/2 text-left'>
						Great introduction, right? Let&rsquo;s just say I have experience in
						all those fields, and the best part is I still want to learn more!
					</p>
				</div>
				<ImageGallery items={items} />
			</div>
			;
		</>
	);
}
