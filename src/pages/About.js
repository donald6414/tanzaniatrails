import React from "react";
import "./homestay.css";

const AboutUs = () => {
  return (
    <div className="bg-gray-200">
      <header className="py-8 px-4 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">About US</h1>
      </header>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Our Mission</h2>
          <p className="text-gray-800 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            elementum augue sit amet enim tristique, non sagittis enim volutpat.
            Ut et sem eu dui scelerisque hendrerit. Morbi tincidunt mollis enim,
            sit amet luctus justo semper vitae. Duis sed ultricies orci. Sed
            fermentum neque eu lacus consectetur, ut semper leo dictum. Aenean
            in vehicula lectus, ac lacinia nunc.
          </p>
          <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Contact Us
            </button>
          </div>
        </div>
      </section>
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
