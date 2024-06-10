#!/bin/bash

CHANGED_FILES=$(git diff --name-only HEAD^ HEAD)

for FILE in $CHANGED_FILES; do
  if [[ $FILE == gitscreen-tauri/* ]]; then
    echo "Changes detected in the tauri folder, skipping build."
    exit 1
  fi
done

echo "No changes in the tauri folder, proceeding with build."
exit 0
