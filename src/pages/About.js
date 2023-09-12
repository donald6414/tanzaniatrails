import React from "react";
import Hero from "../assets/hero.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our company! Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nullam auctor, nisl ac ultrices aliquet, nunc nunc
        tincidunt nunc, vitae ullamcorper nunc nunc id nunc.
      </p>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            src="https://maps.google.com/maps?q=-3.3728826538537273,%2036.6886261458343&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
            frameBorder="0"
            scrolling="no"
            style={{ width: "1080px", height: "390px" }}
          ></iframe>
          <style>
            {`
            .mapouter {
              position: relative;
              height: 390px;
              width: 1080px;
            }
            .gmap_canvas {
              overflow: hidden;
              height: 390px;
              width: 1080px;
            }
            .gmap_canvas iframe {
              position: relative;
              z-index: 2;
            }
            .gmap_canvas a {
              top: 0;
              z-index: 0;
            }
          `}
          </style>
          <a href="https://www.eireportingonline.com">ei reporting</a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
