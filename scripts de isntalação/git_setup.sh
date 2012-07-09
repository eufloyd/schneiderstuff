#!/bin/bash
# Development Kit Setup
# 
# By: Carlos Alberto Schneider eufloyd@gmail.com
#
#git install and setup
sudo apt-get install git-core git-doc git-svn git-gui gitk --yes
sudo apt-get install git-flow --yes

echo "Digite o seu nome(aparecerá nos commits git)" 
read nome
echo "Digite o seu email(aparecerá nos commits git)" 
read mail
echo $nome
git config --global user.name "$nome"
git config --global user.email "$mail"

#install meld 
sudo apt-get install meld --yes
setup meld for git diff
sudo cp git-diff.sh /usr/local/bin/.
sudo chmod +x /usr/local/bin/git-diff.sh
git config --global diff.external /usr/local/bin/git-diff.sh
echo "Digite o nome do seu usuário no sistema operacional. ***Case sensitive"
read user

#ssh 
sudo -u $user ssh-keygen -t rsa -C "$mail"
echo "!!! Insira sua chave pública no bitbucket, github ou beanstalk"
echo "Aperte ENTER quando terminar esse processo"
echo "!!! Sua chave pública é:"
tail -500 /home/$user/.ssh/id_rsa.pub
read enter

#checkout and build lipper
echo "!!! iniciando o build do projeto lipper, se você for de outro projeto, paciência !!!"
sudo -u $user mkdir /home/$user/lipper
cd /home/$user/lipper && sudo -u $user git clone git@bitbucket.org:axur/lipper.git
cd /home/$user/lipper/lipper/hermes-build && sudo -u $user mvn clean install -Dmaven.test.skip=true 
