import pluginJs from '@eslint/js'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        page: 'readonly',
        console: 'readonly'
      }
    },
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      indent: ['error', 2],
      'no-unused-vars': 'error',
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'max-len': ['error', { code: 120, ignoreComments: true, ignoreStrings: true }],
      'prettier/prettier': 'error'
    }
  },
  prettierConfig,
  pluginJs.configs.recommended
]
