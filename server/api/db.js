const Sequelize = require('sequelize');
const path = require('path');

let env = process.env.NODE_ENV || 'development';
let config = require(path.join(__dirname, '../..', 'config/config.json'))[env];
let sequelize = new Sequelize(
    config.database, config.username, config.password, config);

// To test connection to db.
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;

