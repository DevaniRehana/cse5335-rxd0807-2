
var connect = require('connect');
var mongodb = require('mongodb');
 
 mongodb.connect('mongodb://heroku_93gddv1q:i90vj85qr27o8a88106ql2glnj@ds049104.mongolab.com:49104/heroku_93gddv1q', function(err,db){
 
 if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established. Congrats!!!');
    //db.close();
  }
  
db.createCollection("employees"); 
console.log('Table created!');
  

var fs  = require("fs");

//var mydocuments = fs.readFile('us.json', 'utf8', function (err, data) {

fs.readFileSync('./us.csv').toArray().split('\n').forEach(function (err,line) { 
      if (err) {
               console.log(err);
                }
     else{
          var arr = line.split(",");
  
   console.log(arr[0]);
   console.log(arr);
   }

     collection.insert(arr, function(err, docs) { 
     if (err) {
                    console.log(err);
                } else {
                    console.log('successfully inserted');
                }
           
            db.close();
        });
    });

});