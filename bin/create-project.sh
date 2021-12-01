#!/bin/bash
python3 -m django startproject $1 

mv $1 $1.orig
mv $1.orig/* ./
rmdir $1.orig
