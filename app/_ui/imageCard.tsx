/** @format */

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./modal";
import VideoModal from "./videoModal";

export type ImageCardProps = {
  image: string;
  alt: string;
  link: string;
  text: string;
  openNewTab?: boolean;
  usesModal: boolean;
  isVideo: boolean;
  video: string;
  // If the gallery is a project type -development, illustration, graphic design
  //  - useModal is false because they use links if it displays images for a specific project it uses modals
};

const ImageCard: React.FC<ImageCardProps> = ({
  image,
  alt,
  link,
  text,
  openNewTab,
  usesModal,
  isVideo,
  video
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickedImg, setClickedImg] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = (item: string) => {
    setClickedImg(item);
    // when this event is triggered I want something to be passed to parent
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
          className={`relative z-0 mx-auto w-full max-w-5xl cursor-pointer overflow-hidden py-2 transition-opacity duration-1000 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => {
            isVideo && video ? handleClick(video) : handleClick(image)
          }}
        >
          <div className="relative">
            <div className="group relative overflow-hidden">
              <Image
                src={image}
                alt={alt}
                width={416}
                height={600}
                className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {isHovered && (
                <div className="absolute inset-0 flex items-center justify-center"></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`relative z-0 mx-auto w-full max-w-5xl cursor-pointer overflow-hidden py-2 transition-opacity duration-1000 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link
            target={openNewTab ? "_blank" : undefined}
            rel={openNewTab ? "noopener noreferrer" : undefined}
            href={link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => handleClick(image)}
          >
            <div className="relative">
              <div className="group relative overflow-hidden">
                <Image
                  src={image}
                  alt={alt}
                  width={416}
                  height={600}
                  className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
                {isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center"></div>
                )}
              </div>
              <h5 className="mt-2 text-center text-base font-medium text-slate-600">
                {text}
              </h5>
            </div>
          </Link>
        </div>
      )}
      {usesModal &&
        clickedImg &&
        (isVideo ? (
          <VideoModal clickedImg={clickedImg} setClickedImg={setClickedImg} />
        ) : (
          <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
        ))}
    </>
  );
};

export default ImageCard;
