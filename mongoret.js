

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://heroku_93gddv1q:i90vj85qr27o8a88106ql2glnj@ds049104.mongolab.com:49104/heroku_93gddv1q";
MongoClient.connect(url,function(err,db){
	console.log("connected correctly to server");
	
	
	function getName(callback){
    db.employees.find({name: "Arlene"}, function(err, objs){
        var returnable_name;
        if (objs.length == 1)
        {
            returnable_name = objs[0].name;
            console.log(returnable_name); 
            callback(returnable_name);
        }
    });
}