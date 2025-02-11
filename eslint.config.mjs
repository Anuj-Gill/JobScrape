import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable all ESLint rules
      "no-console": "off",
      "no-unused-vars": "off",
      "react-hooks/exhaustive-deps": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "prefer-const": "off",
      "jsx-a11y/alt-text": "off",
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "off",
      "no-undef": "off",
      "no-empty": "off",
      "no-restricted-syntax": "off",
      "no-var": "off",
      "no-extra-semi": "off",
      "no-fallthrough": "off",
      "no-magic-numbers": "off",
      "no-shadow": "off",
      "no-multi-assign": "off",
      "no-new": "off",
      "import/no-anonymous-default-export": "off",
      "import/prefer-default-export": "off",
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "import/extensions": "off",
      "import/no-cycle": "off",
      "react/no-unescaped-entities": "off"

      // Add any other rules you want to disable here
    }
  }
];

export default eslintConfig;
