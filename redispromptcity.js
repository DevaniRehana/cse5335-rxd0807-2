
var redis = require('redis');

var redis_scanner = require('redis-scanstreams')(redis);

var client = redis.createClient(18199, 'ec2-54-83-9-36.compute-1.amazonaws.com');

client.auth('p7ue7eg7cab4re7m4qejdl08p3s');


client.on('connect', function() {
console.log('Connected to Redis');



		var prompt = require('prompt');

		prompt.start();
   
        prompt.get(['city'], function (err, result) {
        console.log(' Results for city: ' + result.city);
  


        var toArray = require('stream-to-array')
 
        toArray(client.scan(), function(err, arr) {
            if (err)
            throw err;
            
        for (key in arr)
        {
 	        client.hgetall(key, function(err, object) {
 	        //console.log(object);
 	
 	        for (var key in object) {
 			//console.log(key);
 	        var value = object[key];
 			//console.log(object[a]);
 	
 	          if(key=="city" && value==result.city){
 	          console.log(object);
 	          }
 	
 	        }
 	
    
    
         });
      }
 
  console.log(arr)
     })

   });
});

