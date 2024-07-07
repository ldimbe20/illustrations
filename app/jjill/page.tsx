/** @format */
"use client";
import { jjill, } from "../data_exports";
import PageLayout from "../_ui/pagelayout";

const items = jjill;

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
    />
  );
};

export default JJill;
