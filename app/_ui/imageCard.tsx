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
		// when this event is triggered I want something to be passed to parent
	};

	const changeOpacity = (item: string) =>{
		
	}

	useEffect(() => {
		// Set the isLoaded state to true after a short delay to trigger the animation
		const timer = setTimeout(() => setIsLoaded(true), 100);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			{usesModal ? (
				<div // Render a div instead of Link when usesModal is true
					className={`relative block overflow-hidden cursor-pointer transition-opacity duration-1000 ease-in-out z-0 ${
						isLoaded ? "opacity-100" : "opacity-0"
					}`}
					onClick={() => handleClick(image)}
				>
					<div className='relative'>
						<div className='group relative overflow-hidden'>
							<Image
								src={image}
								alt={alt}
								width={416}
								height={600}
								className='transition-transform duration-300 ease-in-out transform group-hover:scale-110'
							/>
							{isHovered && (
								<div className='absolute inset-0 flex items-center justify-center'></div>
							)}
						</div>
						<h4 className='text-black font-sans font-medium text-xl text-center mt-3 mb-5'>
							{text}
						</h4>
					</div>
				</div>
			) : (
				<Link
					href={link}
					className={`relative block overflow-hidden transition-opacity duration-1000 ease-in-out ${
						isLoaded ? "opacity-100" : "opacity-0"
					}`}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					onClick={() => handleClick(image)}
				>
					<div className='relative'>
						<div className='group relative overflow-hidden'>
							<Image
								src={image}
								alt={alt}
								width={416}
								height={600}
								className='transition-transform duration-300 ease-in-out transform group-hover:scale-110'
							/>
							{isHovered && (
								<div className='absolute inset-0 flex items-center justify-center'></div>
							)}
						</div>
						<h4 className='text-black font-sans font-medium text-xl text-center mt-3 mb-5'>
							{text}
						</h4>
					</div>
				</Link>
			)}
			{usesModal && clickedImg && (
				<Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
			)}
		</>
	);
};

export default ImageCard;
