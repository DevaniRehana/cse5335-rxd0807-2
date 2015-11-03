
/*

#!/usr/bin/env node

var pg = require("pg");

var conString = "pg://msetubdazzaoeh:tFnxTsFV4abVjFzkBrbFCsGpjX@ec2-107-21-221-59.compute-1.amazonaws.com:5432/d446894mce560p";

var client = new pg.Client(conString);
client.connect();

client.query("CREATE TABLE IF NOT EXISTS emps(first_name varchar(64), last_name varchar(64), company_name varchar(64), address varchar(64), city varchar(64), county varchar(64), state varchar(64), zip varchar(8), phone1 varchar(15), email varchar(64), web citext )");

*/


var pg = require('pg');

pg.connect("postgres://msetubdazzaoeh:tFnxTsFV4abVjFzkBrbFCsGpjX@ec2-107-21-221-59.compute-1.amazonaws.com:5432/d446894mce560p", function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT table_schema,table_name FROM information_schema.tables;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});