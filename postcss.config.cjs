const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano'),
    postcssPresetEnv({
      stage: 3,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
}
