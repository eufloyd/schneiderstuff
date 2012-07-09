man #!/bin/bash
# Lipper Development Kit Setup
# 
# By: Carlos Alberto Schneider eufloyd@gmail.com
#

#OBS: é preciso dar ok na tela de instalação do postgres

#MISC
sudo apt-get install vim
sudo apt-get install htop

#default jdk/java
sudo chmod +x default_jdk-6_setup.sh
sudo sh default_jdk-6_setup.sh

# groovy 1.7 
sudo chmod +x groovy_1-7_setup.sh
sudo sh groovy_1-7_setup.sh

# grails  1.3.7
sudo chmod +x grails_1-3-7_setup.sh
sudo sh grails_1-3-7_setup.sh

# maven 2
sudo chmod +x maven_2_setup.sh
sudo sh maven_2_setup.sh

#git e meld
sudo chmod +x git_setup.sh
sudo sh git_setup.sh

#postgres 8.4
sudo chmod +x postgres_8-4_setup.sh
sudo sh postgres_8-4_setup.sh

#criar banco/usuários de testes do lipper
sudo chmod +x criar_banco_hemers_test_lipper.sh
sudo sh criar_banco_hemers_test_lipper.sh

# TODO baixar eclipse

--listen to: walking the dog

