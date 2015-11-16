


var redis = require('redis');

var client = redis.createClient(18199, 'ec2-54-83-9-36.compute-1.amazonaws.com');

client.auth('p7ue7eg7cab4re7m4qejdl08p3s');



     client.on('connect', function() {
     console.log('Connected to Redis');



	client.hgetall('100', function(err, object) {
    console.log(object);
	});


});