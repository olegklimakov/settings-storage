module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'migrations/*'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': 'error',
        'comma-dangle': ['error', 'only-multiline'],
        indent: 'off',
        'max-len': ['error', { code: 100, ignoreUrls: true }],
        'object-curly-newline': 'off',
        'operator-linebreak': 'off', // https://github.com/prettier/prettier/issues/3806
    },
};
