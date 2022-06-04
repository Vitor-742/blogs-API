const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
},
    name: DataTypes.STRING
  },
  {
    timestamps: false
  });

  /* Category.associate = (models) => {
    Category.belongsTo(models.PostCategories,
      {foreignKey: 'categoryId', as: 'postcategories'}
      )
  } */

  return Category;
};

module.exports = Category;
