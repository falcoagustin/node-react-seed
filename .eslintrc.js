module.exports = {
    "extends": "google",
    "plugins": [
      "react"
    ],
    "parser": "babel-eslint",
    "rules": {
      "react/jsx-uses-vars": 1,
      "strict": 0,
      "require-jsdoc": 0,
      "new-cap": 0,
    },
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      }
    },
};
