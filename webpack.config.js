const path = require('path')

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@variables': path.resolve(__dirname, '../src/styles/variables.scss'),
  }
  config.module.rules.push({
    test: /\.s[ac]ss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  })
  config.module.rules.push({
    test: /\.css$/,
    loader: 'style-loader!css-loader',
    include: __dirname,
  })
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
