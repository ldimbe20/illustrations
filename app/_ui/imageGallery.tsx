/** @format */
import ImageCard, { ImageCardProps } from "./imageCard";

type ImageGalleryProps = {
	items: ImageCardProps[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
	const threeOnLargeScreen = items.some((item) => item.threeOnLargeScreen);

	return (
		<div
			className={`grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-${
				threeOnLargeScreen ? 3 : 2
			} gap-4`}
		>
			{items.map((item, index) => (
				<ImageCard
					key={index}
					image={item.image}
					alt={item.alt}
					link={item.link}
					text={item.text}
					usesModal={item.usesModal}
					threeOnLargeScreen={item.threeOnLargeScreen}
				/>
			))}
		</div>
	);
};

export default ImageGallery;


