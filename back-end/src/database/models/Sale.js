const Sale = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          userId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            foreignKey: true,
          },
          sellerId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            foreignKey: true,
          },
          totalPrice: {
            allowNull: false,
            type: DataTypes.INTEGER
          },
          deliveryAddress: {
            allowNull: false,
            type: DataTypes.STRING
          },
          deliveryNumber: {
            allowNull: false,
            type: DataTypes.STRING
          },
          saleDate: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: new Date(Date.now()),
          },
          status: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: 'Pendente',
          },
    }, {timestamps: false, tableName: 'sales', underscored: true });

    // Verificar as foreign keys em camel case
    Sale.associate = (models) => {
      Sale.belongsTo(models.User, {
        foreignKey: 'seller_id',
        as: 'seller',
      });
      Sale.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'customer',
      })
    }
  
    return Sale;
  };
  
  module.exports = Sale;