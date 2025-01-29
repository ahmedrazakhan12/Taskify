module.exports = (sequelize, DataTypes) => {
    const home = sequelize.define('home', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
       
    });

    return home;
};
