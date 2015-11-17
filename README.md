                                CSE 5335
                            WEB DATA MANAGEMENT

                                PROJECT 2

NAME: REHANA DEVANI ID: 1001100807 NET ID: rxd0807

1.  What is your external data source used to populate your Heroku data
    sources?

I downloaded CSV file which has the attributes ID, first name, last
name, company name, address, city, county, state and zip. I stored it in
the folder along with all the Node.js scripts for creating, inserting
and retrieving records. Later I gave the path of my csv file (for
Postgres) and JSON file (for Mongodb and Redis).

2.  What are the Heroku toolbelt commands to execute the scripts?

Run the following commands to create,insert and retrieve data from
Postgres database:

node createPostgres.js

node postgres-insert.js

node postgres-retrieve-pk.js

node postgres-retrieve-city.js

npm install prompt

node prompt-postgres-pk.js

node prompt-postgres-city.js (Enter city as New York)

Run the following commands to create,insert and retrieve data from
MongoDB database:

npm install mongodb

node mongodb-insert.js

node mongodb-retrieve-pkey.js

node mongodb-retrieve-city.js

npm install prompt

node mongodb-prompt-pkey.js

node mongodb-prompt-city.js (Enter city as New York)

Run the following commands to create,insert and retrieve data from Redis
database:

npm install redis

npm install prompt

npm install redis-scanstreams

npm install stream-to-array

node redis-insert.js

node redis-retrieve-pkey.js

node redis-retrieve-city.js

node redis-prompt-pkey.js

node redis-prompt-city.js (Enter city as New York)

Following commands were used to commit, push the code to heroku and to
push to an existing repository on command line

// Manages the set of repositories ("remote") whose branches you track -
\$ git remote -v

// Adds file's content to the index - \$ git add .

// It commits or saves the changes made - \$ git commit -m “Demo”

// It pushes the code to Heroku after committing - \$ git push heroku
master

// Pushing an existing repository to github from command line - git
remote add origin https://github.com/DevaniRehana/cse5335-rxd0807-2.git
- git push -u origin master

3.  What aspect of the implementation did you find easy, if any, and
    why?

I found inserting data in all the three databases (i.e PostgreSQL,
mongoDB and Redis) quite easy. Retrieving data from PostgreSQL and
mongoDB using primary key and non-primary key was easy to implement once
I understood about how it works for one database.

4.  What aspect of the implementation did you find hard, if any, and
    why?

Retrieving data from Redis database using primary and non-primary key
was time-consuming because redis stores data in the form of key and
value pairs.

I was able to retrieve it later by using a scan function which retrieves
all the elements and then I looped through it to find the key value pair
which matched the output I desired and retrieved those key value pairs.
desired output.
