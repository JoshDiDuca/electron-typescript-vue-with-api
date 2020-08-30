module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-console": "warn",
    "prefer-const": "warn",
    "@typescript-eslint/type-annontation-spacing": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/explicit-function-return-type": "off"
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".ts"
      ]
    },
    "import/resolver": {
      "typescript": {}
    }
  },
  plugins: [
    "@typescript-eslint",
    "prettier"
  ],
  parserOptions: {
   parser: "@typescript-eslint/parser"
  }
};
