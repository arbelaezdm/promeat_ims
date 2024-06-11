module.exports = (sequelize, dataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      type: dataTypes.INTEGER(10),
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: dataTypes.STRING(100),
    },
    lastName: {
      type: dataTypes.STRING(100),
    },
    email: {
      type: dataTypes.STRING(100),
    },
    password: {
      type: dataTypes.STRING(100),
    },
    confirmPassword: {
      type: dataTypes.STRING(100),
    },
    userCategory: {
      type: dataTypes.STRING(100),
    },
  });
  return Users;
};
