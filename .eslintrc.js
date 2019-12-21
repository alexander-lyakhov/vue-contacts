module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-shared-component-data': 'warning',
    'vue/no-unused-components': 'warning',
    'vue/no-unused-vars': 'warning',
    'vue/no-use-v-if-with-v-for': 'warning',
    'vue/require-prop-type-constructor': 'warning',
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
};
