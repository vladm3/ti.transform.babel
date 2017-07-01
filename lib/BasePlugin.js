const path = require('path');
const replaceExt = require('replace-ext');
const pkg = require('../package.json');

class BasePlugin {
  constructor() {
    this.id = pkg.name;
    this.version = pkg.version;
    this.cliVersion = '>=3.x';
    this.validExtensions = new Set();
    this.dstExtension = '';

    this.handleTransformFile = this.handleTransformFile.bind(this);
  }

  init(logger, config, cli) {
    this.logger = logger;
    this.config = config;
    this.cli = cli;

    this.addHooks();
  }

  addHooks() {
    this.cli.on('ti.transform.file', this.handleTransformFile);
  }

  handleTransformFile(data, next) {
    if (!this.shouldTransform(data)) {
      next();
      return;
    }

    const dstPath = this.srcToDstPath(data.src, data.paths);
    this.transformFile(data.src, dstPath)
      .then(genPaths => {
        data.processed = true;
        data.gen = data.gen.concat(genPaths);
        next();
      })
      .catch(e => next(e));
  }

  transformFile() {
    return Promise.resolve([]);
  }

  shouldTransform(data) {
    return data && !data.processed && this.validExtensions.has(path.extname(data.src));
  }

  srcToDstPath(srcPath, paths) {
    const dstPath = path.join(paths.dst, path.relative(paths.src, srcPath));
    return this.dstExtension ? replaceExt(dstPath, this.dstExtension) : dstPath;
  }

  log(message, level = 'info') {
    level = this.logger[level] ? level : 'info';
    this.logger[level](message);
  }
}

module.exports = BasePlugin;