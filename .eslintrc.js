const aliases = require('./.aliases.js');

module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true
    },
    extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
    env: {
        browser: true,
        node: true
    },
    rules: {
        'arrow-parens': ['off'],
        'compat/compat': 'error',
        'consistent-return': 'off',
        'comma-dangle': 'off',
        'flowtype/boolean-style': ['error', 'boolean'],
        'flowtype/define-flow-type': 'warn',
        'flowtype/delimiter-dangle': ['error', 'never'],
        'flowtype/generic-spacing': ['error', 'never'],
        'flowtype/no-primitive-constructor-types': 'error',
        'flowtype/no-weak-types': 'warn',
        'flowtype/object-type-delimiter': ['error', 'comma'],
        'flowtype/require-parameter-type': 'off',
        'flowtype/require-return-type': 'off',
        'flowtype/require-valid-file-annotation': 'off',
        'flowtype/semi': ['error', 'always'],
        'flowtype/space-after-type-colon': ['error', 'always'],
        'flowtype/space-before-generic-bracket': ['error', 'never'],
        'flowtype/space-before-type-colon': ['error', 'never'],
        'flowtype/union-intersection-spacing': ['error', 'always'],
        'flowtype/use-flow-type': 'error',
        'flowtype/valid-syntax': 'error',
        'generator-star-spacing': 'off',
        // 'import/no-unresolved': 'error', // off as not working for babel aliases
        'import/no-extraneous-dependencies': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        'jsx-a11y/anchor-is-valid': 'off',
        'no-console': 'off',
        'no-use-before-define': 'off',
        'no-multi-assign': 'off',
        'promise/param-names': 'error',
        'promise/always-return': 'error',
        'promise/catch-or-return': 'error',
        'promise/no-native': 'off',
        'react/sort-comp': [
            'error',
            {
                order: [
                    'type-annotations',
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render'
                ]
            }
        ],
        'react/jsx-no-bind': 'off',
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx'] }
        ],
        'react/prefer-stateless-function': 'off'
    },
    plugins: ['flowtype', 'import', 'promise', 'compat', 'react'],
    settings: {
        'import/resolver': {
            'babel-module': {
                alias: aliases
            }
        }
    }
};
