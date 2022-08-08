const SaleProduct = (sequelize, DataTypes) => {
<<<<<<< HEAD
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
=======
  const SaleProduct = sequelize.define(
    'salesProduct',
    {
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
      },
    },
    { timestamps: false, tableName: 'salesProducts' }
  );

  return SaleProduct;
};

module.exports = SaleProduct;
>>>>>>> 2e6cbe34c2a15cb6964cd9975c6325be667569a0
