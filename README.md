# NodeJS and ReactJS
The idea behind this is to create a seed for any project with what I personally think is the best architecture for client and server side [NodeJS] apps using [ReactJS].

I have read tons of articles about different architectures and have gathered a combination of ideas in a simple, modular and scalable architecture. Enjoy !

Clone it and run :
```sh
yarn install
```
To start the server:
```sh
npm start
```
To run webpack for bundling process:
```sh
npm run bundle
```

You can check on `package.json` under `scripts` to see what this commands do.

# Usage

This is free to use as you wish, but I'll explain how to extend its behaviour.
The `server/api/routes.js` will search for all folders under `server/api/` and find all route files and add them to our router, powered by [ExpressJS].

Routes from every folder in our API have the ability to recieve a router as parameter and map the desired behaviour from our controller to the route and method we are defining that behaviour. Example to add login behaviour in `server/api/users`:

```javascript
module.exports = {
  getUsers: function(req, res) {
    res.send('I am on /users !');
  },
  //loginUsers: function(req, res) { /* Login logic. */ },
};
```
To add new behaviour just add another field in the `Object` exported and then include it in the following file with the HTTP Method you wish to map it to:

```javascript
// users/routes.js
module.exports = function(router) {
  let controller = require('./controller');
  router.route('/users').get(controller.getUsers);
  //router.route('/login').post(controller.loginUsers);
};
```

# DB
Used [Sequelize] as ORM for PostgresSQL this time, but can be changed as wished. The config file under `config/config.json` has the configuration for the database connection given any of the possible environments. To use it, just import the `server/db.js` file:

```javascript
// Supose we are under server/api/<folder>
let db = require('./../db.js');
```

# UI

Under `client/components` we have the `<file>.jsx` ReactJS components which will be bundled by webpack. Styles are on `client/styles` folder, to add new style sheets you will need to import them on any of the `.jsx`.

In this config, webpack will bundle styles in a separate file which we import in `server/static/index.html`, but that is optional as webpack is purely configurable.

# Extras

An extra that I added because I really think having a structured and formatted code is the base to avoid many disasters. My choices where [Eslint] for `.js` and `.jsx` files and [scss-lint] for styles (you may have to install it globally as a gem).

I really like this to be checked every time we are committing, so I created a `check.sh` bash file.
To execute this file as a pre-commit hook just do

```sh
chmod +x check.sh
```
This will convert this file into an executable file.

Then write the following lines in `.git/hooks/pre-commit` to execute `check.sh` before committing:

```sh
#!/bin/sh
base_directory=$(git rev-parse --show-toplevel)
eval "${base_directory}/check.sh pre-commit --verbose HEAD"
```

Thats all, made with :heart:!


   [ReactJS]: <https://facebook.github.io/react/>
   [NodeJS]: <http://nodejs.org>
   [ExpressJS]: <http://expressjs.com>
   [Sequelize]: <http://docs.sequelizejs.com>
   [Eslint]: <http://eslint.org/>
   [scss-lint]: <https://github.com/brigade/scss-lint>
