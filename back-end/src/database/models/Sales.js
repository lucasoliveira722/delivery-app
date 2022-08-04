const Sales = (sequelize, DataTypes) => {
    const Sales = sequelize.define('Sales', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            }
          },
          seller_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
              model: 'users',
              key: 'id',
            }
          },
          total_price: {
            allowNull: false,
            type: DataTypes.INTEGER
          },
          delivery_address: {
            allowNull: false,
            type: DataTypes.STRING
          },
          delivery_number: {
            allowNull: false,
            type: DataTypes.STRING
          },
          sale_date: {
            allowNull: false,
            type: DataTypes.DATE,
          },
    }, {timestamps: false});
  
    return Sales;
  };
  
  module.exports = Sales;