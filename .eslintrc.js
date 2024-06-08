{
    "extends": [
      "airbnb",
      "airbnb/hooks",
      "airbnb-typescript"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "plugins": [
      "react",
      "react-hooks",
      "jsx-a11y",
      "@typescript-eslint"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
      ]
    },
    "settings": {
      "import/resolver": {
        "typescript": {}
      }
    }
  }
  