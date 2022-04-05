#!/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 切换远程仓库至 DocRia.github.io
git remote set-url origin https://github.com/DocRia/DocRia.github.io.git
git add -A
git commit -m 'Github Pages Update'
git push

cd -