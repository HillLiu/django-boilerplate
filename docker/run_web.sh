#!/usr/bin/env sh
DIR="$( cd "$(dirname "$0")" ; pwd -P )"
cp $DIR/../wwwroot-orig/hello_react/workbox-*.js $DIR/../templates/workbox.js
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
