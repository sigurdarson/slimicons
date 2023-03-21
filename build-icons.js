const fs = require('fs');
const path = require('path');
const { transform } = require('@svgr/core');
const babel = require('@babel/core');

const iconsDir = path.join(__dirname, 'icons');
const srcDir = path.join(__dirname, 'src');

if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

let indexContent = '';

fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  files.forEach(async (file) => {
    if (file === '.DS_Store') return;
    const filePath = path.join(iconsDir, file);
    const componentName = path
      .basename(file, '.svg')
      .replace(/(-\w)/g, (match) => match[1].toUpperCase())
      .replace(/(^\w)/, (match) => match.toUpperCase());

    indexContent += `export { default as ${componentName} } from './${componentName}';\n`;

    const svgCode = fs.readFileSync(filePath, 'utf-8');

    const jsCode = await transform(
      svgCode,
      {
        componentName,
        config: {
          template: (api, opts, state) => {
            const { template } = api;
            const { imports, componentName, jsx, exports } = state;
            const typeScriptTpl = template.smart({ plugins: ['typescript'] });

            return typeScriptTpl.ast`
              ${imports}
              function ${componentName}(props) {
                return ${jsx};
              }
              ${exports}
            `;
          },
        },
      },
      { fileName: componentName }
    );

    const { code } = await babel.transformAsync(jsCode, {
      configFile: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    });

    const modifiedCode = code
      .replace(/stroke: "black"/g, 'stroke: props.color || "#000"')
      .replace('height: 24', 'height: props.size || 24')
      .replace('width: 24', 'width: props.size || 24');

    fs.writeFileSync(path.join(srcDir, `${componentName}.js`), modifiedCode);
  });

  fs.writeFile(path.join(srcDir, 'index.js'), indexContent, (err) => {
    if (err) throw err;
    console.log('Index file generated.');
  });
});
