"use client";
import PageLayout from "../_ui/pagelayout";
import { graphics } from "../data_exports";

const items = graphics;

const Graphics = () => {
  const projectHeader = "Graphic Design";
  const description = `My graphic design career has provided me with experience across a diverse range of projects in both print and digital media. I utilize Adobe Creative Cloud along with Figma to create various materials, including flyers, posters, stationery products, and content for social media platforms. Below are some samples of my work.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Graphics;
