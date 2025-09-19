import{NextRequest,NextResponse}from'next/server';
import{auth}from'@clerk/nextjs/server';

exportasyncfunctionGET(request:NextRequest){
try{
const{userId}=awaitauth();

if(!userId){
returnNextResponse.json(
{error:'Unauthorized'},
{status:401}
);
}

//Mockuserstats-inproduction,thiswouldfetchfromyourdatabase
constuserStats={
userId,
challengesCompleted:12,
totalPoints:1420,
currentStreak:7,
skillsMastered:5,
totalHours:42,
successRate:85,
hintsUsed:23,
lastActive:newDate().toISOString(),
achievements:[
{id:1,name:'JavaScriptNinja',earned:true,date:'2024-12-20'},
{id:2,name:'StreakMaster',earned:true,date:'2024-12-18'},
{id:3,name:'FirstSteps',earned:true,date:'2024-12-15'}
]
};

returnNextResponse.json(userStats);
}catch(error){
console.error('Userstatserror:',error);
returnNextResponse.json(
{error:'Internalservererror'},
{status:500}
);
}
}