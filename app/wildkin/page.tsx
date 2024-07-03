"use client";
import PageLayout from "../_ui/pagelayout";
import { wildkin } from "../data_exports";

const items = wildkin;

const Wildkin = () => {
  const projectHeader = "Wildkin";
  const description = `While freelancing for Wildkin, a retail company specializing in
						children’s bedding, school gear, nap mats, storage, and décor, I
						designed various social media advertising materials, including email
						blasts and Instagram posts. Additionally, I created callout pictures
						for their Amazon listings. These images highlighted product features
						and helped consumers visualize the size of the products in relation
						to their children.`
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
    />
  );
};

export default Wildkin;
