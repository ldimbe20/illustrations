/** @format */

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export type ImageCardProps = {
	image: string;
	alt: string;
	link: string;
	text: string;
};


const ImageCard: React.FC<ImageCardProps> = ({ image, alt, link, text }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href={link}
			className='relative block overflow-hidden'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<Image src={image} alt={alt} width={208} height={300} />
			{isHovered && (
				<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
					<span className='text-white text-lg'>{text}</span>
				</div>
			)}
		</Link>
	);
};

export default ImageCard;
