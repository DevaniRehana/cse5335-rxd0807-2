
var redis = require('redis');
var client = redis.createClient(18199, 'ec2-54-83-9-36.compute-1.amazonaws.com');
client.auth('p7ue7eg7cab4re7m4qejdl08p3s');


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
	/*
	client.rpush([''+obj.id, obj.first_name,obj.last_name,obj.company_name,obj.address,obj.city,obj.county,obj.state,""+obj.zip], function(err, reply) {
    console.log("reply "+reply); //prints 2
    console.log(err);
});
	*/
	
	
	client.hmset(''+obj.id, obj, function(err, object) {
    console.log(object);
});
	
	}
	
	client.quit(function (err, res) {
    console.log('Exiting from quit command.');
});

}
});
});