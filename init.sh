#!/bin/bash

DIR="$( cd "$(dirname "$0")" ; pwd -P )"
HOST=`${DIR}/support/host.sh`
PORT=`${DIR}/support/port.sh`

ACTIVATE=".venv/default/bin/activate"

venv() {
  echo "Init Venv"
  python3 -m venv .venv/default
  source $ACTIVATE 
}

install() {
  pip3 install -U -r requirements.txt
}

host() {
  python manage.py migrate
  ps aux | grep -i runserver | grep -v "grep"  | awk '{print $2}' | xargs -I {} kill -9 {}
  python manage.py runserver $HOST:$PORT
}

case "$1" in
  venv)
    venv
    bash --rcfile $HOME/.bash_profile 
    ;;
  host)
    venv
    install
    host 
    ;;
  *)
    echo "./init [host|venv|install]" 
    exit
esac

exit $?
