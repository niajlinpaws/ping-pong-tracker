const { override, fixBabelImports, useEslintRc } = require('customize-cra');
const path = require('path');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    useEslintRc(path.resolve(__dirname, '.eslintrc.json'))
);