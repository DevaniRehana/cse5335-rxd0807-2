
var pg = require('pg');
var client = new pg.Client("postgres://msetubdazzaoeh:tFnxTsFV4abVjFzkBrbFCsGpjX@ec2-107-21-221-59.compute-1.amazonaws.com:5432/d446894mce560p");
client.connect();
var fs  = require("fs");

fs.readFileSync('./us.csv').toString().split('\n').forEach(function (line) { 
   //console.log(line);
    str = line;
    var arr = str.split(",");
    
   
    /*
    var query = client.query("INSERT into employee(first_name,last_name,company_name,address,city,county,state,zip) VALUES($1, $2, $3, $4, $5, $6, $7, $8)", [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7]]);
            query.on('row', function(err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('row inserted with id: ' + result.rows[0].id);
                }

                count++;
                console.log('count = ' + count);
                if (count == 100) {
                    console.log('Client will end now!!!');
                    client.end();
                }
            });    
            console.log("Rows in table successfully inserted. Congrats!!!");  
    
    */
    client.query("DROP TABLE IF EXISTS employee");
    console.log("Table successfully deleted");
    
    
});
