const SaleProduct = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('salesProduct', {
        saleId: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          productId: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
          }
    }, {timestamps: false, tableName: 'salesProducts', underscore: true});

    // Verificar se é snakeCase ou camelCase
    SaleProduct.associate = (models) => {
      SaleProduct.belongsTo(models.Sale, {
        as: 'sale',
        through: SaleProduct,
        foreignKey: 'sale_id',
        otherKey: 'product_id',
      });

      SaleProduct.belongsTo(models.Product, {
        as: 'product',
        through: SaleProduct,
        foreignKey: 'product_id',
        otherKey: 'sale_id',
      })
    }
  
    return SaleProduct;
  };
  
  module.exports = SaleProduct;
