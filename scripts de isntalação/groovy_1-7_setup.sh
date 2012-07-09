#!/bin/bash
# Development Kit Setup
# 
# By: Carlos Alberto Schneider eufloyd@gmail.com
#
# install default jdk and set java home

sudo apt-add-repository ppa:groovy-dev/groovy --yes
sudo apt-get update --yes
sudo apt-get install groovy-1.7 --yes
