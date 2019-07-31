#!/bin/bash

conf='{'
conf+='"externals": {'
conf+='"moment": "moment",'
conf+='"d3": "d3" },'
conf+='"assetsRoot":"/static/assets/"'
conf+='}'

PWD=`dirname $0`
cd $PWD
webpack='node_modules/.bin/webpack'

production(){
    echo "Production Mode";
    npm run build
    npm run test 
    NODE_ENV=production CONFIG=$conf $webpack -p --optimize-minimize 
}

install(){
    echo "Run yarn install.";
    env yarn
}

analyzer(){
    echo "Analyzer Mode";
    npm run build
    CONFIG=$conf BUNDLE='{}' $webpack --display-used-exports
}

develop(){
    echo "Develop Mode";
    npm run build
    CONFIG=$conf $webpack
}

case "$1" in
  a)
    analyzer
    ;;
  i)
    install
    ;;
  p)
    production
    ;;
  *)
    develop
    exit
esac

exit $?
