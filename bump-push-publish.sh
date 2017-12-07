#!/bin/bash -xe
npm version patch
npm run build
git push
npm publish dist/

