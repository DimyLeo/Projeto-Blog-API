module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, primaryKey: true },
    categoryId: { type: DataTypes.INTEGER, primaryKey: true },
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "categories",
      through: PostCategory,
      foreignKey: "categoryId",
      otherKey: "postId",
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: "posts",
      through: PostCategory,
      foreignKey: "postId",
      otherKey: "categoryId",
    });
  };

  return PostCategory;
};