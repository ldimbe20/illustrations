"use client";
import PageLayout from "../_ui/pagelayout";
import { allLogos, development } from "../data_exports";

const items = development;
const logos = allLogos;

const Development = () => {
  const projectHeader = "Development";
  const description = `Add description.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
      logos={logos}
    />
  );
};

export default Development;
