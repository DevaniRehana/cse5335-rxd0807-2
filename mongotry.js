

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://heroku_93gddv1q:i90vj85qr27o8a88106ql2glnj@ds049104.mongolab.com:49104/heroku_93gddv1q";
MongoClient.connect(url,function(err,db){
	console.log("connected correctly to server");
	//db.close();
   
  
   
   db.createCollection("employees"); 
   console.log('Table created!');
   
   var fs  = require("fs");
   fs.readFile('./us.json', 'utf8', function(err,data){

		if(err)
		{
			console.log('err');
		}
		else
		{
			var arr = JSON.parse(data);
		    for (var i = 0; i < arr.length; i++) {
      	    db.collection('employees').insertOne(arr[i], function(err,result){
       		 if(err)
        {
        console.log('err');
        }
        else{
        console.log(result);
        console.log("Successfully inserted");
		}
		});
		}
		}
	});	
   
});