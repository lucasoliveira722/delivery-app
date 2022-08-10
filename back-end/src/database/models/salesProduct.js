const SaleProduct = (sequelize, DataTypes) => {
    const SaleProduct = sequelize.define('SalesProduct', {
        saleId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          productId: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
          },
          quantity: {
            allowNull: false,
            type: DataTypes.INTEGER,
          }
    }, {timestamps: false, tableName: 'salesProducts', underscored: true});

    // Verificar se é snakeCase ou camelCase
    // SaleProduct.associate = (models) => {
    //   SaleProduct.belongsTo(models.Sale, {
    //     as: 'sale',
    //     through: SaleProduct,
    //     foreignKey: 'sale_id',
    //     otherKey: 'product_id',
    //   });

    //   SaleProduct.belongsTo(models.Product, {
    //     as: 'product',
    //     through: SaleProduct,
    //     foreignKey: 'product_id',
    //     otherKey: 'sale_id',
    //   })
    // }
  
    return SaleProduct;
  };
  
  module.exports = SaleProduct;
