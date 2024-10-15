module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'react-app',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        '@typescript-eslint/semi': ['error', 'always'],
    },
};
