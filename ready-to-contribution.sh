#!/usr/bin/env bash

set -e

npm install
mkdir -p dist/app/{js,vendor}
cp node_modules/jquery/dist/jquery.min.js dist/app/vendor/jquery.js


