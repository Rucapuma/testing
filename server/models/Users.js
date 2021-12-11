module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phonenumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Notification: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Relationship: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Users.associate = (models) => {
  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade",
  //   });
  // };
  return Users;
};
