const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 4,
        comment_content: "Wow, never would've thought!"
    },
    {
        user_id: 3,
        post_id: 1,
        comment_content: "Hope it lasts!"
    },
    {
        user_id: 1,
        post_id: 5,
        comment_content: "Knew this girl would make it big!"
    },
    {
        user_id: 4,
        post_id: 2,
        comment_content: "This app is great, I use it all the time"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_content: "No! I love Amazon!"
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;