import{clerkMiddleware,createRouteMatcher}from'@clerk/nextjs/server';
import{NextResponse}from'next/server';
importtype{NextRequest}from'next/server';
import{rateLimit,getRateLimitHeaders}from'./lib/rate-limiter';

constisProtectedRoute=createRouteMatcher([
'/dashboard(.*)',
'/challenges(.*)',
'/profile(.*)',
'/analytics(.*)',
]);

constisPublicApiRoute=createRouteMatcher([
'/api/public(.*)',
]);

functiongetClientIP(request:NextRequest):string{
constxForwardedFor=request.headers.get('x-forwarded-for');
constxRealIp=request.headers.get('x-real-ip');
constcfConnectingIp=request.headers.get('cf-connecting-ip');

if(xForwardedFor){
returnxForwardedFor.split(',')[0].trim();
}
if(xRealIp){
returnxRealIp;
}
if(cfConnectingIp){
returncfConnectingIp;
}

return'unknown';
}

exportdefaultclerkMiddleware(async(auth,req)=>{
try{
constip=getClientIP(req);
consturl=req.nextUrl.pathname;

if(url.startsWith('/api')||url.startsWith('/sign-')||isPublicApiRoute(req)){
constidentifier=`${ip}:${url}`;
constlimit=url.startsWith('/api')?60:30;

if(!rateLimit(identifier,limit)){
constheaders=getRateLimitHeaders(identifier,limit);
returnnewNextResponse(
JSON.stringify({
error:'Toomanyrequests',
message:'Ratelimitexceeded.Pleasetryagainlater.'
}),
{
status:429,
headers:{
'Content-Type':'application/json',
...headers,
}
}
);
}

constresponse=NextResponse.next();
constheaders=getRateLimitHeaders(identifier,limit);
Object.entries(headers).forEach(([key,value])=>{
response.headers.set(key,value);
});
}

if(isProtectedRoute(req)){
awaitauth.protect();
}

returnNextResponse.next();
}catch(error){
if(errorinstanceofError&&error.message.includes('NEXT_REDIRECT')){
//Re-throwtheredirecterrortoletNext.jshandleit
throwerror;
}
console.error('Middlewareerror:',error);

returnnewNextResponse(
JSON.stringify({
error:'Internalservererror',
message:'Somethingwentwrong.Pleasetryagain.'
}),
{
status:500,
headers:{'Content-Type':'application/json'}
}
);
}
});

exportconstconfig={
matcher:[
'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
'/(api|trpc)(.*)',
],
};
