const commonLibs = [
    {
        name: 'prettier',
        path: 'src/tools/prettier',
    },
    {
        name: 'husky',
        path: 'src/tools/husky',
    },
    {
        name: 'lint-staged',
        path: 'src/tools/lint-staged',
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
