import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Selection, SelectionBook, SelectionDate, Title2 } from "../components";
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
import swal from "sweetalert";
import ClipLoader from "react-spinners/ClipLoader";

export const BookingHorizontal = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 bg-white md:mx-40 p-5 md:rounded-full rounded-lg drop-shadow-lg ">
        <div className="flex items-center justify-center">
          <Title2 title={"Book Now"} />
        </div>
        <div>
          <div className="">
            <Selection />
          </div>
        </div>
        <div>
          <SelectionBook />
        </div>
        <div>
          <SelectionDate />
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={"/tour"}
            className="btn bg-[#683e12] hover:bg-[#51300d] rounded-full  border-none"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export const BookingVertical = () => {
  return <div>Booking</div>;
};

export const BookingForm = ({ price, id }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    adult: "1",
    children: "0",
    description: "",
    package_id: id,
  });
  const [loading, setLoading] = useState(false);

  const adultPrice = price; // Set your price per adult here
  const childPrice = adultPrice / 2; // Set your price per child here

  const totalCost =
    formData.adult * adultPrice + formData.children * childPrice;

  const increment = (type) => {
    setFormData({ ...formData, [type]: formData[type] + 1 });
  };

  const decrement = (type) => {
    if (formData[type] > 0) {
      setFormData({ ...formData, [type]: formData[type] - 1 });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const requestData = formData;

    try {
      const response = await axios.post(
        "https://api.tanzaniatrails.co.tz/api/quote_request",
        requestData
      );

      console.log(response);
      setLoading(false);
      swal("Hello world!");

      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        adult: "1",
        children: "0",
        description: "",
        package_id: id,
      });
    } catch (error) {
      swal(error.message);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-5"
      >
        <h2 className="text-xl mb-4 font-bold">Travel Inquiry</h2>

        {/* Name Input */}
        <div className="">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Full name
          </label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-full"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email Input */}
        <div className="">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-full"
            placeholder="john.doe@example.com"
            required
          />
        </div>

        {/* Phone Number Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="text">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-full"
            placeholder="+1 (234) 567-890"
            required
          />
        </div>

        {/* Travel Date Input */}
        {/* <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="travelDate"
          >
            Travel Date
          </label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-full"
            required
          />
        </div> */}

        {/* Number of Adult */}
        <div className="mb-4 flex items-center justify-between">
          <label className="text-sm font-medium">Adult</label>
          <div className="flex items-center">
            <button
              onClick={() => decrement("adult")}
              type="button"
              className="p-2 bg-red-200 rounded-full"
              required
            >
              <FaMinus />
            </button>
            <input
              type="number"
              name="adult"
              value={formData.adult}
              onChange={handleInputChange}
              className="w-16 mx-2 text-center"
            />
            <button
              onClick={() => increment("adult")}
              type="button"
              className="p-2 bg-green-200 rounded-full"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        {/* Number of Children */}
        <div className="mb-4 flex items-center justify-between">
          <label className="text-sm font-medium">Children</label>
          <div className="flex items-center">
            <button
              onClick={() => decrement("children")}
              type="button"
              className="p-2 bg-red-200 rounded-full"
            >
              <FaMinus />
            </button>
            <input
              type="number"
              name="children"
              value={formData.children}
              onChange={handleInputChange}
              className="w-16 mx-2 text-center"
              required
            />
            <button
              onClick={() => increment("children")}
              type="button"
              className="p-2 bg-green-200 rounded-full"
            >
              <FaPlus />
            </button>
          </div>
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
            onChange={handleInputChange}
            name="description"
            value={formData.description}
            id="description"
            rows="4"
            cols="80"
            className="border-0 text-black px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
            placeholder=""
            required
          ></textarea>
        </div>

        <div className="mb-4 text-right">
          Total Cost: ${totalCost.toFixed(2)}
        </div>

        <button
          type="submit"
          className="btn bg-[#683e12] hover:bg-[#683e12] text-white py-2 rounded-full w-full"
        >
          {!loading ? (
            "Submit Inquiry"
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
      </form>
    </div>
  );
};
