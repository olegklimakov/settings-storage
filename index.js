const commonLibs = [
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

module.exports = {
    front: {
        directories: [
            {
                name: 'es-lint',
                path: 'src/linters/es-lint',
            },
            ...commonLibs
        ]
    },
    back: {
        directories: [
            {
                name: 'es-lint',
                path: 'src/linters/es-lint-backend',
            },
            ...commonLibs
        ]
    },
    cli: {
        directories: [
            {
                name: 'es-lint',
                path: 'src/linters/es-lint-cli',
            },
            ...commonLibs
        ]
    }
}
