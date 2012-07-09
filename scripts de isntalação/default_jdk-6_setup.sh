#!/bin/bash
# Development Kit Setup
# 
# By: Carlos Alberto Schneider eufloyd@gmail.com
#
# install default jdk and set java home

sudo apt-get --yes install default-jdk
echo "export JAVA_HOME=/usr/lib/jvm/default-java" >>  $HOME/.bashrc 
PATH="/usr/bin/java:"$PATH 
echo "export PATH="$PATH >> $HOME/.bashrc
echo "!!! JAVA INSTALLED !!!" 

	




