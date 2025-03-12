module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
          'root': ['./src'],
          'alias': {
            '@asset': './asset',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './app/screens',
            '@storage': './src/storage',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};