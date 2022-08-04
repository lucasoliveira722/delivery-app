const SalesProducts = (sequelize, DataTypes) => {
    const SalesProducts = sequelize.define('SalesProducts', {
        sale_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'sales',
              key: 'id',
            },
          },
          product_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'products',
              key: 'id',
            }
          },
          quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
          }
    }, {timestamps: false});
  
    return SalesProducts;
  };
  
  module.exports = SalesProducts;