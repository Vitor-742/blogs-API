const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false
  });

  return BlogPost;
};

module.exports = BlogPost;
