export const toursData = [
  {
    id: 1,
    code: "TZA-002", // Tour code number
    title: "Tanzanian Highlights: From Kilimanjaro to Zanzibar",
    description:
      "Discover Tanzania's natural wonders, from the mighty Kilimanjaro to the sun-kissed beaches of Zanzibar.",
    types: ["Mountain Trekking", "Beach Vacation", "Wildlife Safari"],
    duration: 14,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Land in Arusha, the gateway to Tanzania's safari destinations. Overnight in a city hotel.",
        image: "arusha-arrival.jpg",
        accommodation: "Arusha Luxury Hotel",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Kilimanjaro Basecamp",
        description:
          "Transfer to Kilimanjaro basecamp and prepare for the trek.",
        image: "kilimanjaro-basecamp.jpg",
        accommodation: "Mountain Basecamp Tents",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3 - 7,
        title: "Kilimanjaro Ascent & Descent",
        description:
          "Ascend the mountain over five days, passing through various ecological zones, and finally summiting the Roof of Africa.",
        image: "kilimanjaro-summit.jpg",
        accommodation: "Mountain Huts/Camps",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Safari in Tarangire National Park",
        description:
          "After descending Kilimanjaro, rest and then embark on a safari adventure in Tarangire, famous for its elephants.",
        image: "tarangire-elephants.jpg",
        accommodation: "Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 9,
        title: "Ngorongoro Crater Safari",
        description:
          "Explore the unique ecosystem of the Ngorongoro Crater, a UNESCO World Heritage site.",
        image: "ngorongoro-crater.jpg",
        accommodation: "Lodge on the Crater Rim",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 10,
        title: "Fly to Zanzibar",
        description: "Catch a flight to the island paradise of Zanzibar.",
        image: "zanzibar-beach.jpg",
        accommodation: "Beach Resort",
        meals: "Breakfast, Dinner",
      },
      {
        day: 11 - 13,
        title: "Relax in Zanzibar",
        description:
          "Enjoy the beaches, explore Stone Town, and take part in water sports or cultural activities.",
        image: "zanzibar-stone-town.jpg",
        accommodation: "Beach Resort",
        meals: "Breakfast, Dinner",
      },
      {
        day: 14,
        title: "Departure from Zanzibar",
        description:
          "Last-minute shopping and relaxation before the flight home.",
        image: "zanzibar-departure.jpg",
        accommodation: "N/A",
        meals: "Breakfast",
      },
    ],
    seasons: [
      {
        name: "High Season",
        months: ["July", "August", "September"],
        price: 4499.99,
      },
      {
        name: "Low Season",
        months: ["April", "May", "June"],
        price: 3999.99,
      },
    ],
    image: "tanzania-highlights.jpg",
    reviews: [
      {
        user: "Isabella Garcia",
        rating: 5,
        comment:
          "The best two weeks of my life! Kilimanjaro and Zanzibar are simply amazing.",
      },
      {
        user: "Lucas Chen",
        rating: 4.9,
        comment:
          "Unforgettable experience, from the mountains to the beach. Highly recommended!",
      },
    ],
  },

  {
    id: 2,
    code: "TZA-003", // Tour code number
    title: "Heartbeat of Tanzania: Culture & Wildlife Expedition",
    description:
      "Immerse yourself in the rich cultural tapestry and majestic wildlife of Tanzania. From local tribes to the vast savannahs, this tour has it all.",
    types: ["Cultural Exploration", "Wildlife Safari"],
    duration: 10,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dar es Salaam",
        description:
          "Begin your journey in Tanzania's bustling port city. Explore the local markets and waterfront.",
        image: "dar-es-salaam-cityscape.jpg",
        accommodation: "Dar es Salaam City Hotel",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Journey to Morogoro & Maasai Village Visit",
        description:
          "Travel to Morogoro and engage with the Maasai community, understanding their traditions and daily life.",
        image: "maasai-village.jpg",
        accommodation: "Morogoro Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Udzungwa Mountains Hike",
        description:
          "Explore the rainforests of Udzungwa Mountains National Park, home to diverse flora and fauna.",
        image: "udzungwa-waterfall.jpg",
        accommodation: "Mountain Camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Journey to Mikumi National Park",
        description: "Proceed to Mikumi for a memorable safari experience.",
        image: "mikumi-savannah.jpg",
        accommodation: "Mikumi Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5 - 6,
        title: "Mikumi Wildlife Safari",
        description:
          "Spend two days in Mikumi, spotting lions, zebras, elephants, and more.",
        image: "mikumi-lion.jpg",
        accommodation: "Mikumi Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Visit to a Chaga Village in Kilimanjaro Region",
        description:
          "Discover the ways of the Chaga people, learn about their history, and sample traditional dishes.",
        image: "chaga-huts.jpg",
        accommodation: "Local Guesthouse",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Coffee Tour & Local Crafts",
        description:
          "Learn how coffee is cultivated and processed in the region. Also, visit local artisans.",
        image: "coffee-beans.jpg",
        accommodation: "Local Guesthouse",
        meals: "Breakfast, Lunch",
      },
      {
        day: 9,
        title: "Return to Dar es Salaam & Farewell Dinner",
        description:
          "Travel back to Dar es Salaam. Enjoy a farewell dinner with Tanzanian music and dance.",
        image: "tanzanian-dance.jpg",
        accommodation: "Dar es Salaam City Hotel",
        meals: "Breakfast, Dinner",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "Last-minute shopping or relaxation before your flight home.",
        image: "dar-es-salaam-airport.jpg",
        accommodation: "N/A",
        meals: "Breakfast",
      },
    ],
    seasons: [
      {
        name: "High Season",
        months: ["June", "July", "August", "September"],
        price: 3199.99,
      },
      {
        name: "Low Season",
        months: ["March", "April", "May", "November"],
        price: 2799.99,
      },
    ],
    image: "tanzania-cultural-highlights.jpg",
    reviews: [
      {
        user: "Madison Nguyen",
        rating: 4.9,
        comment:
          "A true cultural immersion! The tribes and wildlife were the highlight of my trip.",
      },
      {
        user: "Ethan Martinez",
        rating: 4.8,
        comment:
          "Tanzania is so much more than just wildlife. This tour showed us its soul.",
      },
    ],
  },
  {
    id: 3,
    code: "TZA-004", // Tour code number
    title: "Ngorongoro & Tarangire: Wildlife Odyssey",
    description:
      "Witness the magic of Tanzania's wildlife in the world-famous Ngorongoro Crater and the diverse landscapes of Tarangire National Park.",
    types: ["Wildlife Safari", "Nature Exploration"],
    duration: 5,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Journey to Ngorongoro",
        description:
          "Arrive in Arusha and travel to the Ngorongoro Conservation Area. Enjoy evening views of the crater.",
        image: "ngorongoro-view.jpg",
        accommodation: "Ngorongoro Safari Lodge",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Full-day Ngorongoro Crater Safari",
        description:
          "Descend into the crater for a full-day game drive, spotting lions, rhinos, elephants, and more.",
        image: "ngorongoro-wildlife.jpg",
        accommodation: "Ngorongoro Safari Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "Travel to Tarangire National Park",
        description:
          "Journey to Tarangire, known for its vast elephant herds and majestic baobab trees.",
        image: "tarangire-landscape.jpg",
        accommodation: "Tarangire Treetops Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "Full-day Tarangire Safari",
        description:
          "Explore the diverse landscapes of Tarangire, from its swamps to the Silale Plains, and encounter a plethora of wildlife.",
        image: "tarangire-elephants.jpg",
        accommodation: "Tarangire Treetops Lodge",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "Departure from Arusha",
        description:
          "After a morning game drive, travel back to Arusha for your onward journey or flight.",
        image: "arusha-airport.jpg",
        accommodation: "N/A",
        meals: "Breakfast, Lunch",
      },
    ],
    seasons: [
      {
        name: "High Season",
        months: ["June", "July", "August", "September"],
        price: 2399.99,
      },
      {
        name: "Low Season",
        months: ["April", "May", "November"],
        price: 2099.99,
      },
    ],
    image: "ngorongoro-tarangire-safari.jpg",
    reviews: [
      {
        user: "Oliver Kim",
        rating: 5.0,
        comment:
          "The sights and sounds of the safari were beyond my wildest dreams. A must-visit!",
      },
      {
        user: "Ava Lopez",
        rating: 4.9,
        comment:
          "Seeing the wildlife up close in their natural habitat was truly a once-in-a-lifetime experience.",
      },
    ],
  },
  {
    id: 4,
    code: "TZA-005", // Tour code number
    title: "Lemosho Route: Kilimanjaro's Majestic Ascent",
    description:
      "Embark on a remarkable journey through the Lemosho route, witnessing Kilimanjaro's diverse ecosystems and summiting the Roof of Africa.",
    types: ["Mountain Trekking", "Adventure"],
    duration: 8,
    itinerary: [
      {
        day: 1,
        title: "Arrival & Journey to Lemosho",
        description:
          "Begin from Arusha and travel to the Lemosho gate. Start the trek through the rainforest to Mti Mkubwa Camp.",
        image: "lemosho-forest.jpg",
        accommodation: "Mti Mkubwa Camp",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "To Shira Camp 1",
        description: "Trek across the Shira plateau, with views of Kibo peak.",
        image: "shira-plateau.jpg",
        accommodation: "Shira Camp 1",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 3,
        title: "To Shira Camp 2",
        description:
          "Acclimatization day around the Shira plateau. Explore the unique flora and landscapes.",
        image: "shira-camp2.jpg",
        accommodation: "Shira Camp 2",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 4,
        title: "To Barranco Camp",
        description:
          "Ascend to Lava Tower for acclimatization and then descend into the scenic Barranco Valley.",
        image: "barranco-valley.jpg",
        accommodation: "Barranco Camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 5,
        title: "To Karanga Camp",
        description:
          "Navigate the Barranco Wall and continue to the Karanga Valley.",
        image: "karanga-valley.jpg",
        accommodation: "Karanga Camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 6,
        title: "To Barafu Camp",
        description:
          "Trek to Barafu Camp. Rest and prepare for the midnight summit attempt.",
        image: "barafu-camp.jpg",
        accommodation: "Barafu Camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 7,
        title: "Summit Day & To Mweka Camp",
        description:
          "Begin the midnight ascent to Uhuru Peak. After witnessing the sunrise at the summit, descend to Mweka Camp.",
        image: "uhuru-peak.jpg",
        accommodation: "Mweka Camp",
        meals: "Breakfast, Lunch, Dinner",
      },
      {
        day: 8,
        title: "Descent & Departure from Arusha",
        description:
          "Complete the descent to Mweka Gate. Return to Arusha and celebrate the successful climb.",
        image: "mweka-gate.jpg",
        accommodation: "N/A",
        meals: "Breakfast, Lunch",
      },
    ],
    seasons: [
      {
        name: "High Season",
        months: ["January", "February", "July", "August", "September"],
        price: 3299.99,
      },
      {
        name: "Low Season",
        months: ["March", "April", "May", "October", "November"],
        price: 2999.99,
      },
    ],
    image: "lemosho-kilimanjaro.jpg",
    reviews: [
      {
        user: "Isabella Martinez",
        rating: 5.0,
        comment:
          "The Lemosho route was challenging but the views and experience were worth every step.",
      },
      {
        user: "Liam Smith",
        rating: 4.8,
        comment:
          "Summiting Kilimanjaro has been a dream come true. The route was picturesque and our guides were fantastic.",
      },
    ],
  },
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
