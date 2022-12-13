const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: require('craco-plugin-scoped-css'),
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
}