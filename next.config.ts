importtype{NextConfig}from"next";

constnextConfig:NextConfig={
/*configoptionshere*/
asyncredirects(){
return[
{
source:'/',
destination:'/dashboard',
permanent:false,
has:[
{
type:'cookie',
key:'__session',
},
],
},
];
},
};

exportdefaultnextConfig;
