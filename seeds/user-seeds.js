const { User } = require("../models");

const userdata = [
  {
    username: "Joe",
    email: "joe@gmail.com",
    password: "password1234",
  },
  {
    username: "Sven",
    email: "sven@gmail.com",
    password: "password1234",
  },
  {
    username: "Emily",
    email: "emily@gmail.com",
    password: "password1234",
  },
  {
    username: "Jackie",
    email: "jackie@gmail.com",
    password: "password1234",
  },
];
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;