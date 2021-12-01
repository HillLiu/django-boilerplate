#!/bin/bash

DIR="$( cd "$(dirname "$0")" ; pwd -P )"
ENV=`${DIR}/env.sh`

if [ -z "$HOST" ]; then
  HOST=$(awk -F "=" '/^HOST/ {print $2}' $ENV)
fi

echo $HOST
