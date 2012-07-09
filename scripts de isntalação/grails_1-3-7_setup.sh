#!/bin/bash
# Development Kit Setup
# 
# By: Carlos Alberto Schneider eufloyd@gmail.com
#
# install grails 1.3.7

sudo add-apt-repository ppa:groovy-dev/grails --yes
sudo apt-get update --yes
sudo apt-get install grails-1.3.7 --yes
echo "export GRAILS=/usr/bin/grails" >>  $HOME/.bashrc 
PATH="/usr/bin/grails:"$PATH
echo "export PATH="$PATH >> $HOME/.bashrc
echo "!!! GRAILS INSTALLED !!!"
