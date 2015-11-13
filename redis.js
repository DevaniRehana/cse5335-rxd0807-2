
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
		    		    
	
	
	var obj = arrObj[i];
	
	client.rpush([''+obj.id, obj.first_name,obj.last_name,obj.company_name,obj.address,obj.city,obj.county,obj.state,""+obj.zip], function(err, reply) {
    console.log("reply "+reply); //prints 2
    console.log(err);
});
	
	}
	
	console.log("printing all");
	client.get('*', function(err, valueStr) {
	console.log(valueStr);
	});
	
	client.quit(function (err, res) {
    console.log('Exiting from quit command.');
});

}
});
});
