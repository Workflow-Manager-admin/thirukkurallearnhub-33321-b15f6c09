#!/bin/bash
cd /home/kavia/workspace/code-generation/thirukkurallearnhub-33321-b15f6c09/thirukkurallearnhub_web_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

