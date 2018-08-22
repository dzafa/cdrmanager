
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Customers', {
    contract_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    cdr_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    request_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    contact_number: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    postcode: {
      type: DataTypes.INTEGER
    },
    logo: {
      type: DataTypes.STRING
    },
    services_type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bht_support_contact: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
