
var redis = require('redis');
var client = redis.createClient(6499, 'ec2-54-83-59-218.compute-1.amazonaws.com');
client.auth('p8naufj27ovrb0c31g4iru1gk18');


client.on('connect', function() {
    console.log('Connected to Redis');


   var fs  = require("fs");
   fs.readFile('./us.json', 'utf8', function(err,data){

		if(err)
		{
			console.log('err');
		}
		
		else {
		

			var arrObj = JSON.parse(data);
			
		    for (var i = 0; i < arrObj.length; i++) {
		    		    
	
	console.log(""+arrObj[i].id+" "+arrObj[i].first_name);
	var obj = arrObj[i];
	var id = obj["id"];
	delete obj["id"];
	var arrString = JSON.stringify(obj);
	
	console.log(encodeURIComponent(arrString));
	
	client.set([""+id, encodeURIComponent(arrString)],function(err,res){
	console.log(res);
	});
	
	
	}
	
	client.quit(function (err, res) {
    console.log('Exiting from quit command.');
});

}
});
});
