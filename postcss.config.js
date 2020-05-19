var presetEnv = require('postcss-preset-env')

module.exports = {
  plugins: [
    presetEnv({
      autoprefixer: true,
      browsers: 'last 2 versions',
      stage: 3
    })
  ]
}
