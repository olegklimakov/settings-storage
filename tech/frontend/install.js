module.exports = {
    packages: [
        'lint-staged', 'husky'
    ],
    directories: [
        {
            name: 'es-lint',
            instruction: 'src/linters/es-lint/install.js',
        },
        {
            name: 'prettier',
            instruction: 'src/tools/prettier/install.js'
        }
    ]
}
