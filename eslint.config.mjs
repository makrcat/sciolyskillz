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
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // chill out
      "react/no-unescaped-entities": "warn",

      // stop attacking me
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // please
      "@typescript-eslint/no-require-imports": "warn",

      // allow `@ts-ignore`
      "@typescript-eslint/ban-ts-comment": ["error", {
        "ts-ignore": false, // allow ts-ignore
        "ts-expect-error": true
      }],

      // allow <img>
      "@next/next/no-img-element": "warn",

      // calm React warnings
      "react/jsx-key": "warn",
    },
  },
  
];

export default eslintConfig;
