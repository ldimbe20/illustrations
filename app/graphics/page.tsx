"use client";
import PageLayout from "../_ui/pagelayout";
import { graphics } from "../data_exports";

const items = graphics;

const Graphics = () => {
  const projectHeader = "Graphic Design";
  const description = `As a seasoned graphic designer with 6 years of experience, I have
					worked on a diverse range of projects across both print and digital
					media. My expertise spans Adobe Creative Cloud along with Canva and
					Figma. My print work includes flyers, posters, easels, and stationery
					products. On the digital front, I specialize in creating content for
					social media platforms, including email campaigns, Instagram posts,
					and LinkedIn updates, ensuring a visually appealing brand presence.
					Below, you will find some examples of my work.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Graphics;

