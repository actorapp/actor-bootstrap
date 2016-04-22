#!/usr/bin/env bash

set -eu

echo "### Checking Ubuntu version"

if [ -a /etc/lsb-release ]
then
  . /etc/lsb-release
  if [ $DISTRIB_CODENAME == "trusty" ]
  then
  	echo "* Ubuntu version is valid"
  else
  	echo "This script requires Ubuntu 14.04 (trusty) but running on ${DISTRIB_ID} ${DISTRIB_RELEASE} (${DISTRIB_CODENAME})"
  	exit 1
  fi
else
  echo "This script requires Ubuntu 14.04 (trusty)"
  exit 1
fi

echo "### Installing utilities"

sudo apt-get update
sudo apt-get install -y software-properties-common apt-transport-https

echo "### Installing Oracle JDK"

sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install -y  oracle-java8-installer

echo "### Installing PostgreSQL"

sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >/etc/apt/sources.list.d/pgdg.list'
wget -q https://www.postgresql.org/media/keys/ACCC4CF8.asc -O - | sudo apt-key add -
sudo apt-get update
sudo apt-get install -y postgresql postgresql-contrib
sudo update-rc.d postgresql enable
sudo service postgresql restart

echo "### Configuring PostgreSQL"

sudo -u postgres createuser --superuser actor
sudo -u postgres psql postgres --command '\password actor'
sudo -u postgres createdb actor -O actor

echo "### Updating OpenSSL"

sudo add-apt-repository ppa:0k53d-karl-f830m/openssl
sudo apt-get update
sudo apt-get install --only-upgrade openssl
sudo apt-get install libapr1

echo "### Getting server"

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61 
echo "deb https://dl.bintray.com/actor/ubuntu trusty main" | sudo tee -a /etc/apt/sources.list
sudo apt-get update
sudo apt-get install -y --force-yes actor

sudo cp /etc/actor/server.conf.example /etc/actor/server.conf

echo
echo
echo

echo "Well done! Now edit /etc/actor/server.conf and put there proper values, actor server will restart itself automatically."
