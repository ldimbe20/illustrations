/** @format */
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import { Crimson_Pro, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "./_ui/navbar";
import OpacityChange from "./_ui/opacityChange";
import Modal from "./_ui/modal";

const crimsonPro = Crimson_Pro({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lauren Portfolio",
	description: "Portfolio of my work",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth'>
			<head>
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link
					rel='apple-touch-icon'
					href='/apple-icon?<generated>'
					type='image/<generated>'
					sizes='<generated>'
				/>
			</head>
			<body className='m-0 p-0'>
				<Navbar />
				<div className='flex justify-center items-center'>{children}</div>
			</body>
		</html>
	);
}
