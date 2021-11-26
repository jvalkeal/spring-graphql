module.exports = {
  sourceMaps: true,
  presets: [
    require.resolve('@babel/preset-env'),
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-typescript'),
  ],
  plugins: [
    require.resolve('@babel/plugin-proposal-class-properties'),
    // require.resolve('@babel/plugin-transform-runtime')
    // [require.resolve('@babel/plugin-transform-runtime'), {"regenerator": true}]
  ],
};
