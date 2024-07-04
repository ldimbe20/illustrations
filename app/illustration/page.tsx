"use client";
import PageLayout from "../_ui/pagelayout";
import { illustrations, illustrationsTwo } from "../data_exports";

const items = illustrations;
const itemsTwo = illustrationsTwo;

const Illustrations = () => {
  const projectHeader = "Illustrations";
  const description = `I have always loved drawing and have been fortunate enough to use my
					talents on a variety of projects in my graphic design portfolio. Below
					are prints I have made for art shows and for fun using a variety of
					mediums including acrylic, watercolor, pen, and Procreate.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
      itemsTwo={itemsTwo}
    />
  );
};

export default Illustrations;
