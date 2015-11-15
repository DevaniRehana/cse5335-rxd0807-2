
var redis = require('redis');

var redis_scanner = require('redis-scanstreams')(redis);

var client = redis.createClient(18199, 'ec2-54-83-9-36.compute-1.amazonaws.com');

client.auth('p7ue7eg7cab4re7m4qejdl08p3s');

//redis_scanner.bindScanners(client);


client.on('connect', function() {
console.log('Connected to Redis');

/*
client.lrange('156', 0, -1, function(err, reply) {
    console.log(reply); // ['angularjs', 'backbone']
});

client.lrange('157', 0, -1, function(err, reply) {
    console.log(reply); // ['angularjs', 'backbone']
});


client.hgetall('1', function(err, object) {
    console.log(object);
});

*/


client.keys('*', function (keys) {
        for (key in keys) {
           console.log("key "+key);
        }
     });

client.hgetall('*', function(err, object) {
    console.log(object);
    
});


/*
client.scan([], function(result){
 console.log(result);
}, function(err){
 
});


*/
var toArray = require('stream-to-array')
 
toArray(client.scan(), function(err, arr) {
  if (err)
    throw err;
 for (key in arr)
 {
 	client.hgetall(key, function(err, object) {
 	
 	console.log(object);
 	
 	object.keys(a).map(function(key){
 	console.log(key);
 	});
 	
    
    
});
 }
 
  console.log(arr)
})
});

