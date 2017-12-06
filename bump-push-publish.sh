#!/bin/bash -x -e
npm version patch
npm run build
git push
npm publish dist/

