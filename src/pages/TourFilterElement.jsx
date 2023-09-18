import React from "react";
import "./tourElement.css";
import Kard from "../components/Kard";

export default function TourFilterElement({ data }) {
  console.log(data);
  return (
    <div class="container mx-auto">
      <div class="flex flex-wrap -mx-4">
        {data.map((each, index) => (
          <div class="w-full sm:w-1/2 md:w-1/2 xl:w-50 p-4">
            <a
              href={`/singletour/${each.id}`}
              class="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div class="relative pb-48 overflow-hidden">
                <img
                  class="absolute inset-0 h-full w-full object-cover c-card"
                  src={"https://api.tanzaniatrails.co.tz/" + each.image_url}
                  alt=""
                />
              </div>
              <div class="p-4">
                <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs ">
                  {each.package_level.title}
                </span>
                <h2 class="mt-2 mb-2  font-bold element">{each.title}</h2>
                <p class="text-sm ParagraphElememt">{each.description}</p>
                <div class="mt-3 flex items-center">
                  <span class="text-sm font-semibold">$</span>&nbsp;
                  <span class="font-bold text-xl">{each.price}</span>
                  &nbsp;
                  {/* <span class="text-sm font-semibold">€</span> */}
                </div>
              </div>
              <div class="p-4 border-t border-b text-xs text-gray-700">
                {/* <span class="flex items-center mb-1">
                  <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
                </span> */}
                <span class="flex items-center">
                  <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                  Tour start : <b>{each.package_getting_there.tour_start.title} </b>
              , Tour End :<b> {each.package_getting_there.tour_end.title}</b>
                </span>
              </div>
              <div class="p-4 flex items-center text-sm text-gray-600">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 fill-current text-yellow-500"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 fill-current text-yellow-500"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 fill-current text-yellow-500"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 fill-current text-yellow-500"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 fill-current text-gray-400"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                </svg>
                <span class="ml-2">34 Review</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>

    // <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
    //   {data.map((each) => {
    //     return (
    //       <div class="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    //         <a href="#!">
    //           <img
    //             class="rounded-t-lg"
    //             src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
    //             alt="Skyscrapers"
    //           />
    //         </a>
    //         <div class="p-6">
    //           <h5 class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
    //             Card title
    //           </h5>
    //           <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
    //             This is a wider card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </p>
    //         </div>
    //         <div class="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
    //           <small>Last updated 3 mins ago</small>
    //         </div>
    //       </div>
    //     );
    //   })}
    // </div>
  );
}
