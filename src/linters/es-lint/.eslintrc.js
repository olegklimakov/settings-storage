module.exports = {
    extends: ['airbnb-typescript/base', 'eslint-config-prettier'],
    rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'enum',
                format: ['UPPER_CASE']
            },
        ],
    }
};
