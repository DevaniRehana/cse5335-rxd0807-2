
var pg = require('pg');
pg.connect("postgres://msetubdazzaoeh:tFnxTsFV4abVjFzkBrbFCsGpjX@ec2-107-21-221-59.compute-1.amazonaws.com:5432/d446894mce560p", function(err, client) {
  
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');
  console.log('Creating table...\n');

    client
    .query("CREATE TABLE IF NOT EXISTS employee(id serial primary key, first_name varchar(64), last_name varchar(64), company_name varchar(64), address varchar(64), city varchar(64), county varchar(64), state varchar(64) , zip varchar(8))");
    console.log('table created');
});
