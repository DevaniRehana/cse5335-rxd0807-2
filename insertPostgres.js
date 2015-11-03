


var pg = require('pg');

pg.connect("postgres://msetubdazzaoeh:tFnxTsFV4abVjFzkBrbFCsGpjX@ec2-107-21-221-59.compute-1.amazonaws.com:5432/d446894mce560p", function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');



client
.query('(copy emp(id,first_name,last_name,company_name,address,city,county,state,zip,phone1,email) FROM '/us-500.csv' DELIMITER AS ',' CSV)');

});