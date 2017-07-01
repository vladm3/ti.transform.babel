[![npm](https://img.shields.io/npm/v/ti.transform.babel.svg)](https://www.npmjs.com/package/ti.transform.babel)

# ti.transform.babel
This Titanium CLI plugin transforms JS files with [Babel](http://babeljs.io/).

__Note:__ This plugin requires the base support plugin [`ti.transform`](https://github.com/vladm3/ti.transform).
See the section [Installation](#installation).

## Installation
### NPM (recommended)
#### I haven't installed ti.transform
Install [`ti.transform`](https://github.com/vladm3/ti.transform) according to its [Installation guide](https://github.com/vladm3/ti.transform).

Then refer to the next section:
#### I have installed ti.transform
Run this command in a Titanium project directory

```bash
npm install --save-dev ti.transform.babel
```

The plugin will install itself to the project's local `/plugins` directory.

After that you need to enable the plugin in your `tiapp.xml`.
Add the following XML element to the `<plugins/>` section:
`<plugins/>` section:
```xml
<plugins>
  ...
  <plugin version="0.1.0">ti.transform.babel</plugin>
</plugins>
```
### Manual
#### I haven't installed ti.transform
Install [`ti.transform`](https://github.com/vladm3/ti.transform) according to its [Installation guide](https://github.com/vladm3/ti.transform).

Then refer to the next section:
#### I have installed ti.transform
At first, download the plugin.

Then copy the plugin code into the project's local `/plugins` directory:
```
${project}/plugins/ti.transform.babel/0.1.0/{plugin_files}
```

After that add the following XML element to the `<plugins/>` section:
```xml
<plugins>
  ...
  <plugin version="0.1.0">ti.transform.babel</plugin>
</plugins>
```

## Configuration
The plugin doesn't enable any Babel plugins or presets by default.
You need to configure them by creating a `.babelrc` file in your project.
Refer to the Babel documentation:
* [How to use the .babelrc](http://babeljs.io/docs/usage/babelrc/)
* [Presets & Plugins](http://babeljs.io/docs/plugins/)

## Example
See the example project [ti.transform-example](https://github.com/vladm3/ti.transform-example)

## License
MIT