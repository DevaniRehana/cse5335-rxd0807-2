




var pg = require('pg');
var client = new pg.Client("postgres://msetubdazzaoeh:tFnxTsFV4abVjFzkBrbFCsGpjX@ec2-107-21-221-59.compute-1.amazonaws.com:5432/d446894mce560p");
client.connect();
var fs  = require("fs");


   
    var query = client.query("SELECT * FROM employee where county like 'New York'", function(err, results){
   	 if (err){
   	    throw err;
   	 }
   	 console.log(results.rows);

     
   });
          
    
    
    

