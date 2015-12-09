# Database configuration

Open-Source Actor Server edition uses PostgreSQL Database. Other databases like Cassandra, Oracle, MySQL, etc are supported in [enterprise edition](https://actor.im/platform/enterprise).

If you have [PostgreSQL installed](install-psql.md), you need to create a database and user with superuser privilegies:

```
sudo -u postgres createuser --superuser <user>
sudo -u postgres psql postgres --command '\password <user>'
sudo -u postgres createdb <dbname> -O <user>
```
