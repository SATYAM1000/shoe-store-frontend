export const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

export const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};


