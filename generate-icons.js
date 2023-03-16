const fs = require('fs');
const path = require('path');
const { transform } = require('@svgr/core');

const iconsDir = path.join(__dirname, 'optimized/24');
const srcDir = path.join(__dirname, 'src');

if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir);
}

fs.readdir(iconsDir, async (err, files) => {
  if (err) {
    console.error('Error reading the icons directory:', err);
    return;
  }

  const svgFiles = files.filter((file) => path.extname(file) === '.svg');

  const indexFilePath = path.join(srcDir, 'index.js');
  fs.writeFileSync(indexFilePath, '');

  for (const file of svgFiles) {
    const filePath = path.join(iconsDir, file);
    const componentName = toCamelCase(path.basename(file, '.svg'));
    const outputFilePath = path.join(srcDir, `${componentName}.js`);

    const svgContent = await fs.promises.readFile(filePath, 'utf-8');
    const componentCode = await transform(
      svgContent,
      { icon: true },
      { componentName }
    );
    const wrapperCode = `import React from 'react';
import ${componentName}SVG from './${componentName}SVG';

export const ${componentName} = ({ size = 24, color = '#000000', ...props }) => (
  <${componentName}SVG width={size} height={size} fill={color} {...props} />
);\n`;

    await fs.promises.writeFile(outputFilePath, componentCode + wrapperCode);
    console.log(`Generated ${outputFilePath}`);

    const exportStatement = `export { ${componentName} } from './${componentName}';\n`;
    await fs.promises.appendFile(indexFilePath, exportStatement);
  }
});

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}
