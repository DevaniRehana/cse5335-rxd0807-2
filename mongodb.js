
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
db.close;
  });
