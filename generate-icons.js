const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, 'optimized/24');
const srcDir = path.join(__dirname, 'src');

if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir);
}

fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Error reading the icons directory:', err);
    return;
  }

  const svgFiles = files.filter((file) => path.extname(file) === '.svg');

  const indexFilePath = path.join(srcDir, 'index.js');

  fs.writeFile(indexFilePath, '', { flag: 'w' }, (err) => {
    if (err) {
      console.error(`Error initializing ${indexFilePath}:`, err);
      return;
    }
  });

  svgFiles.forEach((file) => {
    const filePath = path.join(iconsDir, file);
    const componentName = toCamelCase(path.basename(file, '.svg'));
    const outputFilePath = path.join(srcDir, `${componentName}.js`);

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }

      const svgContent = data.replace(/<svg[^>]*>/, '').replace('</svg>', '');

      const componentCode = `import React from 'react';

const ${componentName} = ({
  size = 24,
  color = '#000000',
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${svgContent}
  </svg>
);

export default ${componentName};
`;

      fs.writeFile(outputFilePath, componentCode, (err) => {
        if (err) {
          console.error(`Error writing file ${outputFilePath}:`, err);
          return;
        }
        console.log(`Generated ${outputFilePath}`);

        const exportStatement = `export { default as ${componentName} } from './${componentName}';\n`;

        fs.appendFile(indexFilePath, exportStatement, (err) => {
          if (err) {
            console.error(`Error appending to ${indexFilePath}:`, err);
            return;
          }
        });
      });
    });
  });
});

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}
