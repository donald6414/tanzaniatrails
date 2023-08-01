import React from "react";

export const Heading = () => {
  return <div>Title</div>;
};

export const Title = ({ title, locate, color }) => {
  return (
    <>
      <h5
        className={`font-bold md:text-4xl text-2xl text-center md:text-${locate} text-${color}`}
      >
        {title}
      </h5>
    </>
  );
};

export const Title2 = ({ title, locate, color }) => {
  return (
    <>
      <h5
        className={`font-bold text-xl text-center md:text-${locate} text-${color}`}
      >
        {title}
      </h5>
    </>
  );
};

export const Paragraph = ({ content, color, locate }) => {
  return (
    <>
      <p
        className={`md:text-lg md:mt-10 mt-5 text-justify text-${color} md:text-${locate}`}
      >
        {content}
      </p>
    </>
  );
};
