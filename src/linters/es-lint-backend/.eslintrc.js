module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
    ],
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
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error'
    },
};
