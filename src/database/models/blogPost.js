const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, 
      {foreignKey: 'userId', as: 'users'})// mudei o nome do arquivo para P maiusculo

    /* BlogPost.hasMany(models.User, {
      
    }) */
  }

  return BlogPost;
};

module.exports = BlogPost;
