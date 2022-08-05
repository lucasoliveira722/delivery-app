const SaleProduct = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('salesProduct', {
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
    }, {timestamps: false, tableName: 'salesProducts'});
  
    return SaleProduct;
  };
  
  module.exports = SaleProduct;