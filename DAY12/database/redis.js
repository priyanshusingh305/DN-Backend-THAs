// redis store
// redis client
const redis = require("redis");
const connectRedis =require("express-session");
const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
    host:"localhost",
    port: 6379
});

redisClient.on('error',function (err){
    console.error('could not connect to redis', err);
});

redisClient.on('connect', function(){
    console.error('connected to redis');

});