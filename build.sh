#!/usr/bin/env bash

set -e

cp node_modules/npm-zepto/zepto/dist/zepto.min.js dist/app/vendor/zepto.js
cp src/*.js dist/app/js/
cp src/manifest.json dist/app/
cd dist && zip crx-table-row-filter.zip -r app/* && cd -

