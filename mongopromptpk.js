
    



var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://heroku_93gddv1q:i90vj85qr27o8a88106ql2glnj@ds049104.mongolab.com:49104/heroku_93gddv1q";
MongoClient.connect(url,function(err,db){
	console.log("connected correctly to server");
	
	
		var prompt = require('prompt');

		prompt.start();
   
       prompt.get(['id'], function (err, result) {
    		//console.log('Command-line input received:');
   		   console.log(' Results for id: ' + result.id);
  

var getById = function(db, callback) {
   var cursor =db.collection('employees').find([result.id]);
   //var cursor =db.collection('employees').find(['id']);
           console.log('inside cursor');

   cursor.each(function(err, doc) {

      assert.equal(err, null);
      if (doc != null) {
         console.log('inside if');

         console.dir(doc);
      } else {
         callback();
         console.log('inside else');

      }
   });
   
}


MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  getById(db, function() {
      db.close();
  });
});

});

});