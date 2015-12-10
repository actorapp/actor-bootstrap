# Actor Server instalation guide for Ubuntu 14.04
<a id="requirements"></a>
#### Requirements

* Ubuntu 14.04
* Amazon Web Services with S3 enabled (for files transfer)

#### Installation
<a id="install-script"></a>
You can use automatic script which will install everything for you:
```
bash <(curl -s https://raw.githubusercontent.com/actorapp/actor-bootstrap/master/server/install-on-ubuntu.sh)
```
Or follow manual instruction below:

<a id="install-jdk"></a>
#### Step 1: Install Oracle JDK 8

```
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```
<a id="install-psql"></a>
#### Step 2: Install PostgreSQL 9.4

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61 
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >/etc/apt/sources.list.d/pgdg.list'
wget -q https://www.postgresql.org/media/keys/ACCC4CF8.asc -O - | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
sudo update-rc.d postgresql enable
sudo service postgresql restart
```
<a id="configure-database"></a>
#### Step 3: [Create PostgreSQL user and database](configure-database.md)
<a id="configure-s3"></a>
#### Step 4: [Create an S3 bucket](configure-s3.md) (skip if you don't need files transfer) 
<a id="configure-s3-gateway"></a>
#### Step 5: [Get Actor's activation gateway token](configure-sms-gateway.md) 
<a id="get-server"></a>
#### Step 6: Get server 

```
echo "deb https://dl.bintray.com/actor/ubuntu trusty main" | sudo tee -a /etc/apt/sources.list
sudo apt-get update
sudo apt-get install actor
```
<a id="configure-server"></a>
#### Step 7: Configure Actor Server 

Copy example config and put proper values

```
cd /etc/actor
sudo cp server.conf.example server.conf
sudo nano server.conf
```
<a id="run-server"></a>
#### Step 8: Run Actor Server 

```
sudo service actor restart
```
