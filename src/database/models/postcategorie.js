const PostCategorie = (sequelize, DataTypes) => {
  const PostCategorie = sequelize.define("PostCategorie", {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false
  });

  return PostCategorie;
};

module.exports = PostCategorie;
