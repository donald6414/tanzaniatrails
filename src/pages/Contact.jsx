import React, { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";
import ClipLoader from "react-spinners/ClipLoader";
import Swal from "sweetalert2";
import Checked from '../assets/checked.png'

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState();
  const [pressLoading, setPressLoading] = useState(false);

  const handleSubmit = () => {
    setPressLoading(true);
    // e.preventDefault();

    if (
      name === "" ||
      !email.includes("@") ||
      phone === "" ||
      message === "" ||
      email === ""
    ) {
      setError("Please fill in all fields correctly.");
      setPressLoading(false);
      return; // Exit the function if there's an error
    }

    // Create a payload object with the data you want to send
    const payload = {
      name,
      email,
      phone,
      message,
    };

    // Make a POST request using axios
    axios
      .post("https://api.tanzaniatrails.co.tz/api/contact_message", payload)
      .then((response) => {
        console.log("successFull");
        console.log("Response from the server:", response.data);
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
        setError();
        setPressLoading(false);

        Swal.fire({
          title: 'Submission Sent',
          text: 'We will contact you shotly',
          imageUrl: Checked,
          imageAlt: 'successful'});
      })
      .catch((error) => {
        setPressLoading(false);
        console.error("Error:", error);
        // Handle errors
      });
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);

      if (event.key === "Enter") {
        event.preventDefault();

        handleSubmit();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    // Cleanup function
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="volunteer backgroundImage">
      <div className="Rangi">
        {/* <div className="text-white py-12">
          <div className="container mx-auto text-center">
            <p className="text-3xl md:text-4xl font-semibold mb-4">
              Join Our Volunteer
            </p>
            <p className="text-lg md:text-xl mb-8">
              Make a difference while exploring the world!
            </p>
          </div>
        </div> */}

        <section>
          <div className=" text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
              <div className="flex flex-col w-full lg:w-1/3 p-8">
                <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
                  Travel With Us
                </p>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-justify">
                  Welcome to Travel With Us, your trusted partner for
                  unforgettable travel experiences. We are a passionate team of
                  explorers and travel enthusiasts dedicated to helping you
                  create memories that last a lifetime. With years of expertise
                  in the tourism industry, we are committed to making your dream
                  vacations a reality.
                </p>
                <h1 className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
                  Our Mission:
                </h1>
                <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-justify">
                  To provide exceptional travel services that exceed your
                  expectations, offering unique and immersive journeys to
                  destinations around the world
                </p>

                <div className="bg-blue-500 p-4 text-white contactUs">
                  <p>Contact us today to start planning your next adventure:</p>
                  <p className="mt-2">
                    Phone: <a href="tel:+255 785 560 820">+255 785 560 820</a>
                  </p>
                  <p className="mt-2">
                    Email:{" "}
                    <a href="mailto:info@travelwithus.co.tz">
                    info@travelwithus.co.tz
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full lg:w-2/3 justify-center">
                <div className="container w-full px-4">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                        <div className="flex-auto p-5 lg:p-10">
                          <h4 className="text-2xl mb-4 text-black font-semibold">
                            Contact us
                          </h4>
                          <div class="mb-1 sm:mb-2">
                            <label
                              for="firstName"
                              class="inline-block mb-1 font-medium text-black"
                            >
                              Full name
                            </label>
                            <input
                              placeholder="John"
                              required=""
                              type="text"
                              class="flex-grow w-full text-black h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                              id="firstName"
                              name="firstName"
                              onChange={(e) => setName(e.target.value)}
                              value={name}
                            />
                          </div>
                          <div class="mb-1 sm:mb-2">
                            <label
                              for="email"
                              class="inline-block mb-1 text-black font-medium text-black"
                            >
                              E-mail
                            </label>
                            <input
                              placeholder="john.doe@example.org"
                              required=""
                              type="text"
                              class="flex-grow w-full text-black h-12 px-4 mb-2  transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                              id="email"
                              name="email"
                              onChange={(e) => setEmail(e.target.value)}
                              value={email}
                            />
                          </div>

                          <div class="mb-1 sm:mb-2">
                            <label
                              for="lastName"
                              class="inline-block mb-1 font-medium text-black"
                            >
                              Phone phone
                            </label>
                            <input
                              placeholder="+255 XXX XXX XXX"
                              required=""
                              type="tel"
                              class="flex-grow text-black w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                              id="lastName"
                              name="lastName"
                              onChange={(e) => setPhone(e.target.value)}
                              value={phone}
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-black text-xs font-bold mb-2"
                              htmlFor="message"
                            >
                              leave Message
                            </label>
                            <textarea
                              maxLength="300"
                              onChange={(e) => setMessage(e.target.value)}
                              name="feedback"
                              value={message}
                              id="feedback"
                              rows="4"
                              cols="80"
                              className="border-0 text-black px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                              placeholder=""
                              required
                            ></textarea>
                          </div>
                          <div class="mt-4 mb-2 sm:mb-4">
                            <button
                              type="submit"
                              onClick={handleSubmit}
                              class="Back inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                              {!pressLoading ? (
                                "submit"
                              ) : (
                                <div className="flex justify-center items-center">
                                  <ClipLoader
                                    color={"white"}
                                    loading={true}
                                    size={30}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                  />
                                </div>
                              )}
                            </button>
                          </div>
                          <p
                            class={
                              error
                                ? "text-xs text-gray-600 sm:text-sm errorMessage"
                                : "NoerrorMessage"
                            }
                          >
                            {error}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Program Note */}
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
