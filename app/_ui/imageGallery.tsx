/** @format */
import ImageCard, { ImageCardProps } from "./imageCard";

type ImageGalleryProps = {
  items: ImageCardProps[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items }) => {
  return (
    <div className="flex justify-center">
      <div className={`z-0 w-full max-w-5xl md:columns-2 lg:columns-3`}>
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
