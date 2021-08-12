import React, { FC } from "react";

type ContentTypes = {
  heading: string;
  title: string;
  content: string;
};

const ContentCard: FC<ContentTypes> = ({ heading, title, content }) => {
  const buttonSpacing: string = "rounded-full px-8 py-2";

  return (
    <div className="lg:col-span-4 col-span-12 bg-white rounded-xl shadow-md border-0 p-4">
      <p className="mt-2 text-cardHeading font-bold">{heading}</p>
      <div className="my-2">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-contentParagraph">{content}</p>
      </div>
      <button className={`bg-contentButton  text-white mt-2 ${buttonSpacing}`}>
        SEE MORE
      </button>
    </div>
  );
};

export default ContentCard;
