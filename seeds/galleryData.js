const { Gallery } = require('../models');

const gallerydata = [
  {
    name: 'Hardware',
    starting_date: 'Febuary 1, 2023',
    ending_date: 'Febuary 28, 2023',
  },
  {
    name: 'Software',
    starting_date: 'March 1, 2023',
    ending_date: 'March 31, 2023',
  },
  {
    name: 'Javascript',
    starting_date: 'April 1,2023',
    ending_date: 'April 30, 2023',
  },
  {
    name: 'C++',
    starting_date: 'May 1, 2023',
    ending_date: 'May 31, 2023',
  },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;