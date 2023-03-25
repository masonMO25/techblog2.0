const User = require('./User');
const Gallery = require('./Gallery');
const Tech = require('./Tech');
const Comment = require('./Comment');

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Tech, {
  foreignKey: 'tech_id',
});

Tech.hasMany(Comment, {
  foreignKey: 'tech_id',
});

Gallery.hasMany(Tech, {
  foreignKey: 'gallery_id',
});

Tech.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});


module.exports = { User, Gallery, Tech, Comment };