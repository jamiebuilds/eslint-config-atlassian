'use strict';

module.exports = {
  "extends": ["airbnb", "prettier"],
  "parser": "babel-eslint",
  "rules": {
    "semi": "error"
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", {
      "devDependencies": [
        "**/__tests__/*.js",
        "**/*.test.js",
      ]
    }],
    "import/no-unresolved": ["off"],
    "import/prefer-default-export": "off",
    "no-restricted-syntax": "off",
    "no-use-before-define": "off",
    "arrow-body-style": "off",
    "spaced-comment": "off",
    "no-await-in-loop": "off",
    "no-mixed-operators": "off",
    "react/sort-comp": "off",
    "react/jsx-filename-extension": "off",
    "flowtype/require-valid-file-annotation": [2, "always", { "annotationStyle": "line" }],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/valid-expect": "error",
    // Rules below are all added to remove conflicts with prettier. DO NOT REMOVE
    "react/jsx-indent": "off",
    "arrow-parens": "off",
    "react/jsx-closing-bracket-location": "off",
    "react/jsx-curly-spacing": "off",
    "react/jsx-equals-spacing": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-indent-props": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-tag-spacing": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-closing-tag-location": "off"
  },
  "env": {
    "browser": true
  },
  "overrides": [
    {
      "files": ["**/__tests__/**/*.js", "**/*.test.js"],
      "env": {
        "jest": true
      }
    }
  ]
};
