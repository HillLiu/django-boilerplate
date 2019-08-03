#!/bin/bash

DIR="$( cd "$(dirname "$0")" ; pwd -P )"
HOST=`${DIR}/support/host.sh`
PORT=`${DIR}/support/port.sh`

ACTIVATE="$DIR/.venv/default/bin/activate"
echo $ACTIVATE

venv() {
  echo "Venv --- start"
  if [ ! -e $ACTIVATE ]; then
    echo "Init Venv --- start"
    python3 -m venv .venv/default
  fi
  source $ACTIVATE 
}

install() {
  pip3 install --upgrade pip
  pip3 install -U -r requirements.txt
}

host() {
  ps aux | grep -i runserver | grep -v "grep"  | awk '{print $2}' | xargs -I {} kill -9 {}
  python3 manage.py migrate
  python3 manage.py runserver $HOST:$PORT
}

case "$1" in
  source-venv)
    venv
    ;;
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
