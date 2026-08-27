#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/zhouxzh/driver.git"
if [ -n "${GH_TOKEN:-}" ]; then
  AUTH_REPO_URL="https://x-access-token:${GH_TOKEN}@github.com/zhouxzh/driver.git"
else
  AUTH_REPO_URL="$REPO_URL"
fi
DIST_DIR="src/.vuepress/dist"

pnpm docs:build

rm -rf "$DIST_DIR/.git"
git init -q "$DIST_DIR"
git -C "$DIST_DIR" add -A
git -C "$DIST_DIR" -c user.name="zhouxzh" -c user.email="zhouxzh@gdut.edu.cn" commit -q -m "deploy"
git -C "$DIST_DIR" push -f "$AUTH_REPO_URL" HEAD:deploy

echo "Deployed to https://zhouxzh.github.io/driver/"
