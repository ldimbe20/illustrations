/** @format */

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./modal";

export type ImageCardProps = {
	image: string;
	alt: string;
	link: string;
	text: string;
	usesModal: boolean;
	// certain galleries use the modal while others do not
};

const ImageCard: React.FC<ImageCardProps> = ({
	image,
	alt,
	link,
	text,
	usesModal,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const [clickedImg, setClickedImg] = useState("");
	const [isLoaded, setIsLoaded] = useState(false);

	const handleClick = (item: string) => {
		setClickedImg(item);
	};

	useEffect(() => {
		// Set the isLoaded state to true after a short delay to trigger the animation
		const timer = setTimeout(() => setIsLoaded(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{usesModal ? (
				<div // Render a div instead of Link when usesModal is true
					className={`relative block overflow-hidden cursor-pointer transition-opacity duration-1000 ease-in-out ${
						isLoaded ? "opacity-100" : "opacity-0"
					}`}
					onClick={() => handleClick(image)}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<Image src={image} alt={alt} width={416} height={600} />
					{isHovered && (
						<div className='absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center'>
							<span className='text-black font-sans font-semibold text-xl'>
								{text}
							</span>
						</div>
					)}
				</div>
			) : (
				<Link
					href={link}
					className={`relative block overflow-hidden transition-opacity duration-2000 ease-in-out ${
						isLoaded ? "opacity-100" : "opacity-0"
					}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onClick={() => handleClick(image)}
				>
					<Image src={image} alt={alt} width={416} height={600} />
					{isHovered && (
						<div className='absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center'>
							<span className='text-black font-sans font-semibold text-xl'>
								{text}
							</span>
						</div>
					)}
				</Link>
			)}
			{usesModal && clickedImg && (
				<Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
			)}
		</>
	);
};

export default ImageCard;
