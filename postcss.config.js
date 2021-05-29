module.exports = () => ({
  plugins: {
    'stylelint': {},
    'postcss-easy-import': {
      prefix: '_',
      extensions: '.pcss',
      plugins: [require('stylelint')()]
    },
    'postcss-preset-env': {
      stage: 0,
      importFrom: [
        'lib/env-variables.json'
      ]
    },
    'cssnano': { preset: 'advanced' },
    'postcss-reporter': { clearReportedMessages: true }
  }
})
