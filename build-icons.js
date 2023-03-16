const fs = require('fs');
const path = require('path');
const { transform } = require('@svgr/core');
const babel = require('@babel/core');

const iconsDir = path.join(__dirname, 'icons');
const srcDir = path.join(__dirname, 'src');

// Create the src directory if it doesn't exist
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

// Initialize the index content
let indexContent = '';

fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  files.forEach(async (file) => {
    const filePath = path.join(iconsDir, file);
    const componentName = path
      .basename(file, '.svg')
      .replace(/(-\w)/g, (match) => match[1].toUpperCase())
      .replace(/(^\w)/, (match) => match.toUpperCase());

    // Update the index content
    indexContent += `export { default as ${componentName} } from './${componentName}';\n`;

    // Read the SVG file content
    const svgCode = fs.readFileSync(filePath, 'utf-8');

    // Convert the SVG content to a React component using SVGR
    const jsCode = await transform(
      svgCode,
      { componentName },
      { fileName: componentName }
    );

    // Transform the code using Babel to support older JavaScript environments
    const { code } = await babel.transformAsync(jsCode, {
      configFile: false,
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-transform-modules-commonjs'],
    });

    // Write the React component to the src directory
    fs.writeFileSync(path.join(srcDir, `${componentName}.js`), code);
  });

  // Write the index.js file
  fs.writeFile(path.join(srcDir, 'index.js'), indexContent, (err) => {
    if (err) throw err;
    console.log('Index file generated.');
  });
});
