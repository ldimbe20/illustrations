/** @format */
import ImageCard, { ImageCardProps } from "./imageCard";

type ImageGalleryProps = {
	items: ImageCardProps[];
};

const ImageGallery: React.FC<ImageGalleryProps> =  ({ items }) => {
	return (
		<div className='grid grid-cols-1 py-5 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{items.map((item, index) => (
				<ImageCard
					key={index}
					image={item.image}
					alt={item.alt}
					link={item.link}
					text={item.text}
					usesModal={item.usesModal}
				/>
			))}
		</div>
	);
};

export default ImageGallery;


