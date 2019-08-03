#!/bin/bash

DIR="$( cd "$(dirname "$0")" ; pwd -P )"

usage()
{
echo -n "
  Usage: $0 {u|c}
  u    Extract lang key 
  c    Update mo
"
}

case "$1" in
    # extract lang key
    u)
        bash -c "python3 manage.py makemessages -l en -l zh_Hans -l zh_Hant -e ini,html,py"
        ;;
    # update mo 
    c)
        bash -c "python3 manage.py compilemessages"
        ;;
    *)
        usage
        exit 1
esac

exit $?
