/** @format */
"use client";
import { designTypes } from "./data_exports";
import PageLayout from "./_ui/pagelayout";

const items = designTypes;

const Home = () => {
  const projectHeader = "Hey I’m Lauren!";
  const description = `Graphic Designer? Illustrator? Developer?? Ok, just call me Lauren.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Home

