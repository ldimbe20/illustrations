"use client";
import PageLayout from "../_ui/pagelayout";
import { allLogos, development } from "../data_exports";

const items = development;
const logos = allLogos;

const Development = () => {
  const projectHeader = "Development";
  const description = `As an entry-level software developer, I have developed responsive websites for clients and handled end-to-end testing to ensure quality. With experience across various frameworks, I am currently focusing on Next.js and Tailwind. Below are projects I have worked on to help me develop better skills in website design.`;
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
