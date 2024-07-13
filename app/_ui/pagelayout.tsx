/** @format */
"use client";
import React, { useEffect, useState } from "react";
import ImageGallery from "../_ui/imageGallery";
import Image from "next/image"; // Assuming you're using Next.js for image optimization

type PageLayoutProps = {
  projectHeader: string;
  description: string;
  items?: any;
  logos?: string[];
};

const PageLayout: React.FC<PageLayoutProps> = ({
  projectHeader,
  description,
  items,
  logos,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="container flex h-full flex-col items-center px-10 pt-10">
        <div
          className={`h-full py-10 text-center transition-opacity duration-500 ease-in-out md:flex-col ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="mb-5 text-center font-sans text-xl text-black md:mb-0">
            {projectHeader}{" "}
          </h3>
          <p className="mt-5 text-center text-sm">{description}</p>
        </div>
        <ImageGallery items={items} />
        {logos && logos.length > 0 ? (
          <div className="flex justify-center">
            <div className="z-0 flex flex-wrap justify-center">
              {logos.map((logoItem, index) => (
                <div key={index} className="p-2">
                  <Image
                    src={logoItem}
                    width={75}
                    height={75}
                    className="transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                    alt="logo"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default PageLayout;
