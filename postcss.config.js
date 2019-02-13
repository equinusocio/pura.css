module.exports = (ctx) => ({
  plugins: {
    'stylelint': {},
    'postcss-easy-import': {
      prefix: '_',
      extensions: '.pcss',
      plugins: [require('stylelint')()]
    },
    'postcss-advanced-variables': {
      'disable': '@mixin, @include, @content, @each, @else, @if, @for'
    },
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: {
        grid: true
      }
    },
    'cssnano': { preset: 'advanced' },
    'postcss-reporter': { clearReportedMessages: true }
  }
})
