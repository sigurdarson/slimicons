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

  fs.writeFile(
    indexFilePath,
    "import React from 'react';\n",
    { flag: 'w' },
    (err) => {
      if (err) {
        console.error(`Error initializing ${indexFilePath}:`, err);
        return;
      }
    }
  );

  svgFiles.forEach((file) => {
    const filePath = path.join(iconsDir, file);
    const iconName = toCamelCase(path.basename(file, '.svg'));
    const outputFilePath = path.join(srcDir, `${iconName}.svg`);

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }

      fs.writeFile(outputFilePath, data, (err) => {
        if (err) {
          console.error(`Error writing file ${outputFilePath}:`, err);
          return;
        }
        console.log(`Generated ${outputFilePath}`);

        const exportStatement = `import { ReactComponent as ${iconName}SVG } from './${iconName}.svg';\n`;
        const wrapperComponent = `export const ${iconName} = ({ size = 24, color = '#000000', ...props }) => (
  <${iconName}SVG width={size} height={size} fill={color} {...props} />
);\n`;

        fs.appendFile(
          indexFilePath,
          exportStatement + wrapperComponent,
          (err) => {
            if (err) {
              console.error(`Error appending to ${indexFilePath}:`, err);
              return;
            }
          }
        );
      });
    });
  });
});

function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, char) => char.toUpperCase());
}
