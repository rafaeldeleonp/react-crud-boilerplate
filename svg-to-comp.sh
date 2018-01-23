#!/usr/bin/env bash
FILES=$(find src/commons/components/Svg -type f -name '*.svg')
for file in $FILES
do
  `npm bin`/svg2react $file --jsx
  rm $file
done
