const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        tech_id: 4,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        tech_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        tech_id: 2,
        comment_text: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        tech_id: 3,
        comment_text: "We just reached a million subscribers! Fantastic!"
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;