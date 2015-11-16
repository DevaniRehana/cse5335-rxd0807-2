
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



