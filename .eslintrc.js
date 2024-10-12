module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'react-app',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier', // Make sure this is always the last configuration in the extends array.
    ],
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        // Customize your rules
        'prettier/prettier': 'error',
        // Add more rules as needed
    },
};
