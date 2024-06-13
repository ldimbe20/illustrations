/** @format */
import ImageCard, { ImageCardProps } from "./imageCard";

type ImageGalleryProps = {
	items: ImageCardProps[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
	const itemsCount = items.length;
	const gridColsClass =
		itemsCount % 3 === 1
			? "lg:grid-cols-1"
			: itemsCount % 3 === 2
			? "lg:grid-cols-2"
			: "lg:grid-cols-3";

	return (
		<div className='flex justify-center'>
			<div
				className={`grid grid-cols-1 py-10 md:grid-cols-2 ${gridColsClass} gap-4`}
			>
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
		</div>
	);
};

export default ImageGallery;
