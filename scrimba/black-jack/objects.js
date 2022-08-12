// let course = {
//   title: "Title",
//   lessons: 36,
//   creator: "Per Harald Borgen",
//   length: 63,
//   level: "Beginner",
//   isFree: true,
//   tags: ["CSS", "HTML"],
// };

/*
 * Create an object that represents an airbnb castle listing.
 * It should contain at least one boolean, one string, one number, and one array
 * Log out at least two of the keys using the dot notation
 */

let castle = {
  picture: true,
  location: "Galway",
  title: "Live like a King in my Castle",
  images: ["./img/castle1.png", "./img/castle2.png"],
  description: {
    guests: 4,
    bedrooms: 1,
    beds: 2,
    bath: true,
  },
  reviews: {
    stars: 4.95,
    comments: 1268,
  },
  price: 190,
};

console.log(castle.description);
console.log(castle.reviews.comments);
