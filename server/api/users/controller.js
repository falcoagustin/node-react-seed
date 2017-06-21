// To include db with sequelize just un-comment this line.
// let db = require('../db');

module.exports = {
  getUsers: function(req, res) {
    res.send('I am on /users !');
  },
};
