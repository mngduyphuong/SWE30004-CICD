// vue.config.js file to be place in the root of your repository

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/SWE30004-CICD/'
      : '/',
      css: {
        extract: false
        }
  }
  