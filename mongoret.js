

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = "mongodb://heroku_93gddv1q:i90vj85qr27o8a88106ql2glnj@ds049104.mongolab.com:49104/heroku_93gddv1q";
MongoClient.connect(url,function(err,db){
	console.log("connected correctly to server");
	

var getByName = function(db, callback) {
   var cursor =db.collection('employees').find({"first_name":"James"});
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
         console.dir(doc);
      } else {
         callback();
      }
   });
   
}




MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  getByName(db, function() {
      db.close();
  });
});

});