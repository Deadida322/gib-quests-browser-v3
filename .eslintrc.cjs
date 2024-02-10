module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      'prettier',
      'plugin:vuetify/base'
    ],
    ignorePatterns: [".eslintrc.cjs", "vite.config.js"],
    env: {
        "vue/setup-compiler-macros": true
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ["error", { "endOfLine": "auto" }],
        'vue/require-default-prop': 'off',
        'vue/singleline-html-element-content-newline': 0,
        'vue/script-setup-uses-vars': 'error',
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        "vue/max-attributes-per-line": ["error", {
          "singleline": {
            "max": 1
          },      
          "multiline": {
            "max": 1
          }
        }],
        "arrow-body-style": ["error", "as-needed"],
        "vue/no-v-html": "off"
    },
  }