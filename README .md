                    			CSE 5335
                			WEB DATA MANAGEMENT

                    			PROJECT 2

NAME: REHANA DEVANI
ID: 1001100807
NET ID: rxd0807

1.  What is your external data source used to populate your Heroku data
    sources?

I downloaded the data and stored it in the folder along with all the
scripts for creating, inserting and retrieving records. Later I gave the
path of my csv file (for Postgres) and JSON file (for Mongodb and
Redis).

2.  What are the Heroku toolbelt commands to execute the scripts?

Run the following commands to create,insert and retrieve data from
Postgres database:

node createPostgres.js

(Before running the above command to create a table, run the below command to drop the 
existing table and uncomment the drop query in the below script)


node postgres-insert.js

node postgres-retrieve-pk.js

node postgres-retrieve-city.js

npm install prompt

prompt-postgres-pk.js

prompt-postgres-city.js

Run the following commands to create,insert and retrieve data from
MongoDB database:

npm install mongodb

node mongodb-insert.js

node mongodb-retrieve-pkey.js

node mongodb-retrieve-city.js

npm install prompt

node mongodb-prompt-pkey.js

node mongodb-prompt-city.js

Run the following commands to create,insert and retrieve data from Redis
database:

npm install redis

npm install prompt

npm install redis-scanstreams

npm install stream-to-array

node redis-retrieve-pkey.js

node redis-retrieve-city.js

node redis-prompt-pkey.js

node redis-prompt-city.js

3.  What aspect of the implementation did you find easy, if any, and
    why?

I found inserting data in all the three databases i.e PostgreSQL,
mongoDB and Redis easy. Retrieving data from PostgreSQL and mongoDB
using primary key and non-primary key was easy to implement once I
understood about how it works for one database.

4.  What aspect of the implementation did you find hard, if any, and
    why?

Retrieving data from Redis database using primary and non-primary key
was time-consuming because redis stores data in the form of key and
value pairs.

I was able to retrieve it later by writing a for loop that loops through
all the key and value pairs and by I wrote a if condition to get the
desired output.
