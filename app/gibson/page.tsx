"use client";
import PageLayout from "../_ui/pagelayout";
import { gibson } from "../data_exports";

const items = gibson;

const Gibson = () => {
  const projectHeader = "C.R Gibson";
  const description = `As a designer for C.R. Gibson, I delved into everything
						baby-related, researching, updating, and designing new products for
						their baby department. My work included creating renders for
						potential products and developing items from start to finish. Below
						are some of my favorite creations and adorable babies!`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Gibson;
