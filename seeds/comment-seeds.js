const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "I didn't know about controllers.",
    post_id: 3,
    user_id: 1,
  },
  {
    comment_text: "Wow I am learning so much from this blog.",
    post_id: 1,
    user_id: 4,
  },
  {
    comment_text: "That is interesting.",
    post_id: 2,
    user_id: 2,
  },
  {
    user_id: 4,
    post_id: 3,
    comment_text: "Very useful tool!",
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "Nice tool!",
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;