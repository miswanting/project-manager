@echo off
title Main Dev
chcp 65001
cls
call ./node_modules/.bin/webpack --config webpack.dev.js
call ./node_modules/.bin/electron .
pause