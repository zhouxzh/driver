#!/usr/bin/env bash
set -euo pipefail

REPO_URL="https://github.com/zhouxzh/driver.git"
SSH_REPO_URL="git@github.com:zhouxzh/driver.git"
if [ -n "${GH_TOKEN:-}" ]; then
  AUTH_REPO_URL="https://x-access-token:${GH_TOKEN}@github.com/zhouxzh/driver.git"
else
  AUTH_REPO_URL="$SSH_REPO_URL"
fi
DIST_DIR="src/.vuepress/dist"

if command -v pnpm >/dev/null 2>&1; then
  run_pnpm() { pnpm "$@"; }
else
  run_pnpm() { npx --yes pnpm@10.2.0 "$@"; }
fi

run_pnpm docs:build

rm -rf "$DIST_DIR/.git"
git init -q "$DIST_DIR"
git -C "$DIST_DIR" add -A
git -C "$DIST_DIR" -c user.name="zhouxzh" -c user.email="zhouxzh@gdut.edu.cn" commit -q -m "deploy"
git -C "$DIST_DIR" push -f "$AUTH_REPO_URL" HEAD:deploy
rm -rf "$DIST_DIR/.git"

echo "Deployed to https://zhouxzh.github.io/driver/"
