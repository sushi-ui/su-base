module.exports = {
  sourceMap: false,
  plugins: [
    require('postcss-import')(),
    require('cssnano')({
      preset: 'advanced',
      autoprefixer: {
        add: true
      }
    }),
    require('autoprefixer')()
  ]
}
