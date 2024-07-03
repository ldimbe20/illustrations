"use client";
import PageLayout from "../_ui/pagelayout";
import { block, blockDigital } from "../data_exports";

const items = blockDigital;
const itemsTwo = block;

const Bloc = () => {
  const projectHeader = "Block Aero Technologies";
  const description = `Block Aero Technologies is a blockchain platform empowering
						organizations across the aviation supply chain to manage their data,
						operations, and collaborative workflows efficiently. Below are
						flyers, along with Instagram and LinkedIn posts, that I created for
						the company.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
      itemsTwo={itemsTwo}
    />
  );
};

export default Bloc;
