const { Tech } = require('../models');

const techdata = [
  {
    title: 'Hardware',
    author: 'Mason',
    gallery_id: 1,
    filename: 'hardware.jpg',
    description:
      'hardware discussion',
  },
  {
    title: 'Software',
    author: 'Mason',
    gallery_id: 2,
    filename: 'software.jpg',
    description: 'software discussion',
  },
  {
    title: 'Javascript',
    author: 'Mason',
    gallery_id: 3,
    filename: 'JavaScript.jpg',
    description: 'javascript discussion',
  },
  {
    title: 'C++',
    author: 'Mason',
    gallery_id: 4,
    filename: 'c++.jpg',
    description: 'c++ discussion',
  }
];

const seedTech = () => Tech.bulkCreate(techdata);

module.exports = seedTech;
