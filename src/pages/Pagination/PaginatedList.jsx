import React from "react";
import { TourCard } from "../../components";

function PaginatedList({ items, currentPage, itemsPerPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div className="w-full flex flex-row flex-wrap gap-2 ">
      {currentItems.map((item, index) => (
        <div
          className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
          style={{ width: "270px" }}
        >
          <TourCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default PaginatedList;
