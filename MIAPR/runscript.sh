#!/bin/bash

FOLDER_NAME=$1
EXE_NAME=$2

wine ./$FOLDER_NAME/$FOLDER_NAME/bin/Debug/$EXE_NAME.exe
