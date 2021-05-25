module.exports = {
    packages: [
        'lint-staged', 'husky'
    ],
    directories: [
        {
            name: 'es-lint',
            path: 'src/linters/es-lint',
        },
        {
            name: 'prettier',
            path: 'src/tools/prettier'
        }
    ]
}
