module.exports = {
  plugins: [
    require('cssnano')({
      preset: ['default', {
        colormin: false
      }]
    }),
  ],
};