//Simplein-memoryratelimiterfordevelopment
//Inproduction,useRedisorexternalratelimitingservice
constrateLimitMap=newMap<string,{count:number;resetTime:number}>();

exportfunctionrateLimit(identifier:string,limit:number=100,window:number=15*60*1000):boolean{
constnow=Date.now();
constrecord=rateLimitMap.get(identifier);

if(!record||now>record.resetTime){
rateLimitMap.set(identifier,{count:1,resetTime:now+window});
returntrue;
}

if(record.count>=limit){
returnfalse;
}

record.count++;
returntrue;
}

exportfunctiongetRateLimitHeaders(identifier:string,limit:number=100,window:number=15*60*1000){
constrecord=rateLimitMap.get(identifier);
constnow=Date.now();

if(!record||now>record.resetTime){
return{
'X-RateLimit-Limit':limit.toString(),
'X-RateLimit-Remaining':(limit-1).toString(),
'X-RateLimit-Reset':Math.ceil((now+window)/1000).toString(),
};
}

return{
'X-RateLimit-Limit':limit.toString(),
'X-RateLimit-Remaining':Math.max(0,limit-record.count).toString(),
'X-RateLimit-Reset':Math.ceil(record.resetTime/1000).toString(),
};
}