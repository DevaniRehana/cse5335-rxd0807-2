




var redis = require('redis');
var client = redis.createClient(6499, 'ec2-54-83-59-218.compute-1.amazonaws.com');
client.auth('p8naufj27ovrb0c31g4iru1gk18');


client.on('connect', function() {
console.log('Connected to Redis');


client.lrange('156', 0, -1, function(err, reply) {
    console.log(reply); // ['angularjs', 'backbone']
});

client.lrange('157', 0, -1, function(err, reply) {
    console.log(reply); // ['angularjs', 'backbone']
});


client.hgetall('158', function(err, object) {
    console.log(object);
});

client.hgetall('159', function(err, object) {
    console.log(object);
});



});