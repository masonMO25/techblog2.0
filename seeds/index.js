const sequelize = require('../config/connection');
const seedGallery = require('./galleryData');
const seedTech = require('./techData');
const seedComment = require('./commentData')
const seedUser = require('./userData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedGallery();

  await seedTech();

  await seedUser();

  await seedComment();

  process.exit(0);
};

seedAll();