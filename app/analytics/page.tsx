import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function AnalyticsPage() {
const {userId} = await auth();

if (!userId) {
redirect('/sign-in');
}

return(
<div className="min-h-screenbg-gray-50">
{/*Header*/}
<header className="bg-whiteshadow-smborder-bborder-gray-200">
<div className="max-w-7xlmx-autopx-4sm:px-6lg:px-8">
<div className="flexjustify-betweenitems-centerh-16">
<div className="flexitems-centerspace-x-8">
<Link href="/dashboard"className="flexitems-center">
<h1 className="text-2xlfont-boldtext-gray-900">Percept</h1>
<span className="ml-2text-smtext-gray-500">Analytics</span>
</Link>
<nav className="hiddenmd:flexspace-x-6">
<Link href="/dashboard"className="text-gray-600hover:text-gray-900font-mediumtransition-colors">
Dashboard
</Link>
<Link href="/challenges"className="text-gray-600hover:text-gray-900font-mediumtransition-colors">
Challenges
</Link>
<Link href="/profile"className="text-gray-600hover:text-gray-900font-mediumtransition-colors">
Profile
</Link>
<Link href="/analytics"className="text-blue-600font-medium">
Analytics
</Link>
</nav>
</div>
<div className="flexitems-centerspace-x-4">
<UserButton
appearance={{
elements:{
avatarBox:"w-10h-10"
}
}}
/>
</div>
</div>
</div>
</header>

{/*MainContent*/}
<main className="max-w-7xlmx-autopx-4sm:px-6lg:px-8py-8">
<div className="mb-8">
<h2 className="text-3xlfont-boldtext-gray-900mb-2">
LearningAnalytics📊
</h2>
<p className="text-lgtext-gray-600">
Trackyourprogress,identifypatterns,andoptimizeyourlearningjourney.
</p>
</div>

{/*TimePeriodSelector*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-4mb-8">
<div className="flexitems-centerjustify-between">
<h3 className="text-lgfont-semiboldtext-gray-900">TimePeriod</h3>
<select className="borderborder-gray-300rounded-lgpx-3py-2focus:outline-nonefocus:ring-2focus:ring-blue-500">
<option>Last7days</option>
<option>Last30days</option>
<option>Last3months</option>
<option>Alltime</option>
</select>
</div>
</div>

{/*KeyMetrics*/}
<div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4gap-6mb-8">
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<div className="flexitems-centerjustify-between">
<div>
<p className="text-smfont-mediumtext-gray-600">TotalStudyTime</p>
<p className="text-2xlfont-boldtext-gray-900">42hours</p>
<p className="text-smtext-green-600">+8%fromlastweek</p>
</div>
<div className="w-12h-12bg-blue-100rounded-lgflexitems-centerjustify-center">
<span className="text-2xl">⏱️</span>
</div>
</div>
</div>

<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<div className="flexitems-centerjustify-between">
<div>
<p className="text-smfont-mediumtext-gray-600">AverageSession</p>
<p className="text-2xlfont-boldtext-gray-900">1.5hrs</p>
<p className="text-smtext-green-600">+12%improvement</p>
</div>
<div className="w-12h-12bg-green-100rounded-lgflexitems-centerjustify-center">
<span className="text-2xl">📈</span>
</div>
</div>
</div>

<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<div className="flexitems-centerjustify-between">
<div>
<p className="text-smfont-mediumtext-gray-600">SuccessRate</p>
<p className="text-2xlfont-boldtext-gray-900">85%</p>
<p className="text-smtext-red-600">-3%fromlastweek</p>
</div>
<div className="w-12h-12bg-purple-100rounded-lgflexitems-centerjustify-center">
<span className="text-2xl">🎯</span>
</div>
</div>
</div>

<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<div className="flexitems-centerjustify-between">
<div>
<p className="text-smfont-mediumtext-gray-600">HintsUsed</p>
<p className="text-2xlfont-boldtext-gray-900">23</p>
<p className="text-smtext-green-600">-15%independencegain</p>
</div>
<div className="w-12h-12bg-orange-100rounded-lgflexitems-centerjustify-center">
<span className="text-2xl">💡</span>
</div>
</div>
</div>
</div>

<div className="gridgrid-cols-1lg:grid-cols-2gap-8mb-8">
{/*ProgressChart*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<h3 className="text-lgfont-semiboldtext-gray-900mb-4">DailyProgress</h3>
<div className="h-64flexitems-endjustify-betweenspace-x-2">
{[
{day:'Mon',challenges:2,time:120},
{day:'Tue',challenges:1,time:90},
{day:'Wed',challenges:3,time:180},
{day:'Thu',challenges:0,time:0},
{day:'Fri',challenges:2,time:150},
{day:'Sat',challenges:4,time:240},
{day:'Sun',challenges:1,time:60}
].map((data,index)=>(
<divkey={index}className="flexflex-colitems-centerflex-1">
<div className="w-fullbg-blue-100rounded-t-lgrelativemb-2"style={{height:`${Math.max(data.time/2.4,10)}px`}}>
<div className="absoluteinset-0bg-blue-600rounded-t-lg"style={{height:`${data.challenges*20}%`}}></div>
</div>
<span className="text-xstext-gray-600">{data.day}</span>
<span className="text-xstext-gray-500">{data.challenges}ch</span>
</div>
))}
</div>
<div className="mt-4flexitems-centerspace-x-4text-sm">
<div className="flexitems-center">
<div className="w-3h-3bg-blue-600roundedmr-2"></div>
<span className="text-gray-600">ChallengesCompleted</span>
</div>
<div className="flexitems-center">
<div className="w-3h-3bg-blue-100roundedmr-2"></div>
<span className="text-gray-600">StudyTime(minutes)</span>
</div>
</div>
</div>

{/*SkillDistribution*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<h3 className="text-lgfont-semiboldtext-gray-900mb-4">SkillDistribution</h3>
<div className="space-y-4">
{[
{skill:'JavaScript',percentage:85,color:'bg-yellow-500'},
{skill:'React',percentage:70,color:'bg-cyan-500'},
{skill:'CSS',percentage:90,color:'bg-blue-500'},
{skill:'TypeScript',percentage:60,color:'bg-blue-600'},
{skill:'Node.js',percentage:45,color:'bg-green-500'},
{skill:'APIs',percentage:55,color:'bg-purple-500'}
].map((skill,index)=>(
<divkey={index}className="flexitems-center">
<div className="w-20text-smfont-mediumtext-gray-700">{skill.skill}</div>
<div className="flex-1mx-4">
<div className="w-fullbg-gray-200rounded-fullh-3">
<div
className={`${skill.color}h-3rounded-fulltransition-allduration-300`}
style={{width:`${skill.percentage}%`}}
></div>
</div>
</div>
<div className="w-12text-smtext-gray-600text-right">{skill.percentage}%</div>
</div>
))}
</div>
</div>
</div>

<div className="gridgrid-cols-1lg:grid-cols-2gap-8mb-8">
{/*LearningPatterns*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<h3 className="text-lgfont-semiboldtext-gray-900mb-4">LearningPatterns</h3>
<div className="space-y-4">
<div className="p-4bg-blue-50rounded-lgborderborder-blue-200">
<h4 className="font-mediumtext-blue-900mb-1">PeakPerformanceTime</h4>
<p className="text-blue-700text-sm">Youperformbestbetween2PM-4PMwith92%successrate</p>
</div>

<div className="p-4bg-green-50rounded-lgborderborder-green-200">
<h4 className="font-mediumtext-green-900mb-1">StrongestTechnology</h4>
<p className="text-green-700text-sm">CSS-90%masterylevelwithconsistentimprovement</p>
</div>

<div className="p-4bg-yellow-50rounded-lgborderborder-yellow-200">
<h4 className="font-mediumtext-yellow-900mb-1">GrowthOpportunity</h4>
<p className="text-yellow-700text-sm">Node.jschallengesshowthemostpotentialforskilldevelopment</p>
</div>

<div className="p-4bg-purple-50rounded-lgborderborder-purple-200">
<h4 className="font-mediumtext-purple-900mb-1">LearningStyle</h4>
<p className="text-purple-700text-sm">Youpreferintermediatechallengesandusehintsstrategically</p>
</div>
</div>
</div>

{/*RecentAchievements*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<h3 className="text-lgfont-semiboldtext-gray-900mb-4">RecentAchievements</h3>
<div className="space-y-4">
{[
{
date:'Dec20,2024',
achievement:'JavaScriptNinja',
description:'Completed5JavaScriptchallenges',
points:250,
icon:'⚡'
},
{
date:'Dec18,2024',
achievement:'StreakMaster',
description:'Maintained7-daylearningstreak',
points:100,
icon:'🔥'
},
{
date:'Dec15,2024',
achievement:'FirstSteps',
description:'Completedyourfirstchallenge',
points:50,
icon:'🎯'
}
].map((achievement,index)=>(
<divkey={index}className="flexitems-centerp-3bg-green-50rounded-lgborderborder-green-200">
<div className="text-2xlmr-3">{achievement.icon}</div>
<div className="flex-1">
<h4 className="font-mediumtext-green-900">{achievement.achievement}</h4>
<p className="text-smtext-green-700">{achievement.description}</p>
<p className="text-xstext-green-600">{achievement.date}</p>
</div>
<div className="text-right">
<span className="text-smfont-semiboldtext-green-600">+{achievement.points}XP</span>
</div>
</div>
))}
</div>
</div>
</div>

{/*GoalSetting*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<h3 className="text-lgfont-semiboldtext-gray-900mb-4">LearningGoals</h3>
<div className="gridgrid-cols-1md:grid-cols-3gap-6">
<div className="p-4border-2border-dashedborder-blue-300rounded-lgtext-center">
<div className="text-3xlmb-2">🎯</div>
<h4 className="font-semiboldtext-gray-900mb-1">WeeklyGoal</h4>
<p className="text-smtext-gray-600mb-3">Complete5challengesthisweek</p>
<div className="w-fullbg-gray-200rounded-fullh-2mb-2">
<div className="bg-blue-600h-2rounded-full"style={{width:'60%'}}></div>
</div>
<p className="text-xstext-gray-600">3of5completed</p>
</div>

<div className="p-4border-2border-dashedborder-green-300rounded-lgtext-center">
<div className="text-3xlmb-2">📈</div>
<h4 className="font-semiboldtext-gray-900mb-1">SkillGoal</h4>
<p className="text-smtext-gray-600mb-3">Reach70%inTypeScript</p>
<div className="w-fullbg-gray-200rounded-fullh-2mb-2">
<div className="bg-green-600h-2rounded-full"style={{width:'86%'}}></div>
</div>
<p className="text-xstext-gray-600">60%of70%target</p>
</div>

<div className="p-4border-2border-dashedborder-purple-300rounded-lgtext-center">
<div className="text-3xlmb-2">🏆</div>
<h4 className="font-semiboldtext-gray-900mb-1">AchievementGoal</h4>
<p className="text-smtext-gray-600mb-3">Earn"ProblemSolver"badge</p>
<div className="w-fullbg-gray-200rounded-fullh-2mb-2">
<div className="bg-purple-600h-2rounded-full"style={{width:'70%'}}></div>
</div>
<p className="text-xstext-gray-600">7of10challengeswithouthints</p>
</div>
</div>
</div>
</main>
</div>
);
}