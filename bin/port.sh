#!/bin/bash

DIR="$( cd "$(dirname "$0")" ; pwd -P )"
ENV=`${DIR}/env.sh`

if [ -z "$PORT" ]; then
  PORT=$(awk -F "=" '/^PORT/ {print $2}' $ENV)
fi

echo $PORT
