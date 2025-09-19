import{supabase}from'./supabase';

exportinterfaceUserProfile{
id:string;
clerk_user_id:string;
email:string;
username?:string;
full_name?:string;
avatar_url?:string;
created_at:string;
updated_at:string;
last_seen_at:string;
is_active:boolean;
preferences:Record<string,unknown>;
}

exportinterfaceChallenge{
id:string;
title:string;
slug:string;
description:string;
difficulty_level:number;
category_id:string;
technology_id:string;
problem_statement:string;
requirements:string[];
starter_code?:string;
solution_template?:string;
test_cases:unknown[];
validation_criteria:Record<string,unknown>;
hint_system:unknown[];
estimated_time_minutes?:number;
points:number;
tags:string[];
prerequisites:string[];
is_published:boolean;
created_at:string;
updated_at:string;
}

exportinterfaceUserProgress{
id:string;
user_id:string;
challenge_id:string;
status:'not_started'|'in_progress'|'completed'|'submitted';
current_code?:string;
completion_percentage:number;
started_at?:string;
completed_at?:string;
time_spent_minutes:number;
submission_count:number;
last_submission_at?:string;
best_score:number;
hints_used:number;
ai_interactions:unknown[];
created_at:string;
updated_at:string;
}

exportclassPerceptAPI{
/**
*CreateorupdateuserprofilefromClerkdata
*/
staticasynccreateOrUpdateUser(clerkUser:{
id:string;
emailAddresses:{emailAddress:string}[];
username?:string;
fullName?:string;
imageUrl?:string;
}):Promise<UserProfile|null>{
try{
constuserData={
clerk_user_id:clerkUser.id,
email:clerkUser.emailAddresses[0]?.emailAddress,
username:clerkUser.username,
full_name:clerkUser.fullName,
avatar_url:clerkUser.imageUrl,
last_seen_at:newDate().toISOString(),
};

const{data,error}=awaitsupabase
.from('users')
.upsert(userData,{
onConflict:'clerk_user_id',
ignoreDuplicates:false,
})
.select()
.single();

if(error){
console.error('Errorcreating/updatinguser:',error);
returnnull;
}

returndata;
}catch(error){
console.error('ErrorincreateOrUpdateUser:',error);
returnnull;
}
}

/**
*GetuserprofilebyClerkID
*/
staticasyncgetUserByClerkId(clerkUserId:string):Promise<UserProfile|null>{
try{
const{data,error}=awaitsupabase
.from('users')
.select('*')
.eq('clerk_user_id',clerkUserId)
.single();

if(error){
console.error('Errorfetchinguser:',error);
returnnull;
}

returndata;
}catch(error){
console.error('ErroringetUserByClerkId:',error);
returnnull;
}
}

/**
*Getalltechnologies
*/
staticasyncgetTechnologies(){
try{
const{data,error}=awaitsupabase
.from('technologies')
.select('*')
.eq('is_active',true)
.order('difficulty_level',{ascending:true});

if(error){
console.error('Errorfetchingtechnologies:',error);
return[];
}

returndata||[];
}catch(error){
console.error('ErroringetTechnologies:',error);
return[];
}
}

/**
*Getchallengesbytechnology
*/
staticasyncgetChallengesByTechnology(technologyId:string,difficulty?:number){
try{
letquery=supabase
.from('challenges')
.select(`
*,
technologies(name,slug),
challenge_categories(name,slug)
`)
.eq('technology_id',technologyId)
.eq('is_published',true);

if(difficulty){
query=query.eq('difficulty_level',difficulty);
}

const{data,error}=awaitquery.order('created_at',{ascending:false});

if(error){
console.error('Errorfetchingchallenges:',error);
return[];
}

returndata||[];
}catch(error){
console.error('ErroringetChallengesByTechnology:',error);
return[];
}
}

/**
*Getuserprogressforchallenges
*/
staticasyncgetUserProgress(userId:string,challengeId?:string){
try{
letquery=supabase
.from('user_challenge_progress')
.select(`
*,
challenges(title,slug,difficulty_level,points)
`)
.eq('user_id',userId);

if(challengeId){
query=query.eq('challenge_id',challengeId);
}

const{data,error}=awaitquery.order('updated_at',{ascending:false});

if(error){
console.error('Errorfetchinguserprogress:',error);
return[];
}

returndata||[];
}catch(error){
console.error('ErroringetUserProgress:',error);
return[];
}
}

/**
*Updateuserprogressforachallenge
*/
staticasyncupdateChallengeProgress(
userId:string,
challengeId:string,
updates:Partial<UserProgress>
){
try{
const{data,error}=awaitsupabase
.from('user_challenge_progress')
.upsert({
user_id:userId,
challenge_id:challengeId,
...updates,
updated_at:newDate().toISOString(),
},{
onConflict:'user_id,challenge_id',
ignoreDuplicates:false,
})
.select()
.single();

if(error){
console.error('Errorupdatingchallengeprogress:',error);
returnnull;
}

returndata;
}catch(error){
console.error('ErrorinupdateChallengeProgress:',error);
returnnull;
}
}

/**
*Submitcodeforachallenge
*/
staticasyncsubmitCode(
userId:string,
challengeId:string,
code:string,
language:string
){
try{
const{data,error}=awaitsupabase
.from('code_submissions')
.insert({
user_id:userId,
challenge_id:challengeId,
submitted_code:code,
language:language,
submitted_at:newDate().toISOString(),
})
.select()
.single();

if(error){
console.error('Errorsubmittingcode:',error);
returnnull;
}

returndata;
}catch(error){
console.error('ErrorinsubmitCode:',error);
returnnull;
}
}

/**
*Getuseranalyticsandstats
*/
staticasyncgetUserStats(userId:string){
try{
//Getbasicprogressstats
const{data:progressData,error:progressError}=awaitsupabase
.from('user_challenge_progress')
.select('status,best_score,time_spent_minutes,challenge_id')
.eq('user_id',userId);

if(progressError){
console.error('Errorfetchingprogressstats:',progressError);
returnnull;
}

//Calculatestats
consttotalChallenges=progressData?.length||0;
constcompletedChallenges=progressData?.filter(p=>p.status==='completed').length||0;
consttotalPoints=progressData?.reduce((sum,p)=>sum+(p.best_score||0),0)||0;
consttotalTimeMinutes=progressData?.reduce((sum,p)=>sum+(p.time_spent_minutes||0),0)||0;

//Getrecentactivityforstreakcalculation
const{data:analyticsData}=awaitsupabase
.from('user_analytics')
.select('date,challenges_completed')
.eq('user_id',userId)
.gte('date',newDate(Date.now()-30*24*60*60*1000).toISOString().split('T')[0])
.order('date',{ascending:false});

letcurrentStreak=0;
if(analyticsData&&analyticsData.length>0){
//Calculatestreakfromrecentdays
consttoday=newDate().toISOString().split('T')[0];
constcheckDate=newDate();

for(leti=0;i<30;i++){
constdateStr=checkDate.toISOString().split('T')[0];
constdayData=analyticsData.find(d=>d.date===dateStr);

if(dayData&&dayData.challenges_completed>0){
currentStreak++;
}elseif(dateStr!==today){
//Ifnoactivityandnottoday,breakstreak
break;
}

checkDate.setDate(checkDate.getDate()-1);
}
}

return{
totalChallenges,
completedChallenges,
totalPoints,
totalTimeMinutes,
currentStreak,
completionRate:totalChallenges>0?(completedChallenges/totalChallenges)*100:0,
};
}catch(error){
console.error('ErroringetUserStats:',error);
returnnull;
}
}
}