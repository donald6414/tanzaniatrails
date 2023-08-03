import React from "react";

export const Heading = () => {
  return <div>Title</div>;
};

export const Title = ({ title, locate, className, color }) => {
  return (
    <>
      <h5
        className={`font-bold md:text-4xl text-2xl text-center md:text-${locate} text-${color} ${className}`}
      >
        {title}
      </h5>
    </>
  );
};

export const Title2 = ({ title, locate, className, color }) => {
  return (
    <>
      <h5
        className={`font-bold text-xl text-center md:text-${locate} text-${color} ${className}`}
      >
        {title}
      </h5>
    </>
  );
};

export const Paragraph = ({ content, color, className, locate }) => {
  return (
    <>
      <p
        className={`md:text-lg md:mt-10 mt-5 text-justify text-${color} md:text-${locate} ${className}`}
      >
        {content}
      </p>
    </>
  );
};
