import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Selection, SelectionBook, SelectionDate, Title2 } from "../components";
import { FaMinus, FaPlus } from "react-icons/fa";

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
            to={"/greengpt"}
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

export const BookingForm = ({ price }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    adults: 1,
    children: 0,
  });

  const adultPrice = price; // Set your price per adult here
  const childPrice = adultPrice / 2; // Set your price per child here

  const totalCost =
    formData.adults * adultPrice + formData.children * childPrice;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to an API or handle as required
    console.log(formData);
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
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
          <label className="block text-sm font-medium mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-full"
            placeholder="+1 (234) 567-890"
            required
          />
        </div>

        {/* Travel Date Input */}
        <div className="mb-4">
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
        </div>

        {/* Number of Adults */}
        <div className="mb-4 flex items-center justify-between">
          <label className="text-sm font-medium">Adults</label>
          <div className="flex items-center">
            <button
              onClick={() => decrement("adults")}
              type="button"
              className="p-2 bg-red-200 rounded-full"
              required
            >
              <FaMinus />
            </button>
            <input
              type="number"
              name="adults"
              value={formData.adults}
              onChange={handleInputChange}
              className="w-16 mx-2 text-center"
            />
            <button
              onClick={() => increment("adults")}
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

        <div className="mb-4 text-right">
          Total Cost: ${totalCost.toFixed(2)}
        </div>

        <button
          type="submit"
          className="btn bg-[#683e12] hover:bg-[#683e12] text-white py-2 rounded-full w-full"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};
