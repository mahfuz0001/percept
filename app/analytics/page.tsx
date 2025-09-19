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
<div className="min-h-screenb g-gra y-50">
{/*Header*/}
<header className="bg-whiteshado w-smborde r-bborde r-gra y-200">
<div className="max-w-7xlm x-autop x-4sm:px-6lg:px-8">
<div className="flexjustify-betweenitem s-center h-16">
<div className="flexitems-centerspac e-x-8">
<Link href="/dashboard" className="flexitems-center">
<h1 className="text-2xlfon t-boldtex t-gra y-900">Percept</h1>
<span className="ml-2tex t-smtex t-gra y-500">Analytics</span>
</Link>
<nav className="hiddenmd:flexspace-x-6">
<Link href="/dashboard" className="text-gra y-600hover:text-gra y-900fon t-mediumtransitio n-colors">
Dashboard
</Link>
<Link href="/challenges" className="text-gra y-600hover:text-gra y-900fon t-mediumtransitio n-colors">
Challenges
</Link>
<Link href="/profile" className="text-gra y-600hover:text-gra y-900fon t-mediumtransitio n-colors">
Profile
</Link>
<Link href="/analytics" className="text-blu e-600fon t-medium">
Analytics
</Link>
</nav>
</div>
<div className="flexitems-centerspac e-x-4">
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
<main className="max-w-7xlm x-autop x-4sm:px-6lg:px-8p y-8">
<div className="mb-8">
<h2 className="text-3xlfon t-boldtex t-gra y-900m b-2">
LearningAnalytics📊
</h2>
<p className="text-lgtex t-gra y-600">
Trackyourprogress,identifypatterns,andoptimizeyourlearningjourney.
</p>
</div>

{/*TimePeriodSelector*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-4m b-8">
<div className="flexitems-centerjustif y-between">
<h3 className="text-lgfon t-semiboldtex t-gra y-900">TimePeriod</h3>
<select className="border border-gra y-300rounde d-lgp x-3p y-2focus:outline-nonefocus:ring-2focus:ring-blue-500">
<option>Last7days</option>
<option>Last30days</option>
<option>Last3months</option>
<option>Alltime</option>
</select>
</div>
</div>

{/*KeyMetrics*/}
<div className="gridgrid-col s-1md:grid-col s-2lg:grid-col s-4ga p-6mb-8">
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<div className="flexitems-centerjustif y-between">
<div>
<p className="text-smfon t-mediumtex t-gra y-600">TotalStudyTime</p>
<p className="text-2xlfon t-boldtex t-gra y-900">42hours</p>
<p className="text-smtex t-gree n-600">+8%fromlastweek</p>
</div>
<div className="w-12 h-12b g-blu e-100rounde d-lgflexitem s-centerjustify-center">
<span className="text-2xl">⏱️</span>
</div>
</div>
</div>

<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<div className="flexitems-centerjustif y-between">
<div>
<p className="text-smfon t-mediumtex t-gra y-600">AverageSession</p>
<p className="text-2xlfon t-boldtex t-gra y-900">1.5hrs</p>
<p className="text-smtex t-gree n-600">+12%improvement</p>
</div>
<div className="w-12 h-12b g-gree n-100rounde d-lgflexitem s-centerjustify-center">
<span className="text-2xl">📈</span>
</div>
</div>
</div>

<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<div className="flexitems-centerjustif y-between">
<div>
<p className="text-smfon t-mediumtex t-gra y-600">SuccessRate</p>
<p className="text-2xlfon t-boldtex t-gra y-900">85%</p>
<p className="text-smtex t-re d-600">-3%fromlastweek</p>
</div>
<div className="w-12 h-12b g-purpl e-100rounde d-lgflexitem s-centerjustify-center">
<span className="text-2xl">🎯</span>
</div>
</div>
</div>

<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<div className="flexitems-centerjustif y-between">
<div>
<p className="text-smfon t-mediumtex t-gra y-600">HintsUsed</p>
<p className="text-2xlfon t-boldtex t-gra y-900">23</p>
<p className="text-smtex t-gree n-600">-15%independencegain</p>
</div>
<div className="w-12 h-12b g-orang e-100rounde d-lgflexitem s-centerjustify-center">
<span className="text-2xl">💡</span>
</div>
</div>
</div>
</div>

<div className="gridgrid-col s-1lg:grid-col s-2ga p-8m b-8">
{/*ProgressChart*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<h3 className="text-lgfon t-semiboldtex t-gra y-900m b-4">DailyProgress</h3>
<div className="h-64flexitem s-endjustif y-betweenspac e-x-2">
{[
{day:'Mon',challenges:2,time:120},
{day:'Tue',challenges:1,time:90},
{day:'Wed',challenges:3,time:180},
{day:'Thu',challenges:0,time:0},
{day:'Fri',challenges:2,time:150},
{day:'Sat',challenges:4,time:240},
{day:'Sun',challenges:1,time:60}
        ].map((data, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div className="w-full bg-blu e-100 rounded-t-lg relative mb-2" style={{height: `${Math.max(data.time / 2.4, 10)}px`}}>
              <div className="absolute inset-0 bg-blu e-600 rounded-t-lg" style={{height: `${data.challenges * 20}%`}}></div>
            </div>
            <span className="text-xs text-gra y-600">{data.day}</span>
            <span className="text-xs text-gra y-500">{data.challenges}ch</span>
</div>
))}
</div>
<div className="mt-4flexitem s-centerspac e-x-4tex t-sm">
<div className="flexitems-center">
<div className="w-3 h-3b g-blu e-600roundedm r-2"></div>
<span className="text-gra y-600">ChallengesCompleted</span>
</div>
<div className="flexitems-center">
<div className="w-3 h-3b g-blu e-100roundedm r-2"></div>
<span className="text-gra y-600">StudyTime(minutes)</span>
</div>
</div>
</div>

{/*SkillDistribution*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<h3 className="text-lgfon t-semiboldtex t-gra y-900m b-4">SkillDistribution</h3>
<div className="space-y-4">
{[
{skill:'JavaScript',percentage:85,color:'bg-yellow-500'},
{skill:'React',percentage:70,color:'bg-cyan-500'},
{skill:'CSS',percentage:90,color:'bg-blue-500'},
{skill:'TypeScript',percentage:60,color:'bg-blue-600'},
{skill:'Node.js',percentage:45,color:'bg-green-500'},
{skill:'APIs',percentage:55,color:'bg-purple-500'}
        ].map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="w-20 text-sm font-medium text-gray-700">{skill.skill}</div>
            <div className="flex-1 mx-4">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={`${skill.color} h-3 rounded-full transition-all duration-300`}
                  style={{width: `${skill.percentage}%`}}
                ></div>
</div>
</div>
<div className="w-12tex t-smtex t-gra y-600tex t-right">{skill.percentage}%</div>
</div>
))}
</div>
</div>
</div>

<div className="gridgrid-col s-1lg:grid-col s-2ga p-8m b-8">
{/*LearningPatterns*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<h3 className="text-lgfon t-semiboldtex t-gra y-900m b-4">LearningPatterns</h3>
<div className="space-y-4">
<div className="p-4b g-blu e-50rounde d-lgborder border-blu e-200">
<h4 className="font-mediumtex t-blu e-900m b-1">PeakPerformanceTime</h4>
<p className="text-blu e-700tex t-sm">Youperformbestbetween2PM-4PMwith92%successrate</p>
</div>

<div className="p-4b g-gree n-50rounde d-lgborder border-gree n-200">
<h4 className="font-mediumtex t-gree n-900m b-1">StrongestTechnology</h4>
<p className="text-gree n-700tex t-sm">CSS-90%masterylevelwithconsistentimprovement</p>
</div>

<div className="p-4b g-yello w-50rounde d-lgborder border-yello w-200">
<h4 className="font-mediumtex t-yello w-900m b-1">GrowthOpportunity</h4>
<p className="text-yello w-700tex t-sm">Node.jschallengesshowthemostpotentialforskilldevelopment</p>
</div>

<div className="p-4b g-purpl e-50rounde d-lgborder border-purpl e-200">
<h4 className="font-mediumtex t-purpl e-900m b-1">LearningStyle</h4>
<p className="text-purpl e-700tex t-sm">Youpreferintermediatechallengesandusehintsstrategically</p>
</div>
</div>
</div>

{/*RecentAchievements*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<h3 className="text-lgfon t-semiboldtex t-gra y-900m b-4">RecentAchievements</h3>
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
<divkey={index} className="flexitems-center p-3b g-gree n-50rounde d-lgborder border-green-200">
<div className="text-2xlm r-3">{achievement.icon}</div>
<div className="flex-1">
<h4 className="font-mediumtex t-gree n-900">{achievement.achievement}</h4>
<p className="text-smtex t-gree n-700">{achievement.description}</p>
<p className="text-xstex t-gree n-600">{achievement.date}</p>
</div>
<div className="text-right">
<span className="text-smfon t-semiboldtex t-gree n-600">+{achievement.points}XP</span>
</div>
</div>
))}
</div>
</div>
</div>

{/*GoalSetting*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<h3 className="text-lgfon t-semiboldtex t-gra y-900m b-4">LearningGoals</h3>
<div className="gridgrid-col s-1md:grid-col s-3ga p-6">
<div className="p-4borde r-2borde r-dashedborde r-blu e-300rounde d-lgtext-center">
<div className="text-3xlm b-2">🎯</div>
<h4 className="font-semiboldtex t-gra y-900m b-1">WeeklyGoal</h4>
<p className="text-smtex t-gra y-600m b-3">Complete5challengesthisweek</p>
<div className="w-fullb g-gra y-200rounde d-full h-2m b-2">
<div className="bg-blu e-600 h-2rounde d-full" style={{width:'60%'}}></div>
</div>
<p className="text-xstex t-gra y-600">3of5completed</p>
</div>

<div className="p-4borde r-2borde r-dashedborde r-gree n-300rounde d-lgtext-center">
<div className="text-3xlm b-2">📈</div>
<h4 className="font-semiboldtex t-gra y-900m b-1">SkillGoal</h4>
<p className="text-smtex t-gra y-600m b-3">Reach70%inTypeScript</p>
<div className="w-fullb g-gra y-200rounde d-full h-2m b-2">
<div className="bg-gree n-600 h-2rounde d-full" style={{width:'86%'}}></div>
</div>
<p className="text-xstex t-gra y-600">60%of70%target</p>
</div>

<div className="p-4borde r-2borde r-dashedborde r-purpl e-300rounde d-lgtext-center">
<div className="text-3xlm b-2">🏆</div>
<h4 className="font-semiboldtex t-gra y-900m b-1">AchievementGoal</h4>
<p className="text-smtex t-gra y-600m b-3">Earn"ProblemSolver"badge</p>
<div className="w-fullb g-gra y-200rounde d-full h-2m b-2">
<div className="bg-purpl e-600 h-2rounde d-full" style={{width:'70%'}}></div>
</div>
<p className="text-xstex t-gra y-600">7of10challengeswithouthints</p>
</div>
</div>
</div>
</main>
</div>
);
}