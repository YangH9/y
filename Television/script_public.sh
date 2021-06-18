#!/bin/zsh
git fetch
git reset origin/HEAD --hard
npm run build
rm -rf www
cp -r dist www
