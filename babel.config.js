module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
          'root': ['./'],
          'alias': {
            '@asset': './asset',
            '@components': './components',
            '@routes': './assets/routes',
            '@screens': './app/screens',
            '@storage': './assets/storage',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};