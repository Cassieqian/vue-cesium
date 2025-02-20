#!/bin/sh
###
 # @Author: zouyaoji@https://github.com/zouyaoji
 # @Date: 2021-09-16 10:53:42
 # @LastEditTime: 2021-10-09 17:58:13
 # @LastEditors: zouyaoji
 # @Description:
 # @FilePath: \vue-cesium@next\scripts\build.sh
###

set -e

yarn clean:lib

# build all packages in case of error

# build components
yarn build:comps
rsync -a dist/types/components/ dist/vue-cesium/es/components/
rsync -a dist/types/components/ dist/vue-cesium/lib/components/

# build style
# yarn build:style

yarn build:theme
yarn build:locale
yarn build:utils
yarn build:composables
yarn build:directives
yarn build:shared
yarn build:full-bundle

rsync -a dist/entry/types/ dist/vue-cesium/es/
rsync -a dist/entry/types/ dist/vue-cesium/lib/

yarn build:helper

echo "copy index.css"
cp dist/vue-cesium/theme-default/index.css dist/vue-cesium/dist/index.css
cp -R dist/vue-cesium/theme-default/fonts dist/vue-cesium/dist/fonts

# echo "syncing style.js"
# rsync -a dist/styles/es/ dist/vue-cesium/es/components/
# rsync -a dist/styles/lib/ dist/vue-cesium/lib/components/

echo "copying source code"
cp -R packages dist/vue-cesium
cp packages/vue-cesium/package.json dist/vue-cesium/package.json

echo "copying README"
cp README.md dist/vue-cesium
