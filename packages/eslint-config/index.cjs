module.exports = {
  env: {
    node: true,
  },
  ignorePatterns: [
    "**/dist",
    "**/build",
    "**/node_modules",
    "**/.turbo",
    "**/.next",
    "**/logs",
    "**/storybook-static",
    "**/tmp",
  ],
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "jsx-a11y",
    "import",
    "prettier",
    "promise",
    "unicorn",
    "turbo",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:turbo/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
  rules: {
    "no-underscore-dangle": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "consistent-return": "off",
    "func-style": ["error", "expression"],
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/extensions": "off",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "@/**/**",
            group: "parent",
            position: "before",
          },
        ],
        alphabetize: { order: "asc" },
      },
    ],
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports" },
    ],
    "@typescript-eslint/prefer-literal-enum-member": "error",
    "@typescript-eslint/prefer-enum-initializers": "error",
    "react/self-closing-comp": ["error", { component: true, html: true }],
    "react/require-default-props": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-props-no-spreading": "off",
    "unicorn/prefer-top-level-await": "off", // TODO: enable later when supports
    "unicorn/no-useless-undefined": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        replacements: {
          props: {
            properties: false,
          },
          env: {
            environment: false,
          },
          envs: {
            environments: false,
          },
          src: {
            source: false,
          },
          ref: {
            reference: false,
          },
          args: {
            arguments: false,
          },
          el: {
            element: false,
          },
          params: {
            parameters: false,
          },
          ctx: {
            context: false,
          },
        },
      },
    ],
  },
  overrides: [
    {
      files: ["**/containers/*.tsx", "**/pages/*.tsx"],
      rules: {
        "func-names": "off",
        "import/prefer-default-export": "error",
        "import/no-default-export": "off",
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "unicorn/no-null": "off",
        "react/prop-types": "off",
      },
    },
    {
      files: ["*.js", "*.cjs"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
    {
      files: ["*.config.*"],
      rules: {
        "import/prefer-default-export": "off",
        "import/no-default-export": "off",
      },
    },
  ],
};
