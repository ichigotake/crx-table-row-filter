#!/usr/bin/sh -e

npm install
mkdir -p app/{js,vendor}
cp node_modules/jquery/dist/jquery.min.js app/vendor/jquery.js


