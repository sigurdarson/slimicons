import fs from 'fs/promises';
import path from 'path';
import camelCase from 'camelcase';
const svgr = require('@svgr/core').default;
import { transformAsync } from '@babel/core';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const iconsFolder = 'optimized/24';
const destinationFolder = 'src';

async function generateIconComponents() {
  const files = await fs.readdir(iconsFolder);

  let indexFileContent = '';
  let indexTypeFileContent = '';

  for (const file of files) {
    const filePath = path.join(iconsFolder, file);
    const componentName = `${camelCase(path.basename(file, '.svg'), {
      pascalCase: true,
    })}`;

    const svgContent = await fs.readFile(filePath, 'utf-8');

    const componentCode = await svgr(svgContent, {
      icon: true,
      ref: true,
      svgProps: {
        width: '{size}',
        height: '{size}',
        fill: '{color}',
      },
      template: ({ template }, _opts, { componentName, jsx }) => {
        const typeScriptTpl = template.smart({ plugins: ['typescript'] });
        return typeScriptTpl.ast`
          import React from 'react';
          
          export const ${componentName} = ({
            size = 24,
            color = "#000000",
            ...props
          }) => {
            return ${jsx};
          };
          
          ${componentName}.validateProps = (props) => {
            if (props.size !== undefined && typeof props.size !== 'number') {
              console.error('Invalid prop: size must be a number');
            }
            if (props.color !== undefined && typeof props.color !== 'string') {
              console.error('Invalid prop: color must be a string');
            }
          };
        `;
      },
    });

    const { code } = await transformAsync(componentCode, {
      configFile: path.resolve(__dirname, '.babelrc'),
    });

    const outputPath = path.join(destinationFolder, `${componentName}.js`);
    await fs.writeFile(outputPath, code, 'utf-8');

    indexFileContent += `export { ${componentName} } from './${componentName}';\n`;
    indexTypeFileContent += `export { ${componentName} } from './${componentName}';\n`;
  }

  const indexFilePath = path.join(destinationFolder, 'index.js');
  await fs.writeFile(indexFilePath, indexFileContent, 'utf-8');

  const indexTypeFilePath = path.join(destinationFolder, 'index.d.ts');
  await fs.writeFile(indexTypeFilePath, indexTypeFileContent, 'utf-8');
}

generateIconComponents().catch((error) => console.error(error));
