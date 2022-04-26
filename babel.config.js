module.exports = {
  presets: [
    ['@babel/preset-env', {
      targets: {
        node: 'current',
      },
    }],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-shorthand-properties',
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-function-name",
    "@babel/plugin-transform-parameters",
    "@babel/plugin-transform-template-literals",
    ['import', {
      "libraryName": "antd",
      style: 'css'
    }],
    ['@babel/plugin-transform-modules-umd', {
      exactGlobals: true,
      globals: {
        index: 'ReactLibrary'
      }
    }]
  ],
};