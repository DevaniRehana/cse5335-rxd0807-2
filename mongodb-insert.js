
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
	      var doc1 = {
			_id: arr[i].id,
			first_name: arr[i].first_name,
			last_name: arr[i].last_name,
			company_name: arr[i].company_name,
			address: arr[i].address,
			city: arr[i].city,
			country: arr[i].country,
			state: arr[i].state,
			zip : arr[i].zip
			
			}
			
      	  db.collection('employees').insertOne(doc1, function(err,result){
       		 if(err){
        
             console.log('err'); 
             }
        
             else{
             //console.log(result);
             console.log("Successfully inserted");
		      }
		});
	 }
   }
});	
});