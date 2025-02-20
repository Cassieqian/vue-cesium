/*
 * @Author: zouyaoji@https://github.com/zouyaoji
 * @Date: 2021-10-27 15:54:11
 * @LastEditTime: 2021-10-29 10:26:50
 * @LastEditors: zouyaoji
 * @Description:
 * @FilePath: \vue-cesium@next\packages\locale\gulpfile.ts
 */
import gulp from 'gulp'
import ts from 'gulp-typescript'
import path from 'path'
import { buildOutput } from '../../build/paths'

export const esm = './es'
export const cjs = './lib'
const inputs = './lang/*.ts'

function compileLangEsm() {
  return gulp
    .src(inputs)
    .pipe(ts.createProject('tsconfig.json')())
    .pipe(gulp.dest(path.resolve(esm, 'lang')))
}

function compileLangCjs() {
  return gulp
    .src(inputs)
    .pipe(
      ts.createProject('tsconfig.json', {
        module: 'commonjs'
      })()
    )
    .pipe(gulp.dest(path.resolve(cjs, 'lang')))
}

function compileEntryEsm() {
  return gulp
    .src('./index.ts')
    .pipe(
      ts.createProject('tsconfig.json', {
        module: 'esnext'
      })()
    )
    .pipe(gulp.dest(esm))
}

function compileEntryCjs() {
  return gulp
    .src('./index.ts')
    .pipe(
      ts.createProject('tsconfig.json', {
        module: 'commonjs'
      })()
    )
    .pipe(gulp.dest(cjs))
}

const distBundle = path.resolve(buildOutput, './vue-cesium')

/**
 * copy from packages/locale/lib to dist/locale
 */
function copyEsm() {
  return gulp.src(cjs + '/**/*').pipe(gulp.dest(path.resolve(distBundle, './lib/locale')))
}

function copyCjs() {
  return gulp.src(esm + '/**/*').pipe(gulp.dest(path.resolve(distBundle, './es/locale')))
}

export const build = gulp.series(compileEntryEsm, compileEntryCjs, compileLangEsm, compileLangCjs, copyEsm, copyCjs)

export default build
