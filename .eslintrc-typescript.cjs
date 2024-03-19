const unusedIgnorePattern = "^_";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    // prettier needs to come last
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/ban-ts-comment": [
      "warn",
      {
        "ts-expect-error": "allow-with-description",
        "ts-ignore": "allow-with-description",
        "ts-nocheck": "allow-with-description",
        "ts-check": false,
        minimumDescriptionLength: 10,
      },
    ],
    "@typescript-eslint/ban-types": [
      "warn",
      {
        extendDefaults: true,
        types: {
          object: false,
        },
      },
    ],
    "@typescript-eslint/consistent-indexed-object-style": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "@typescript-eslint/consistent-type-definitions": "warn",
    "@typescript-eslint/explicit-member-accessibility": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "@typescript-eslint/method-signature-style": "warn",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "import",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "variableLike",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "variableLike",
        modifiers: ["unused"],
        leadingUnderscore: "require",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
      {
        selector: "typeProperty",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeProperty",
        modifiers: ["requiresQuotes"],
        format: null,
        custom: {
          regex: "^aria-",
          match: true,
        },
      },
      {
        selector: "enumMember",
        format: ["StrictPascalCase"],
      },
      {
        selector: "objectLiteralProperty",
        format: null,
      },
    ],
    "@typescript-eslint/no-base-to-string": "warn",
    "@typescript-eslint/no-confusing-non-null-assertion": "error",
    "@typescript-eslint/no-confusing-void-expression": [
      "warn",
      {
        ignoreArrowShorthand: true,
      },
    ],
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "warn",
    "@typescript-eslint/promise-function-async": "warn",
    "@typescript-eslint/require-array-sort-compare": "warn",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/unified-signatures": "warn",
    "@typescript-eslint/default-param-last": "warn",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/no-dupe-class-members": "warn",
    "@typescript-eslint/no-invalid-this": "warn",
    "@typescript-eslint/no-loop-func": "error",
    "@typescript-eslint/no-loss-of-precision": "warn",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-redeclare": "warn",
    "@typescript-eslint/no-shadow": "off",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: unusedIgnorePattern,
        varsIgnorePattern: unusedIgnorePattern,
        destructuredArrayIgnorePattern: unusedIgnorePattern,
      },
    ],
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/require-await": "off",
  },
};
