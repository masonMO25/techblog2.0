const { Post } = require("../models");

const postdata = [
  {
    title: "A little pick-me-up for a bad day",
    post_url: "https://www.youtube.com/watch?v=imhUxgC908o&list=LL&index=7",
    user_id: 3,
  },
  {
    title: "Check this track out",
    post_url: "https://www.youtube.com/watch?v=QYhW28rtnok&list=LL&index=12",
    user_id: 4,
  },
  {
    title: "MVC post",
    post_url: "https://www.youtube.com/watch?v=DUg2SWWK18I",
    user_id: 3,
  },
  {
    title: "music for the soul",
    post_url: "https://www.youtube.com/watch?v=mVi78cWhFmE&list=LL&index=13",
    user_id: 1,
  },
  {
    title: "nice little video",
    post_url:
      "https://www.youtube.com/watch?v=mrHNSanmqQ4&list=LL&index=2&t=2s",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;