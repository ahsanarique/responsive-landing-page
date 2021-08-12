import React, { FC, useState, useEffect } from "react";
import ContentCard from "../ContentCard/ContentCard";

type ContentTypes = {
  heading: string;
  title: string;
  content: string;
};

const data = [
  {
    heading: "Getting Started",
    title: "Singularity",
    content:
      "This package will suit you if you want a single page simple website for your product. You can revise the design two times after the initial draft discussion session...",
  },
  {
    heading: "Business Workflow",
    title: "Plurality",
    content:
      "This package will suit you if you want a single page simple website for your product. You can revise the design two times after the initial draft discussion session...",
  },
  {
    heading: "Interactions",
    title: "Professional",
    content:
      "This package will suit you if you want a single page simple website for your product. You can revise the design two times after the initial draft discussion session...",
  },
];

const Contents: FC = () => {
  const [contentData, setContentData] = useState<ContentTypes[] | []>([]);

  useEffect(() => {
    setContentData(data);
  }, []);

  return (
    <section id="portfolio" className="font-poppins mt-4">
      <p className="font-bold text-4xl border-b text-center border-deep w-48 col-span-12 mx-auto pb-2">
        Packages
      </p>
      <div className="grid grid-cols-12 gap-4 justify-items-center lg:mx-40 md:mx-20 mx-5 my-10">
        {contentData.map((content) => (
          <ContentCard
            key={content.title + content.heading}
            heading={content.heading}
            title={content.title}
            content={content.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Contents;
