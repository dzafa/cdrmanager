
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Customer_Contacts', {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
    },
    contact_number: {
      type: DataTypes.INTEGER
    },
    fax: {
      type: DataTypes.INTEGER
    }
  });
};
