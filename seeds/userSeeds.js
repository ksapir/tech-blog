const { User } = require('../models');

const userData = [
    {
        username: "john_smith",
        email: "jsmith@gmail.com",
        password: "password1"
    },
    {
        username: "jane_doe",
        email: "jdoe@gmail.com",
        password: "password2"
    },
    {
        username: "jess_james",
        email: "jjames@gmail.com",
        password: "password3"
    },
    {
        username: "kelly_white",
        email: "kwhite@gmail.com",
        password: "password4"
    },
    {
        username: "david_d",
        email: "dd@gmail.com",
        password: "password5"
    },
];

const seedUsers = () = User.bulkCreate(userData);

module.exports = seedUsers;