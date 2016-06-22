/**
 * Copyright (C) 2016 yanni4night.com
 * index.js
 *
 * changelog
 * 2016-06-22[14:55:40]:revised
 *
 * @author yanni4night@gmail.com
 * @version 1.0.0
 * @since 1.0.0
 */
'use strict';

var semver = require('semver');
var fs = require('fs');
var child_process = require('child_process');
var path = require('path');

module.exports = function gitag(cwd) {
    try {
        var pkg = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf-8'));

        if (!pkg.version) {
            throw new Error('No version defined in package.json');
        }

        var version;

        if (!(version = semver.valid(pkg.version))) {
            throw new Error(pkg.version + 'is not a legal semantic version in package.json');
        }

        var lastLog = child_process.execSync('git log  --pretty=%s --max-count=1 --no-merges', {
            encoding: 'utf-8',
            cwd: cwd
        });

        lastLog = lastLog.trim();

        var insertTagCmd = 'git tag -a "v' + version + '" -m "v' + version + ' ' + lastLog + '"'

        child_process.exec(insertTagCmd, {
            encoding: 'utf-8',
            cwd: cwd
        }, function (err, ret) {
            if (err) {
                console.error(err.message);
            } else {
                console.log(ret);
            }
        });
    } catch (err) {
        console.error(err.message);
    }
}