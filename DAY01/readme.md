For Strings
```
SET key value
GET key
ttl key
KEYS *
DEL key
FLUSHALL
EXISTS key
expire key time
setex key time value
```
For Arrays
```
LPUSH array value
RPUSH array value
LRANGE array start stop
LPOP array
RPOP array
```
For Sets
```
SADD myset value
SMEMBERS myset
For Object/Hash

HSET key field value
HGET key field
HGETALL key
HDEL key field
HEXISTS key field
```
Few extra things I explored related to Redis besides what was discussed:
If you want to update the value of a pre-existing key, write the same set command again with the key name and just change the value to whatever you want now. This logic will work for every data type: string, hash, set, array.

To add an element in a set, we use SADD. Similarly, the command to remove an element from the set:

srem keyname(basically the set's name) valueToBeRemoved

We can use the "keys *" statement to get a list of all the keys stored in our Redis memory store. But, there's no such command if you want to have a list of both keys and their values together.
PostgreSQL
Get started:
-> sudo service postgresql start
-> psql -U postgres


While running the second command, if you face any issues like Peer authentication failed, try these:
-> sudo service postgresql start
-> sudo su postgres
-> psql

This will connect you to the user postgres and the database postgres. The connection type will be local and the method will be peer.

-> Check list of databases: \l
-> Check list of users: \du
-> Check the current user and database: \conninfo
-> Select/connect to a desired database: \c {dbname}
(If no database name is provided connects to default user "postgres" and database "postgres")


-> Create a user: create user {user-name} with password {pass in ''};
(wont work for "")
-> Create a database: create database {db}


-> Give permissions to the user: grant {delete/select/insert/update/all...} privileges on database {database} to {user};
-> View granted permissions for the users: \l


-> Delete a database: drop database {db};
-> Delete an user: drop use {user-name};


-> Create a table: create table {tablename}({Column Name} {Data Type} {Constraint});
-> List tables: \d
-> View table's data: \d {tablename}
-> Drop a table: drop table {tablename}\