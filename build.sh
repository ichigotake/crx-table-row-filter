#!/bin/sh -e

cp src/*.js dist/app/js/
cp src/manifest.json dist/app/
zip dist/crx-table-row-filter.zip -r dist/app/*

