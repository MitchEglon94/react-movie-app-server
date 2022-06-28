const faker = require("faker");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

module.exports = function generateGuests() {
  // admin

  // Users
  const users = [
    {
      _id: 12,
      firstName: "Mitch",
      lastName: "Eglon",
      email: "mitch@mail.com",
      username: "MitchE",
      password: bcrypt.hashSync("password", salt),
      liked: [],
      likedMovieId: [],
      isAdmin: false,
    },
    {
      _id: 13,
      firstName: "Gemma",
      lastName: "Lusk",
      email: "gemma@mail.com",
      username: "GemmaL",
      password: bcrypt.hashSync("password", salt),
      liked: [],
      likedMovieId: [],
      isAdmin: false,
    },
    {
      _id: uuidv4(),
      firstName: "James",
      lastName: "Sherry",
      email: "james.sherry@thejump.tech",
      username: "admin",
      password: bcrypt.hashSync("admin", salt),
      isAdmin: true,
    },
  ];

  return { users };
};
