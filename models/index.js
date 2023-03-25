const User = require('./User');
const Gallery = require('./Gallery');
const Tech = require('./Book');
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

Book.hasMany(Comment, {
  foreignKey: 'tech_id',
});

Gallery.hasMany(Book, {
  foreignKey: 'gallery_id',
});

Book.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});


module.exports = { User, Gallery, Tech, Comment };