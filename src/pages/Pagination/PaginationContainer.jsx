// src/components/PaginationContainer.js
import React, { useState } from "react";
import PaginatedList from "./PaginatedList";

function PaginationContainer({ items,itemsLenght, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  console.log("onPageList" + itemsLenght);

  const totalPages = Math.ceil(items.lenght / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <PaginatedList
        items={items}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />

      <div>
        <div className="flex items-center gap-8 m-8">
          <button
            className={`bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow-sm focus:outline-none ${
              currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <p className="text-gray-500 font-normal">
            Page <span className="text-gray-900">{currentPage}</span> of{" "}
            <span className="text-gray-900">{totalPages}</span>
          </p>
          <button
            className={`bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow-sm focus:outline-none ${
              currentPage === totalPages
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaginationContainer;
