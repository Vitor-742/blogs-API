const BlogPost = require("./blogPost");

const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false
  });

  /* PostCategory.associate = (models) => {
    PostCategory.hasOne(models.Categories,
      {foreignKey: 'categoryId', as: 'category'}
      )

    PostCategory
  } */

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost,
      {
        as: 'blogposts',
        through: PostCategory,
        foreignKey: 'categoryId',
        otherKey: 'postId'
      })

      models.BlogPost.belongsToMany(models.Category,
        {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'postId',
          otherKey: 'categoryId'
        })
  }

  return PostCategory;
};

module.exports = PostCategory;
