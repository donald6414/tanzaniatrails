const toursData = [
  {
    id: 1,
    title: "Serengeti Safari Adventure",
    description: "Experience the stunning wildlife of Serengeti National Park.",
    price: 1999.99,
    duration: 5, // in days
    image: "serengeti-safari.jpg",
    reviews: [
      { user: "John Doe", comment: "An unforgettable experience!" },
      { user: "Jane Smith", comment: "Absolutely breathtaking!" },
    ],
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
      // ... more days ...
    ],
  },
  {
    id: 2,
    title: "Mount Kilimanjaro Expedition",
    description: "Conquer the highest peak in Africa with our expert guides.",
    price: 2499.99,
    duration: 7, // in days
    image: "kilimanjaro-expedition.jpg",
    reviews: [
      {
        user: "Michael Johnson",
        comment: "A challenging and rewarding journey!",
      },
      { user: "Emily Davis", comment: "Achievement of a lifetime!" },
    ],
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
  },
  {
    id: 3,
    title: "Zanzibar Beach Retreat",
    description:
      "Relax on the pristine beaches of Zanzibar and enjoy turquoise waters.",
    price: 1499.99,
    duration: 4, // in days
    image: "zanzibar-beach.jpg",
    reviews: [
      { user: "Sophia Brown", comment: "Paradise found!" },
      { user: "William Lee", comment: "A perfect tropical getaway." },
    ],
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
      // ... more days ...
    ],
  },
  // Add more tours here...
];

export default toursData;
