module.exports = {
    front: {
        rules: [
            {
                name: 'es-lint',
                rule: require('src/linters/es-lint'),
            },
            {
                name: 'prettier',
                rule: require('src/tools/prettier'),
            },
            {
                name: 'husky',
                rule: require('src/tools/husky'),
            },
            {
                name: 'lint-staged',
                rule: require('src/tools/lint-staged'),
            }
        ]
    },
    back: {

    }
}
