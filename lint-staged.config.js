module.exports = {
  'libs/**/*.{ts,tsx}': (files) => {
    return `nx affected --target=typecheck --files=${files.join(',')}`;
  },
  'libs/**/*.{js,ts,jsx,tsx,json}': [
    (files) => `nx affected:lint --files=${files.join(',')}`,
    (files) => `nx format:write --files=${files.join(',')}`,
  ],
  '**/package.json': [
    (files) => `npx sort-package-json ${files.join(' ')}`
  ],
};
