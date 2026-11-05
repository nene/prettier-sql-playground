#!/usr/bin/env sh

# abort on errors
set -e

# upgrade plugin to latest version
npm install prettier-plugin-sql-cst@latest

# extract version from package.json
version=$(node -p "require('./package.json').dependencies['prettier-plugin-sql-cst'].replace(/^./, '');")

git ci -am "Upgrade plugin to $version"

npm run deploy

git push
