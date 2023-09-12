import React from "react";
import "./homestay.css";
import { TrustedCat } from "../components";

const AboutUs = () => {
  return (
    <div className="bg-gray-200">
      <header className="py-8 px-4 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          About Travel With US
        </h1>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-gray-800 leading-relaxed text-justify my-4">
            Travel With Us is the best Tour company that is dedicated to have
            you explore the Wonders and Beauties of Nature within East Africa in
            a very responsible manner. Based in Arusha, Tanzania – East Africa,
            we boast to be a fully locally owned Tour Company. All the profits
            generated from every booking, go directly to impact the local
            communities that strive so hard to make a living and raise their
            families in a positive manner. Our charming and ever smiling Team is
            comprised of professionals who have over 20 years of experience in
            the Tourism Industry. The various Tour Packages offered here could
            as well be custom made to meet and exceed your thirst for Safari
            experience. Marvel the annual Great Wildebeest Migration in the Vast
            Serengeti plains and Maasai Mara in Kenya; Climb Mt. Kilimanjaro, to
            the highest peak in Africa and one of the continent’s magnificent
            sights; Relax on the Sandy beaches, Snorkel or Scuba dive in the
            crystal clear reef waters of Zanzibar, Pemba and Mafia Islands;
            taste the rich cultures of The ancient 120 tribes including The
            Maasai and Hadzabe Bushmen tribes
          </p>
          <div className="text-center">
            <a href="/contact">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
      <TrustedCat />
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Meet the Team
          </h2>

          <div className="meetTeam">
            <div className="flex items-center mb-8">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Team Member Name"
              />
              <div>
                <h3 className="text-lg font-semibold">Team Member Name</h3>
                <p className="text-gray-700">Job Title</p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Team Member Name"
              />
              <div>
                <h3 className="text-lg font-semibold">Team Member Name</h3>
                <p className="text-gray-700">Job Title</p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://images.unsplash.com/photo-1617854818583-09e7f077a156?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Team Member Name"
              />
              <div>
                <h3 className="text-lg font-semibold">Team Member Name</h3>
                <p className="text-gray-700">Job Title</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <footer className="py-8 px-4 bg-white">
        <p className="text-gray-800 text-sm text-center">
          &copy; 2022 Phind. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
};

export default AboutUs;
