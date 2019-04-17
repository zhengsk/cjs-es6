cons jscodeshift = require('jscodeshift');
const toImport = require('5to6-codemod/transforms/cjs');
const toExport = require('5to6-codemod/transforms/exports');

function cjsEs6(sourceCode, options = {}) {
  // require to import.
  let targetStr = toImport({source: sourceCode}, {jscodeshift}, options);

  // module.exports to export default.
  targetStr = toExport({source: targetStr }, {jscodeshift}, options);

  return targetStr;
}

module.exports = cjsEs6;