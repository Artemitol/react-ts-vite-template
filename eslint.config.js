/* eslint-disable import/no-default-export */
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import importPlugin from "eslint-plugin-import"
import eslintConfigPrettier from "eslint-config-prettier"
import eslintPluginPrettier from "eslint-plugin-prettier"

/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    importPlugin.flatConfigs.recommended,
    eslintConfigPrettier,
    pluginReact.configs.flat.recommended,
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    {
        plugins: {
            react: pluginReact,
            prettier: eslintPluginPrettier,
        },
        rules: {
            "react/jsx-uses-react": "off",
            "react/react-in-jsx-scope": "off",
            semi: ["error", "never"],
            "import/no-default-export": "error",
            "import/no-unresolved": "off",
            "prettier/prettier": "error",
        },
        settings: {
            settings: {
                "import/resolver": {
                    typescript: true,
                    node: true,
                },
                react: {
                    version: "detect",
                },
            },
        },
        ignores: ["node_modules/*", "dist/*"],
    },
]
