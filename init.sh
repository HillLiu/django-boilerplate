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
  python manage.py migrate
}

host() {
  ps aux | grep -i runserver | grep -v "grep"  | awk '{print $2}' | xargs -I {} kill -9 {}
  python manage.py runserver $HOST:$PORT
}

case "$1" in
  venv)
    venv
    source $HOME/.bash_profile
    bash --rcfile $ACTIVATE 
    ;;
  i)
    venv
    install
    ;;
  host)
    venv
    install
    host 
    ;;
  *)
    echo "./init [host|venv|i]" 
    exit
esac

exit $?
