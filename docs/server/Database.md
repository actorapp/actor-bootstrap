# Database configuration

Open-Source Actor Server edition uses PostgreSQL Database. Other databases like Cassandra, Oracle, MySQL, etc are supported in [enterprise edition](https://actor.im/platform/enterprise).

To setup PostgreSQL, you need to create a database and user with superuser privilegies:

```
sudo -u postgres createuser -W --superuser <user>
sudo -u postgres createdb <dbname> -O <user>
```
