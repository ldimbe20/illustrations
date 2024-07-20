/** @format */
"use client";
import { designTypes } from "./data_exports";
import PageLayout from "./_ui/pagelayout";

const items = designTypes;

const Home = () => {
  const projectHeader = "Hello I’m Lauren!";
	const description = `I am a graphic designer and illustrator with an interest in website development. My goal is to use my creative talents and technical skills to design visual content that engages users. I am excited by any opportunity that involves graphic design, illustration, or web development.
`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Home

