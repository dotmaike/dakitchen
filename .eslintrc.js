module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "import", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "no-param-reassign": [2, { props: false }],
    "no-console": "off",
    "react/jsx-props-no-spreading": 0,
    "react/static-property-placement": 0,
    "react/sort-comp": [1, {
      order: [
        'static-methods',
        'lifecycle',
        '/^on.+$/',
        'everything-else',
        'render'
      ]
    }],
  }
};
