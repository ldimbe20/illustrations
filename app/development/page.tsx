"use client";
import PageLayout from "../_ui/pagelayout";
import { development } from "../data_exports";

const items = development;

const Development = () => {
  const projectHeader = "Development";
  const description = `Add description.`;
  return (
    <PageLayout
      projectHeader={projectHeader}
      description={description}
      items={items}
      
    />
  );
};

export default Development;
