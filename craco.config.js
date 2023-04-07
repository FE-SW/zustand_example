const CracoAlias = require('craco-alias');

module.exports = {
  reactScriptsVersion: 'react-scripts',
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.extend.json',
      },
    },
  ],
  babel: {
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          displayName: process.env.NODE_ENV === 'production' ? false : true,
        },
      ],
    ],
  },
  webpack: {
    configure: {
      resolve: {
        fallback: {
          buffer: require.resolve('buffer/'),
        },
      },
    },
  },
};
