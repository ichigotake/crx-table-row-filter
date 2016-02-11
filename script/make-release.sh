#!/usr/bin/env bash

set -e

upload_url=$(
  curl -u "$USERNAME:$TOKEN" -X POST 'https://api.github.com/repos/ichigotake/crx-table-rows-filter/releases' -d "{\"name\": \"$TAG\", \"tag_name\": \"$TAG\", \"prerelease\": true, \"draft\": true}"\
  | jq '.upload_url' | sed -e 's/\/assets\(.*\)/\/assets/' | sed -e 's/\"//'
)

echo $upload_url

curl -u "$USERNAME:$TOKEN" -X POST "$upload_url?name=crx-table-rows-filter-$TAG.zip" -H "Content-Type: application/zip" -T dist/crx-table-row-filter.zip | jq

