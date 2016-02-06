#!/usr/bin/env bash

set -e

cp src/*.js dist/app/js/
cp src/manifest.json dist/app/
cd dist && zip crx-table-row-filter.zip -r app/* && cd -

