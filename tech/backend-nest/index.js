module.exports = {
    directories: [
        {
            name: 'es-lint',
            rule: require('src/linters/es-lint-backend'),
            path: 'src/linters/es-lint-backend',
        },
        {
            name: 'prettier',
            rule: require('src/tools/prettier'),
            path: 'src/tools/prettier'
        },
        {
            name: 'husky',
            rule: require('src/tools/husky'),
            path: 'src/tools/husky'
        },
        {
            name: 'lint-staged',
            rule: require('src/tools/lint-staged'),
            path: 'src/tools/lint-staged'
        }
    ]
}
