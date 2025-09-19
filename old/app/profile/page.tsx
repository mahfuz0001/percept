import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function ProfilePage() {
  const { userId } = await auth();

if(!userId){
redirect('/sign-in');
}

return(
<div className="min-h-screen bg-gray-50">
{/*Header*/}
<header className="bg-whiteshadow-sm border-b border-gray-200">
<div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8">
<div className="flex justify-betweenitems-centerh-16">
<div className="flex items-centerspace-x-8">
<Link href="/dashboard"className="flex items-center">
<h1 className="text-2xlfont-bold text-gray-900">Percept</h1>
<span className="ml-2text-smtext-gray-500">Profile</span>
</Link>
<nav className="hidden md:flex space-x-6">
<Link href="/dashboard"className="text-gray-600 hover:text-gray-900font-mediumtransition-colors">
Dashboard
</Link>
<Link href="/challenges"className="text-gray-600 hover:text-gray-900font-mediumtransition-colors">
Challenges
</Link>
<Link href="/profile"className="text-blue-600font-medium">
Profile
</Link>
<Link href="/analytics"className="text-gray-600 hover:text-gray-900font-mediumtransition-colors">
Analytics
</Link>
</nav>
</div>
<div className="flex items-centerspace-x-4">
<UserButton
appearance={{
elements:{
avatarBox:"w-10 h-10"
}
}}
/>
</div>
</div>
</div>
</header>

{/*MainContent*/}
<main className="max-w-4xl mx-autopx-4sm:px-6lg:px-8py-8">
<div className="mb-8">
<h2 className="text-3xlfont-bold text-gray-900 mb-2">
YourProfile⚙️
</h2>
<p className="text-lgtext-gray-600">
Customizeyourlearningexperienceandtrackyourdevelopmentjourney.
</p>
</div>

{/*ProfileOverview*/}
<div className="bg-whiterounded-lgshadow-sm border border-gray-200p-6mb-8">
<div className="flex items-centerspace-x-6">
<div className="w-20 h-20bg-blue-100 rounded-fullflex items-centerjustify-center">
<span className="text-3xl">👨‍💻</span>
</div>
<div className="flex-1">
<h3 className="text-xl font-semibold text-gray-900">DeveloperProfile</h3>
<p className="text-gray-600 mb-2">MembersinceDecember2024</p>
<div className="flex items-centerspace-x-4">
<span className="bg-blue-100 text-blue-800text-sm font-mediumpx-3py-1rounded-full">
Level3Developer
</span>
<span className="text-smtext-gray-600">1,420XP</span>
</div>
</div>
</div>
</div>

{/*QuickStats*/}
<div className="grid grid-cols-1md:grid-cols-3gap-6mb-8">
<div className="bg-whiterounded-lgshadow-sm border border-gray-200p-6text-center">
<div className="text-3xlfont-bold text-blue-600 mb-2">12</div>
<div className="text-gray-600">ChallengesCompleted</div>
</div>
<div className="bg-whiterounded-lgshadow-sm border border-gray-200p-6text-center">
<div className="text-3xlfont-bold text-green-600 mb-2">7</div>
<div className="text-gray-600">DayStreak</div>
</div>
<div className="bg-whiterounded-lgshadow-sm border border-gray-200p-6text-center">
<div className="text-3xlfont-bold text-purple-600 mb-2">5</div>
<div className="text-gray-600">SkillsMastered</div>
</div>
</div>

<div className="grid grid-cols-1lg:grid-cols-2gap-8">
{/*LearningPreferences*/}
<div className="bg-whiterounded-lgshadow-sm border border-gray-200p-6">
<h3 className="text-lg font-semibold text-gray-900 mb-4">LearningPreferences</h3>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
PreferredDifficultyLevel
</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Beginner</option>
              <option selected>Intermediate</option>
              <option>Advanced</option>
              <option>Mixed</option>
            </select>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
FocusAreas
</label>
<div className="space-y-2">
{[
{name:'FrontendDevelopment',checked:true},
{name:'BackendDevelopment',checked:false},
{name:'FullStack',checked:true},
{name:'MobileDevelopment',checked:false}
].map((area,index)=>(
<label key={index}className="flex items-center">
<input
type="checkbox"
checked={area.checked}
className="roundedborder-gray-300text-blue-600focus:ring-blue-500"
/>
<span className="ml-2text-smtext-gray-700">{area.name}</span>
</label>
))}
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
DailyLearningGoal
</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>30 minutes</option>
              <option defaultValue="selected">1 hour</option>
              <option>2 hours</option>
              <option>3+ hours</option>
            </select>
</div>
</div>
</div>

{/*Achievements*/}
<div className="bg-whiterounded-lgshadow-sm border border-gray-200p-6">
<h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements🏆</h3>
<div className="space-y-4">
{[
{
title:"FirstSteps",
description:"Completedyourfirstchallenge",
earned:true,
icon:"🎯",
date:"Dec15,2024"
},
{
title:"StreakMaster",
description:"Maintaineda7-daylearningstreak",
earned:true,
icon:"🔥",
date:"Dec18,2024"
},
{
title:"JavaScriptNinja",
description:"Completed5JavaScriptchallenges",
earned:true,
icon:"⚡",
date:"Dec20,2024"
},
{
title:"ProblemSolver",
description:"Solved10challengeswithouthints",
earned:false,
icon:"🧠",
date:null
},
{
title:"FullStackExplorer",
description:"Completechallengesinfrontendandbackend",
earned:false,
icon:"🌟",
date:null
}
].map((achievement,index)=>(
<div key={index}className={`flex items-centerp-3rounded-lg border-2${
achievement.earned?'border-green-200bg-green-50':'border-gray-200bg-gray-50'
}`}>
<div className="text-2xlmr-3">{achievement.icon}</div>
<div className="flex-1">
<h4 className={`font-medium${achievement.earned?'text-green-900':'text-gray-500'}`}>
{achievement.title}
</h4>
<p className={`text-sm${achievement.earned?'text-green-700':'text-gray-500'}`}>
{achievement.description}
</p>
{achievement.date&&(
<p className="text-xstext-green-600mt-1">Earnedon{achievement.date}</p>
)}
</div>
{achievement.earned&&(
<div className="text-green-600">
<svg className="w-5 h-5"fill="currentColor"viewBox="002020">
<pathfillRule="evenodd"d="M16.7075.293a1100101.414l-88a11001-1.4140l-4-4a110011.414-1.414L812.586l7.293-7.293a110011.4140z"clipRule="evenodd"/>
</svg>
</div>
)}
</div>
))}
</div>
</div>
</div>

{/*NotificationSettings*/}
<div className="bg-whiterounded-lgshadow-sm border border-gray-200p-6mt-8">
<h3 className="text-lg font-semibold text-gray-900 mb-4">NotificationSettings</h3>
<div className="space-y-4">
{[
{name:'Dailylearningreminders',description:'Getremindedtopracticecodingdaily',enabled:true},
{name:'Newchallengenotifications',description:'Benotifiedwhennewchallengesareadded',enabled:true},
{name:'Achievementcelebrations',description:'Celebratewhenyouearnnewachievements',enabled:true},
{name:'Weeklyprogressreports',description:'Receiveweeklysummariesofyourprogress',enabled:false},
{name:'Communityupdates',description:'Updatesaboutnewfeaturesandcommunityevents',enabled:false}
].map((setting,index)=>(
<div key={index}className="flex items-centerjustify-betweenp-3border border-gray-200rounded-lg">
<div className="flex-1">
<h4 className="font-medium text-gray-900">{setting.name}</h4>
<p className="text-smtext-gray-600">{setting.description}</p>
</div>
<label className="relative inline-flex items-centercursor-pointer">
<input type="checkbox"className="sr-onlypeer"checked={setting.enabled}/>
<div className="w-11 h-6bg-gray-200peer-focus:outline-nonepeer-focus:ring-4peer-focus:ring-blue-300rounded-fullpeerpeer-checked:after:translate-x-fullpeer-checked:after:border-whiteafter:content-['']after:absolute after:top-[2px]after:left-[2px]after:bg-whiteafter:border-gray-300after:border after:rounded-fullafter:h-5after:w-5after:transition-allpeer-checked:bg-blue-600"></div>
</label>
</div>
))}
</div>
</div>

{/*AccountActions*/}
<div className="bg-whiterounded-lgshadow-sm border border-gray-200p-6mt-8">
<h3 className="text-lg font-semibold text-gray-900 mb-4">AccountActions</h3>
<div className="space-y-4">
<button className="w-fullbg-blue-600hover:bg-blue-700 text-white font-mediumpy-3px-4rounded-lg transition-colors">
SaveChanges
</button>
<button className="w-fullbg-gray-100hover:bg-gray-200 text-gray-700font-mediumpy-3px-4rounded-lg transition-colors">
ExportProgressData
</button>
<button className="w-fullbg-red-50hover:bg-red-100 text-red-600font-mediumpy-3px-4rounded-lg transition-colors">
ResetAllProgress
</button>
</div>
</div>
</main>
</div>
);
}