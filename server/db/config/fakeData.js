const user = [
  {
    firstName: "Bayan",
    lastName: "Abd El Bary",
    email: "user@gmail.com",
    password: "$2b$12$Fm9rfKwCsXgq0WGu4SQ/B.y.bK5Wj4YauzM1Sj4Vk7UKQP2xwlB/q", // 12345678
  },
];

const books = [
  {
    author: "George Orwell",
    title: "1984",
    category: "Dystopian",
    description:
      "A dystopian novel exploring themes of totalitarianism, surveillance, and the power of language.",
    imageLink:
      "https://i.pinimg.com/564x/69/b7/65/69b765f08232a6237a1384bfe5f88ee2.jpg",
    starred: false,
    UserId: 1,
  },
  {
    author: "Stephen King",
    title: "The Shining",
    category: "Mystery",
    description:
      "A haunted hotel, a family in isolation, and supernatural forces that threaten their sanity.",
    imageLink:
      "https://i.pinimg.com/564x/69/fa/f6/69faf6227f1dce2aecc8b9cfa45a423d.jpg",
    starred: false,
    UserId: 1,
  },
  {
    author: "Agatha Christie",
    title: "Murder on the Orient Express",
    category: "Mystery",
    description:
      "Hercule Poirot investigates a murder on a luxurious train stranded by a snowstorm.",
    imageLink:
      "https://i.pinimg.com/564x/7d/69/09/7d69092b6e02a3c9268b4d591e49d20c.jpg",
    starred: true,
    UserId: 1,
  },

  {
    author: "Jane Austen",
    title: "Pride and Prejudice",
    category: "Classic",
    description: "A romantic novel about the Bennett family",
    imageLink:
      "https://i.pinimg.com/564x/c8/c4/ae/c8c4ae3d21b455ed2503006ce19406cc.jpg",
    UserId: 1,
  },
  {
    author: "J.R.R. Tolkien",
    title: "The Lord of the Rings",
    category: "Fantasy",
    description:
      "A quest to destroy a powerful ring and save Middle-earth from darkness.",
    imageLink:
      "https://i.pinimg.com/564x/9e/ca/ca/9ecaca0fa1b9ab7ec04ec6bd9dd420fe.jpg",
    starred: true,
    UserId: 1,
  },
  {
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    category: "Classic",
    description: "A story of the American Dream and excess in the Jazz Age",
    imageLink:
      "https://i.pinimg.com/564x/a7/ea/79/a7ea79067b7149982f3856f6d85a22d0.jpg",
    UserId: 1,
  },
  {
    author: "Michelle Obama",
    title: "Becoming",
    category: "Memoir",
    description:
      "A deeply personal memoir by the former First Lady of the United States.",
    imageLink:
      "https://i.pinimg.com/736x/8d/de/25/8dde2516f819ac980ecd89b6068b4752.jpg",
    starred: true,
    UserId: 1,
  },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    category: "Classic",
    description: "A powerful exploration of racial injustice and moral growth",
    imageLink:
      "https://i.pinimg.com/564x/82/a1/c6/82a1c65df82227d7df6b549a78dfdaa7.jpg",
    UserId: 1,
  },
];

module.exports = {
  user,
  books,
};
