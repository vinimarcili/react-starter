const path = require('path')

module.exports = {
  plugins: [
    {
      plugin: require('./craco-plugin-scoped-css'),
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
}
