const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      tech_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'tech',
          key: 'id'
        }
      },
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        },
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;