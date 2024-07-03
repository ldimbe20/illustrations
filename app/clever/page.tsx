"use client";
import PageLayout from "../_ui/pagelayout";
import { clever } from "../data_exports";

const items = clever;

const Clever = () => {
  const projectHeader = "The Clever Factory";
  const description = `At The Clever Factory I work as a Senior Designer creating gift bags
						and boxes. I was always inspired by the purchased art we used and
						was lucky enough to create my own to be used on their products.
						Below are some samples of bags I designed during my time at The
						Clever Factory.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Clever;
