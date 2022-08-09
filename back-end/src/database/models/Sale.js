const Sale = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
          user_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
          },
          seller_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
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
            defaultValue: new Date(Date.now()),
          },
          status: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: 'Pendente',
          },
    }, {timestamps: false, tableName: 'sales'});
  
    return Sale;
  };
  
  module.exports = Sale;