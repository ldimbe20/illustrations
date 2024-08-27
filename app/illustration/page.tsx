"use client";
import PageLayout from "../_ui/pagelayout";
import { illustrations } from "../data_exports";

const items = illustrations;

const Illustrations = () => {
  const projectHeader = "Illustrations";
  const description = `I have always loved drawing and have had the privilege of showcasing my talents in various projects within my graphic design portfolio. Below are prints I have created for art shows and personal enjoyment, using a range of mediums including acrylic, watercolor, pen, and procreate.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Illustrations;
