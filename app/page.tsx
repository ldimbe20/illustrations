/** @format */
"use client";
import { designTypes } from "./data_exports";
import PageLayout from "./_ui/pagelayout";

const items = designTypes;

const Home = () => {
  const projectHeader = "Hey I’m Lauren!";
	const description = `I am a Graphic Designer and Illustrator who dabbles in Website Development, 
  I am more of a visual person so why not look at some of my projects. Oh I designed this site too sorry squarespace!`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Home

