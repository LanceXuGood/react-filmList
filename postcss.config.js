/**
 * Created by Lance on 2017/3/27.
 */
module.exports = {
  plugins: [
      //require('precss'),
      require('autoprefixer')({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ],
        flexbox: 'no-2009',

      }),
  ]
};
