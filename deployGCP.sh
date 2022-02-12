#!/bin/bash

cd /Users/samzimmerman/Documents/Projects/PotatoWebsite/build
rm .DS_Store
gsutil -o "GSUtil:parallel_process_count=1" rsync -rd . gs://potatoclub.art/ 
