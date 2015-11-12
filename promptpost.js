
var pg = require('pg');
var client = new pg.Client("postgres://msetubdazzaoeh:tFnxTsFV4abVjFzkBrbFCsGpjX@ec2-107-21-221-59.compute-1.amazonaws.com:5432/d446894mce560p");
client.connect();
var fs  = require("fs");
var prompt = require('prompt');

prompt.start();


    
    
   
     prompt.get(['id', 'city'], function (err, result) {
    
    console.log('Command-line input received:');
    console.log('  id: ' + result.id);
    console.log('  city: ' + result.city);
  });




    

