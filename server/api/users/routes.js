let controller = require('./controller');

module.exports = function(router) {
  router.route('/users').get(controller.getUsers);
};
