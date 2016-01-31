#!/usr/bin/sh -e

npm install
mkdir -p app/{js,vendor}
cp bower_components/jquery/dist/jquery.min.js app/vendor/jquery.js

