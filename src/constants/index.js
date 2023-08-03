export const toursData = [
  {
    id: 1,
    title: "Serengeti Safari Adventure",
    description: "Experience the stunning wildlife of Serengeti National Park.",
    types: ["Wildlife Safari", "Nature Exploration"],
    duration: 5, // in days
    itinerary: [
      {
        day: 1,
        description: "Arrival in Tanzania, transfer to Serengeti National Park",
        image: "day1-image.jpg",
        accommodation: "Safari Lodge",
        meals: "Dinner",
      },
      {
        day: 2,
        description: "Full-day game drive in Serengeti",
        image: "day2-image.jpg",
        accommodation: "Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
    ],
    seasons: [
      {
        name: "High Season",
        months: ["June", "July", "August", "September"],
        price: 2499.99,
      },
      {
        name: "Low Season",
        months: ["March", "April", "May", "October"],
        price: 1999.99,
      },
    ],
    image: "serengeti-safari.jpg",
    reviews: [
      { user: "John Doe", comment: "An unforgettable experience!" },
      { user: "Jane Smith", comment: "Absolutely breathtaking!" },
    ],
  },
  {
    id: 2,
    title: "Mount Kilimanjaro Expedition",
    description: "Conquer the highest peak in Africa with our expert guides.",
    types: ["Mountain Trekking", "Adventure"],
    duration: 7, // in days
    itinerary: [
      {
        day: 1,
        description: "Arrival in Tanzania, transfer to Kilimanjaro basecamp",
        image: "day1-image.jpg",
        accommodation: "Basecamp Tents",
        meals: "Dinner",
      },
      {
        day: 2,
        description: "Ascend Kilimanjaro with experienced guides",
        image: "day2-image.jpg",
        accommodation: "Mountain Huts",
        meals: "Breakfast, Lunch, Dinner",
      },
      // ... more days ...
    ],
    seasons: [
      {
        name: "High Season",
        months: ["June", "July", "August"],
        price: 2999.99,
      },
      {
        name: "Low Season",
        months: ["January", "February", "September"],
        price: 2499.99,
      },
    ],
    image: "kilimanjaro-expedition.jpg",
    reviews: [
      {
        user: "Michael Johnson",
        rating: 4.7,
        comment: "A challenging and rewarding journey!",
      },
      {
        user: "Emily Davis",
        rating: 4,
        comment: "Achievement of a lifetime!",
      },
    ],
  },
  {
    id: 3,
    title: "Zanzibar Beach Retreat",
    description:
      "Relax on the pristine beaches of Zanzibar and enjoy turquoise waters.",
    types: ["Beach Vacation", "Relaxation"],
    duration: 4, // in days
    itinerary: [
      {
        day: 1,
        description: "Arrival in Zanzibar, transfer to the beach resort",
        image: "day1-image.jpg",
        accommodation: "Beach Resort",
        meals: "Dinner",
      },
      {
        day: 2,
        description: "Relax on the beach, enjoy water sports",
        image: "day2-image.jpg",
        accommodation: "Beach Resort",
        meals: "Breakfast, Lunch, Dinner",
      },
    ],
    seasons: [
      {
        name: "High Season",
        months: ["July", "August", "December"],
        price: 1799.99,
      },
      {
        name: "Low Season",
        months: ["January", "February", "March"],
        price: 1499.99,
      },
    ],
    image: "zanzibar-beach.jpg",
    reviews: [
      { user: "Sophia Brown", rating: 4.5, comment: "Paradise found!" },
      {
        user: "William Lee",
        rating: 4.2,
        comment: "A perfect tropical getaway.",
      },
    ],
  },
  // Add more tours here...
];

export const footerData = {
  company: [
    { id: 1, title: "About us", to: "/about" },
    { id: 2, title: "Contact us", to: "/contact" },
    { id: 3, title: "Jobs", to: "/home" },
    { id: 4, title: "Press Kit", to: "/press-kit" },
  ],
  tours: [
    { id: 1, title: "Mid Range", to: "/tour-search" },
    { id: 2, title: "Account", to: "/home" },
    { id: 3, title: "Account", to: "/home" },
    { id: 4, title: "Account", to: "/home" },
  ],
  services: [
    { id: 1, title: "Account", to: "/home" },
    { id: 2, title: "Account", to: "/home" },
    { id: 3, title: "Account", to: "/home" },
    { id: 4, title: "Account", to: "/home" },
  ],
  legal: [
    { id: 1, title: "Account", to: "/home" },
    { id: 2, title: "Account", to: "/home" },
    { id: 3, title: "Account", to: "/home" },
    { id: 4, title: "Account", to: "/home" },
  ],
};
