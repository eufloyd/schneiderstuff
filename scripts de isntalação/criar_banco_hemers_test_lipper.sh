#!/bin/bash
# Development Kit Setup
# 
# By: Carlos Alberto Schneider eufloyd@gmail.com
#
# creating database hermes_test 
 	
sudo -u postgres createuser -s sigaxur
sudo -u postgres psql -c "alter user postgres with encrypted password 'admin@123'"
sudo -u postgres psql -c "create database hermes_test;"
sudo -u postgres psql -c "ALTER database hermes_test OWNER TO sigaxur;"
echo "!!! O banco hermes_test e o usuário sigaxur(com senha= 'admin@123') foram criados !!! Rode os scripts initial-values.sql, hermes-sequences.sql e hermes-models.sql nesse banco e comece a tra balhar agora mesmo seu fanfarrão !!!"

