module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/strongly-recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // custom rules
  rules: {
    'curly': [2, 'multi-line'],
    'no-debugger': 0,
    'no-console': 1,
    'no-unused-vars': 1,
    'object-curly-spacing': [2, 'always'],
    'quotes': [2, 'single'],
    'semi': [1, 'never', {
      'beforeStatementContinuationChars': 'never'
    }],
    'vue/attributes-order': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/max-attributes-per-line': 0,
    'vue/singleline-html-element-content-newline': 0
  }
}
