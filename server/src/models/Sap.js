
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Sap', {
    external_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    service_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    service_type_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    billing_frequency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  });
};
