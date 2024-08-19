"use client";
import PageLayout from "../_ui/pagelayout";
import { block } from "../data_exports";

const items = block;

const Bloc = () => {
  const projectHeader = "Block Aero Technologies";
  const description = `Block Aero Technologies is a blockchain platform empowering
						organizations across the aviation supply chain to manage their data,
						operations, and collaborative workflows efficiently. Below are
						flyers, along with Instagram and LinkedIn posts, that I created for
						the company.`;
  return (
    <>
      <PageLayout
        projectHeader={projectHeader}
        description={description}
        items={items}
      />
    </>
  );
};

export default Bloc;
