
var pg = require('pg');
var client = new pg.Client("postgres://msetubdazzaoeh:tFnxTsFV4abVjFzkBrbFCsGpjX@ec2-107-21-221-59.compute-1.amazonaws.com:5432/d446894mce560p");
client.connect();
var fs  = require("fs");


var readlineSync = require('readline-sync');

var pid = readlineSync.question('May I have your ID? :');

var query = client.query("SELECT * FROM employee where county id=" +pid, function(err, results){
   	 if (err){
   	    throw err;
   	 }
   	 console.log(results.rows);
   });
