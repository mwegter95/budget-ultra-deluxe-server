const { Sequelize, Model, DataTypes } = require('sequelize');

exports.sequelize = new Sequelize('heroku_a574ae5dace3e6d', 'b54f28c51b7b1f', 'c40b497f', {
    dialect: "mysql",
    host: "us-cdbr-east-06.cleardb.net"
})

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch(error) {
        console.error("Unable to connect to the database:", error)
    }
}

// const User = sequelize.define("user", {
//     name: DataTypes.TEXT,
//     favoriteColor: {
//         type: DataTypes.TEXT,
//         defaultValue: "green",
//     },
//     age: DataTypes.INTEGER,
//     cash: DataTypes.INTEGER,
// });

(async () => {
    // await sequelize.sync({ force: false });
    // // Code here
    // // const user = await User.create({ name: "Big Bob" });
    // let users = await User.findAll({}).map(el => el.get({ plain: true }));
    // let foundUser = await User.findAll({where: {name: 'Big Bob'}}).map(el => el.get({ plain: true }));

    // // console.log(user.name);
    // console.log(users)
    // console.log(foundUser.get({plain: true }));
})();

// testConnection();