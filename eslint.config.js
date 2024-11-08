import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import eslintConfigPrettier from "eslint-config-prettier"


/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  pluginReact.configs.flat.recommended,
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    plugins: {
      'react': pluginReact,
    },
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      semi: ["error", "never"],
    },
    settings: {
      settings: {
        "import/resolver": {
          typescript: true,
        },
        react: {
          version: "detect",
        },
      },
    },
    ignores: ["node_modules/*", "dist/*"]
  },
]