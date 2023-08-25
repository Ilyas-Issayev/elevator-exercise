module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
    ['@babel/preset-modules', { loose: true }], // Enable ES modules
  ],
  plugins: [],
};
