import "./allpackages.css";
import React, { useState, useEffect } from "react";
import Kard from "../components/Kard";
import ClipLoader from "react-spinners/ClipLoader";

const PackageList = () => {
  const [packages, setPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Fetch packages data from your API based on the current page.
    fetchPackages(currentPage);
  }, [currentPage]);

  const fetchPackages = async (page) => {
    try {
      const response = await fetch(
        `https://api.tanzaniatrails.co.tz/api/packages?page=${page}`
      );
      const data = await response.json();
      console.log(data?.data);
      setPackages(data?.data); // Assuming the package data is in the 'data' property.
      setTotalPages(data?.last_page); // Assuming the total pages are provided by the backend.
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };



  if (packages == []) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ minHeight: "80vh", margin: "20px", borderRadius: "10px" }}
      >
        <ClipLoader
          color={"#683e12"}
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div className="packagesKontainer">
    <div className="w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 allpackages">
      {/* <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Package List
      </h1> */}

      {/* <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1
                ? "text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 active"
                : "text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            }
          >
            {index + 1}
          </button>
        ))}
      </div> */}
      {/* Render package data here */}
      <div className="allKardContainer">
        {packages.map((each) => {
          return (
            <div className="allKard">
              <Kard item={each} />
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1
                ? "text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-red-900 active"
                : "text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default PackageList;
