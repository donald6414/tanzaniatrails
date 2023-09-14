export const filters = [
  {
    id: "Tour Levels",
    name: "Tour Levels",
    options: [
      { value: "Any", label: "Any", checked: true },
      { value: "Budget", label: "Budget", checked: false },
      { value: "Luxury", label: "Luxury", checked: false },
      { value: "Mid Range", label: "Mid Range", checked: false },
    ],
  },

  {
    id: "Tour Focus",
    name: "Tour Focus",
    options: [
      { value: "Any", label: "Any", checked: true },
      {
        value: "Game drive safari",
        label: "Game drive safari",
        checked: false,
      },
      {
        value: "Mountain climbing only",
        label: "Mountain climbing only",
        checked: false,
      },
    ],
  },

  {
    id: "Tour Activities",
    name: "Tour Activities",
    options: [
      { value: "Any", label: "Any", checked: true },
      {
        value: "Game drives",
        label: "Game drives",
        checked: false,
      },
      {
        value: "Walking safaris",
        label: "Walking safaris",
        checked: false,
      },
      {
        value: "Hike tour",
        label: "Hike tour",
        checked: false,
      },
      {
        value: "Machame route",
        label: "Machame route",
        checked: false,
      },
      {
        value: "Mount Kilimanjaro",
        label: "Mount Kilimanjaro",
        checked: false,
      },
      {
        value: "Tanzania",
        label: "Tanzania",
        checked: false,
      },
    ],
  },
];

export const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];
 export const subCategories = [
    { name: "Totes", href: "#" },
    { name: "Backpacks", href: "#" },
    { name: "Travel Bags", href: "#" },
    { name: "Hip Bags", href: "#" },
    { name: "Laptop Sleeves", href: "#" },
  ];
