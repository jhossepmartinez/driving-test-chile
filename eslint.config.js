import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import stylisticJs from '@stylistic/eslint-plugin-js'
import stylisticJsx from '@stylistic/eslint-plugin-jsx'

export default tseslint.config(
    {
        ignores: ['dist'] 
    },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx,js}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@stylistic/js': stylisticJs,
            '@stylistic/jsx': stylisticJsx
        },
        rules: {
            // "function-paren-newline": ["error", {
            //     "minItems": 1 
            // }],
            "@stylistic/js/indent": ["error", 4],
            "@stylistic/jsx/jsx-one-expression-per-line": [1, {
                "allow": "literal" 
            }],
            "@stylistic/js/comma-spacing": ["error", {
                "before": false,
                "after": true 
            }],
            // "@stylistic/jsx/jsx-indent-props": [2, "tab"],
            "@stylistic/jsx/jsx-first-prop-new-line": [1, "multiprop"],
            "@stylistic/jsx/jsx-max-props-per-line": [1],
            "@stylistic/js/object-curly-spacing": ["error", "always"],
            "@stylistic/js/brace-style": ["error", "1tbs"],
            "@stylistic/js/function-paren-newline": [2, "multiline"],
            "@stylistic/js/object-curly-newline": ["error", {
                "ObjectExpression": "always",
                "ObjectPattern": {
                    "multiline": true 
                },
                "ImportDeclaration": "always",
                "ExportDeclaration": {
                    "multiline": true,
                    "minProperties": 1 
                }
            }],
            "@stylistic/js/object-property-newline": ["error", {
                "allowAllPropertiesOnSameLine": false
            }],
            // "@stylistic/jsx/jsx-first-prop-new-line": "always",
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true 
                },
            ],
            
        },
    },
)

