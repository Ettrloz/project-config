import type { Config } from 'prettier';

export const config: Config = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  arrowParens: 'avoid',
  trailingComma: 'none',
  overrides: [
    {
      files: ['**/*.{css,scss,sass,less,styl}'],
      options: {
        singleQuote: false
      }
    },
    {
      files: ['**/*.vue'],
      options: {
        vueIndentScriptAndStyle: true
      }
    }
  ]
};
