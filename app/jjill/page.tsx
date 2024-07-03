/** @format */
"use client";
import { jjill, jjillSingle } from "../data_exports";
import PageLayout from "../_ui/pagelayout";

const items = jjill;
const itemsTwo = jjillSingle;

const JJill = () => {
  const projectHeader = "J.Jill";
  const description = 	`J. Jill, is a fashion retailer that offers unique and fashionable
						women’s apparel, accessories, and footwear. While working for J.Jill
						I created and edited catalog spreads along with marketing materials
						such as posters, easel, and vouchers. Below are some samples of my
						work.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
      itemsTwo={itemsTwo}
    />
  );
};

export default JJill;
