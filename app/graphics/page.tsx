"use client";
import PageLayout from "../_ui/pagelayout";
import { graphics } from "../data_exports";

const items = graphics;

const Graphics = () => {
  const projectHeader = "Graphic Design";
  const description = `I am a graphic designer with 5 years of experience and a diverse range of projects across both print and digital media. Utilizing Adobe Creative Cloud along with Figma I have experience creating flyers, posters, stationary products, and content for social media platforms. Below are some samples of my work.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Graphics;

