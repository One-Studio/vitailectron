module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/prettier",
        "@vue/prettier/@typescript-eslint",
    ],
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        "prettier/prettier": ["error",{
            "endOfLine": "auto"}
          ]
    //     // allow async-await
    //     'generator-star-spacing': 'off',
    //     // allow paren-less arrow functions
    //     'arrow-parens': 'off',
    //     'one-var': 'off',
    //
    //     'import/first': 'off',
    //     'import/named': 'error',
    //     'import/namespace': 'error',
    //     'import/default': 'error',
    //     'import/export': 'error',
    //     'import/extensions': 'off',
    //     'import/no-unresolved': 'off',
    //     'import/no-extraneous-dependencies': 'off',
    //     'prefer-promise-reject-errors': 'off',
    //
    //     // allow debugger during development only
    //     'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //     'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //
    //     indent: [
    //         'error',
    //         'tab',
    //         { SwitchCase: 1 }
    //     ],
    //     'linebreak-style': [
    //         'error',
    //         'unix'
    //     ],
    //     quotes: [
    //         'error',
    //         'single'
    //     ],
    //     semi: [
    //         'error',
    //         'always'
    //     ],
    //     'no-tabs': 'off',
    //     'prefer-const': 'off',
    //     'no-extend-native': 'off'
    }
};
