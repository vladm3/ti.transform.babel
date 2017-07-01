const fs = require('fs-extra');
const babel = require('babel-core');
const BasePlugin = require('./BasePlugin');

class TransformBabelPlugin extends BasePlugin {
  constructor() {
    super();
    this.validExtensions = new Set(['.js', '.es6', '.jmk']);
    this.dstExtension = '.js';
  }

  transformFile(srcPath, dstPath) {
    this.log(`Transforming JS with Babel ${srcPath} -> ${dstPath}`);
    return new Promise((resolve, reject) => {
      babel.transformFile(srcPath, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    })
      .then(({ code }) => fs.outputFile(dstPath, code))
      .then(() => [dstPath]);
  }
}

module.exports = TransformBabelPlugin;