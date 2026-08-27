#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/zhouxzh/driver.git"
DIST_DIR="src/.vuepress/dist"

pnpm docs:build

rm -rf "$DIST_DIR/.git"
git init -q "$DIST_DIR"
git -C "$DIST_DIR" add -A
git -C "$DIST_DIR" -c user.name="zhouxzh" -c user.email="zhouxzh@gdut.edu.cn" commit -q -m "deploy"
git -C "$DIST_DIR" push -f "$REPO_URL" HEAD:deploy

echo "Deployed to https://zhouxzh.github.io/driver/"
