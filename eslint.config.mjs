import{dirname}from"path";
import{fileURLToPath}from"url";
import{FlatCompat}from"@eslint/eslintrc";

const__filename=fileURLToPath(import.meta.url);
const__dirname=dirname(__filename);

constcompat=newFlatCompat({
baseDirectory:__dirname,
});

consteslintConfig=[
...compat.extends("next/core-web-vitals","next/typescript"),
{
ignores:[
"node_modules/**",
".next/**",
"out/**",
"build/**",
"next-env.d.ts",
],
},
];

exportdefaulteslintConfig;
