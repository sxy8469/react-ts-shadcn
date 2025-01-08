import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            "@typescript-eslint/interface-name-prefix": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/explicit-module-boundary-types": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-var-requires": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "@typescript-eslint/no-this-alias": "off",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/consistent-type-assertions": "warn",
            "@typescript-eslint/no-array-constructor": "warn",
            "@typescript-eslint/no-redeclare": "warn",
            "@typescript-eslint/no-use-before-define": [
                "warn",
                {
                    functions: false,
                    classes: false,
                    variables: false,
                    typedefs: false,
                },
            ],
            "@typescript-eslint/no-unused-expressions": [
                "error",
                {
                    allowShortCircuit: true,
                    allowTernary: true,
                    allowTaggedTemplates: true,
                },
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    args: "none",
                    ignoreRestSiblings: true,
                },
            ],
            "@typescript-eslint/no-useless-constructor": "warn",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-empty-object-type": "warn",
            "@typescript-eslint/unused-imports/no-unused-imports": "off",

            "@typescript-eslint/quotes": "off",
            "linebreak-style": "off",
            "default-case": "off",
            "no-dupe-class-members": "off",
            "no-undef": "off",
            "no-extra-boolean-cast": "off",
            "no-array-constructor": "off",
            "no-redeclare": "off",
            "no-use-before-define": "off",
            "no-unused-expressions": "off",
            "no-unused-vars": "warn",
            "no-useless-constructor": "off",

            "max-len": [
                "warn",
                {
                    code: 140,
                },
            ],
        },
    },
)
