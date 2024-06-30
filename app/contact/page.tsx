/** @format */
"use client";
import React, { useEffect, useState } from "react";
import ContactForm from "../_ui/contactForm";

export default function ContactPage() {
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
					<h3 className='text-black font-sans font-semibold text-2xl text-left mb-5 md:mb-0'>
						Let's Talk!
					</h3>
					<p className='md:w-1/2 text-left'>
						Fill in the form below and I will get back to you as soon as
						possible
					</p>
				</div>
				<div
					className={`py-10 text-center md:flex md:justify-between transition-opacity duration-1000 ease-in-out ${
						loaded ? "opacity-100" : "opacity-0"
					}`}
				>
					<ContactForm />
				</div>
			</div>
			;
		</>
	);
}
