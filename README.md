# fast-git-tag
[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

Fast git tag command for NPM package.

It reads __version__ in _package.json_, last commit log mesasge via:

>git log  --pretty=%s --max-count=1 --no-merges

Then creates a new tag like:

>git tag -a "0.1.0" -m "0.1.0 the last commit message"

## usage

>npm install -g fast-git-tag

```
$ gitag
```


[npm-url]: https://npmjs.org/package/fast-git-tag
[downloads-image]: http://img.shields.io/npm/dm/fast-git-tag.svg
[npm-image]: http://img.shields.io/npm/v/fast-git-tag.svg
[david-dm-url]:https://david-dm.org/yanni4night/fast-git-tag
[david-dm-image]:https://david-dm.org/yanni4night/fast-git-tag.svg
[david-dm-dev-url]:https://david-dm.org/yanni4night/fast-git-tag#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/yanni4night/fast-git-tag/dev-status.svg