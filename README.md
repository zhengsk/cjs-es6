# cjs-es6

Convert javascript file from CommonJS type to ES6 type.

## Install

```shell
npm install -S cjs-es6
```

```js
  const cjsEs6 = require('cjs-es6');

  const codeStr = 'module.exports = abc'
  const result = cjsEs6(codeStr); // export default abc;
```