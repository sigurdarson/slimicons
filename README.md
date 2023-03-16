# slimicons

Slim icons is a free &amp; open source icon library by [Sig](https://twitter.com/GSigurdarson).

## Instalation

First, install the icon package from npm:

```bash
npm install slimicons
```

### Usage

To use the icon components in your React project, import the specific icons you need from the package and use them as you would use any other React component.

Here's an example of how to import and use the ArrowDown icon:

```javascript
import React from 'react';
import { ArrowDown } from 'your-icon-package';

const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <ArrowDown size={24} color='#000000' />
    </div>
  );
};

export default App;
```

### Customizing Icons

You can customize the size and color of the icons using the size and color props, respectively.

For example, to change the size and color of the ArrowDown icon, you can pass the desired values as props:

```javascript
<ArrowDown size={48} color='#FF0000' />
```

This will render the ArrowDown icon with a size of 48x48 pixels and a red color.

You can also pass additional props to the icon component, and they will be passed down to the underlying SVG element. For example, if you want to add a custom class or a data-\* attribute, you can do so like this:

```javascript
<ArrowDown className='custom-class' data-test-id='arrow-icon' />
```

This will render the ArrowDown icon with a custom-class CSS class and a data-test-id attribute set to arrow-icon

### Example

```javascript
import React from 'react';
import { ArrowDown, AnotherIcon } from 'your-icon-package';

const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <ArrowDown
        size={48}
        color='#FF0000'
        className='custom-class'
        data-test-id='arrow-icon'
      />
      <AnotherIcon size={32} color='#00FF00' />
    </div>
  );
};

export default App;
```

## Alternatively

another way to use the icons is to navigate to [slimicons.com](https://slimicons.com) and copy the desired icon into your preferred design tool or directly to your HTML code.

```html
<svg
  fill="none"
  height="24"
  viewBox="0 0 24 24"
  width="24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    clip-rule="evenodd"
    d="m3 6.75c-.41421 0-.75.33579-.75.75s.33579.75.75.75h18c.4142 0 .75-.33579.75-.75s-.3358-.75-.75-.75zm0 9c-.41421 0-.75.3358-.75.75s.33579.75.75.75h18c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75zm-.75-2.25c0-.4142.33579-.75.75-.75h18c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-18c-.41421 0-.75-.3358-.75-.75zm.75-3.75c-.41421 0-.75.3358-.75.75s.33579.75.75.75h18c.4142 0 .75-.3358.75-.75s-.3358-.75-.75-.75z"
    fill="#000"
    fill-rule="evenodd"
  />
</svg>
```

## Plans going forward

- [] Expand the library
- [x] React components
- [x] NPM package

## License

The icon set is under MIT license.
