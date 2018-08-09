
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Sap', {
    service_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    external_code: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    service_type_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    billing_frequency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['jednokratno', 'sat', 'dan', 'mjesec']]
      }
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    }
  });
};
