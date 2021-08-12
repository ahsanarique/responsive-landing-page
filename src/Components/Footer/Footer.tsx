import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="lg:bg-footer-large-bg bg-footer-small-bg bg-no-repeat bg-cover    font-poppins text-white text-center flex flex-col items-center">
      <div className="lg:mt-72 mt-96 mb-20 lg:w-1/4 w-64">
        <p className="lg:text-4xl text-3xl  font-bold border-b pb-4 border-white">
          Start a project with me
        </p>
        <p className="sm:text-md my-8">
          Let's discuss our ideas for presenting your business to the world in
          an attractive, efficient and effective way.
        </p>
        <button className="bg-white text-deep font-poppins font-bold rounded-full px-6 py-3rounded-full px-8 py-2 shadow-2xl">
          HIRE ME
        </button>
      </div>
    </footer>
  );
};

export default Footer;
