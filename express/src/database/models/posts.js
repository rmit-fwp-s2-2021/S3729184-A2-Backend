module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "posts",
    {
      post_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      post_content: {
        type: DataTypes.STRING(600),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      parent_post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      dislikes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      // Don't add timestamp attribute
      timestamps: false,
    }
  );
