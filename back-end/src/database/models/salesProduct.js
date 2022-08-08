const SaleProduct = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('salesProduct', {
        sale_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          product_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
          }
    }, {timestamps: false, tableName: 'salesProducts'});
  
    return SaleProduct;
  };
  
  module.exports = SaleProduct;