# Actor Server instalation guide for Ubuntu 14.04

#### Requirements

* Ubuntu 14.04
* Amazon Web Services with S3 enabled (for files transfer)

#### Installation

<a id="install-jdk"></a>
#### Step 1: Install Oracle JDK 8

```
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

#### Step 2: Install PostgreSQL 9.4 <a id="install-psql"></a>

```
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >>/etc/apt/sources.list.d/pgdg.list'
wget -q https://www.postgresql.org/media/keys/ACCC4CF8.asc -O - | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

#### Step 3: [Create PostgreSQL user and database](configure-database.md) <a id="configure-database"></a>

#### Step 4: [Create an S3 bucket](configure-s3.md) (skip if you don't need files transfer) <a id="configure-s3"></a>

#### Step 5: [Get Actor's activation gateway token](configure-s3-gateway.md) <a id="configure-s3-gateway"></a>

#### Step 6: Get server <a id="get-server"></a>

```
echo "deb https://dl.bintray.com/actor/ubuntu trusty main" | sudo tee -a /etc/apt/sources.list
sudo apt-get update
sudo apt-get install actor
```

#### Step 7: Configure Actor Server <a id="configure-server"></a>

Copy example config and put proper values

```
cd /etc/actor
sudo cp server.conf.example server.conf
sudo nano server.conf
```

#### Step 8: Run Actor Server <a id="run-server"></a>

```
sudo service actor restart
```
