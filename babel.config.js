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
            '@routes': './routes',
            '@screens': './app/screens',
            '@storage': './storage',
            '@utils': './utils',
          },
        },
      ],
    ],
  };
};