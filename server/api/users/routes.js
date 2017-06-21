module.exports = function(router) {
  let controller = require('./controller');
  router.route('/users').get(controller.getUsers);
};
