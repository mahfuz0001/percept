import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function DashboardPage() {
const{userId}=await auth();

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
<span className="ml-2text-smtext-gray-500">Dashboard</span>
</Link>
<nav className="hiddenmd:flexspace-x-6">
<Link href="/challenges"className="text-gray-600hover:text-gray-900font-mediumtransition-colors">
Challenges
</Link>
<Link href="/profile"className="text-gray-600hover:text-gray-900font-mediumtransition-colors">
Profile
</Link>
<Link href="/analytics"className="text-gray-600hover:text-gray-900font-mediumtransition-colors">
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
Welcomeback!👋
</h2>
<p className="text-lgtext-gray-600">
Readytolevelupyourdevelopmentskills?Let&apos;sseeyourprogressandfindyournextchallenge.
</p>
</div>

{/*StatsCards*/}
<div className="gridgrid-cols-1md:grid-cols-4gap-6mb-8">
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6hover:shadow-mdtransition-shadow">
<div className="flexitems-center">
<div className="flex-shrink-0">
<div className="w-8h-8bg-blue-100rounded-lgflexitems-centerjustify-center">
<span className="text-blue-600font-semiboldtext-xl">🎯</span>
</div>
</div>
<div className="ml-4">
<p className="text-smfont-mediumtext-gray-600">ChallengesCompleted</p>
<p className="text-2xlfont-boldtext-gray-900">12</p>
</div>
</div>
</div>

<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6hover:shadow-mdtransition-shadow">
<div className="flexitems-center">
<div className="flex-shrink-0">
<div className="w-8h-8bg-green-100rounded-lgflexitems-centerjustify-center">
<span className="text-green-600font-semiboldtext-xl">⭐</span>
</div>
</div>
<div className="ml-4">
<p className="text-smfont-mediumtext-gray-600">TotalPoints</p>
<p className="text-2xlfont-boldtext-gray-900">1,420</p>
</div>
</div>
</div>

<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6hover:shadow-mdtransition-shadow">
<div className="flexitems-center">
<div className="flex-shrink-0">
<div className="w-8h-8bg-purple-100rounded-lgflexitems-centerjustify-center">
<span className="text-purple-600font-semiboldtext-xl">🏆</span>
</div>
</div>
<div className="ml-4">
<p className="text-smfont-mediumtext-gray-600">CurrentStreak</p>
<p className="text-2xlfont-boldtext-gray-900">7days</p>
</div>
</div>
</div>

<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6hover:shadow-mdtransition-shadow">
<div className="flexitems-center">
<div className="flex-shrink-0">
<div className="w-8h-8bg-orange-100rounded-lgflexitems-centerjustify-center">
<span className="text-orange-600font-semiboldtext-xl">⚡</span>
</div>
</div>
<div className="ml-4">
<p className="text-smfont-mediumtext-gray-600">SkillsMastered</p>
<p className="text-2xlfont-boldtext-gray-900">5</p>
</div>
</div>
</div>
</div>

{/*RecentActivityandQuickActions*/}
<div className="gridgrid-cols-1lg:grid-cols-2gap-8mb-8">
{/*RecentActivity*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<h3 className="text-xlfont-semiboldtext-gray-900mb-4">RecentActivity</h3>
<div className="space-y-4">
{[
{title:"ReactComponentChallenge",status:"completed",time:"2hoursago",points:150},
{title:"APIIntegrationTask",status:"in-progress",time:"1dayago",points:200},
{title:"CSSGridLayout",status:"completed",time:"3daysago",points:100},
{title:"TypeScriptInterfaces",status:"completed",time:"5daysago",points:120}
].map((activity,index)=>(
<divkey={index}className="flexitems-centerjustify-betweenp-3hover:bg-gray-50rounded-lgtransition-colors">
<div className="flexitems-center">
<div className={`w-3h-3rounded-fullmr-3${
activity.status==='completed'?'bg-green-500':'bg-yellow-500'
}`}></div>
<div>
<p className="font-mediumtext-gray-900">{activity.title}</p>
<p className="text-smtext-gray-500">{activity.time}</p>
</div>
</div>
<div className="text-right">
<span className="text-smfont-semiboldtext-blue-600">+{activity.points}pts</span>
</div>
</div>
))}
</div>
</div>

{/*QuickActions*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<h3 className="text-xlfont-semiboldtext-gray-900mb-4">QuickActions</h3>
<div className="space-y-4">
<Link
href="/challenges"
className="blockp-4border-2border-dashedborder-gray-300rounded-lghover:border-blue-500hover:bg-blue-50transition-colorsgroup"
>
<div className="text-center">
<div className="text-2xlmb-2">🚀</div>
<h4 className="font-semiboldtext-gray-900group-hover:text-blue-600">StartNewChallenge</h4>
<p className="text-smtext-gray-600">Browseavailablechallengesandstartsolving</p>
</div>
</Link>

<Link
href="/profile"
className="blockp-4border-2border-dashedborder-gray-300rounded-lghover:border-green-500hover:bg-green-50transition-colorsgroup"
>
<div className="text-center">
<div className="text-2xlmb-2">⚙️</div>
<h4 className="font-semiboldtext-gray-900group-hover:text-green-600">UpdateProfile</h4>
<p className="text-smtext-gray-600">Customizeyourlearningpreferences</p>
</div>
</Link>

<Link
href="/analytics"
className="blockp-4border-2border-dashedborder-gray-300rounded-lghover:border-purple-500hover:bg-purple-50transition-colorsgroup"
>
<div className="text-center">
<div className="text-2xlmb-2">📊</div>
<h4 className="font-semiboldtext-gray-900group-hover:text-purple-600">ViewAnalytics</h4>
<p className="text-smtext-gray-600">Trackyourlearningprogress</p>
</div>
</Link>
</div>
</div>
</div>

{/*SkillsProgress*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6mb-8">
<h3 className="text-xlfont-semiboldtext-gray-900mb-6">SkillsProgress</h3>
<div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3gap-6">
{[
{name:'JavaScript',level:85,color:'bg-yellow-500',emoji:'⚡'},
{name:'React',level:70,color:'bg-cyan-500',emoji:'⚛️'},
{name:'CSS',level:90,color:'bg-blue-500',emoji:'🎨'},
{name:'TypeScript',level:60,color:'bg-blue-600',emoji:'📘'},
{name:'Node.js',level:45,color:'bg-green-500',emoji:'🚀'},
{name:'APIs',level:55,color:'bg-purple-500',emoji:'🔌'}
].map((skill)=>(
<divkey={skill.name}className="p-4borderborder-gray-200rounded-lghover:shadow-mdtransition-shadow">
<div className="flexitems-centermb-3">
<span className="text-2xlmr-3">{skill.emoji}</span>
<div className="flex-1">
<div className="flexjustify-betweenitems-centermb-1">
<span className="font-mediumtext-gray-900">{skill.name}</span>
<span className="text-smtext-gray-600">{skill.level}%</span>
</div>
<div className="w-fullbg-gray-200rounded-fullh-2">
<div
className={`${skill.color}h-2rounded-fulltransition-allduration-300`}
style={{width:`${skill.level}%`}}
></div>
</div>
</div>
</div>
</div>
))}
</div>
</div>

{/*RecommendedChallenges*/}
<div className="bg-whiterounded-lgshadow-smborderborder-gray-200p-6">
<h3 className="text-xlfont-semiboldtext-gray-900mb-6">RecommendedforYou</h3>
<div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3gap-6">
{[
{
title:"BuildaWeatherApp",
difficulty:"Intermediate",
tech:["React","API"],
points:250,
time:"2-3hours",
color:"border-blue-500"
},
{
title:"CreateaTodoApp",
difficulty:"Beginner",
tech:["JavaScript","DOM"],
points:150,
time:"1-2hours",
color:"border-green-500"
},
{
title:"AuthenticationSystem",
difficulty:"Advanced",
tech:["Node.js","JWT"],
points:400,
time:"4-5hours",
color:"border-red-500"
}
].map((challenge,index)=>(
<divkey={index}className={`border-2${challenge.color}rounded-lgp-4hover:shadow-mdtransition-shadow`}>
<h4 className="font-semiboldtext-gray-900mb-2">{challenge.title}</h4>
<div className="flexitems-centermb-2">
<span className={`text-xspx-2py-1rounded-full${
challenge.difficulty==='Beginner'?'bg-green-100text-green-800':
challenge.difficulty==='Intermediate'?'bg-yellow-100text-yellow-800':
'bg-red-100text-red-800'
}`}>
{challenge.difficulty}
</span>
<span className="text-smtext-gray-600ml-2">{challenge.time}</span>
</div>
<div className="flexflex-wrapgap-1mb-3">
{challenge.tech.map((tech,i)=>(
<spankey={i}className="text-xsbg-gray-100text-gray-700px-2py-1rounded">
{tech}
</span>
))}
</div>
<div className="flexjustify-betweenitems-center">
<span className="text-smfont-semiboldtext-blue-600">{challenge.points}points</span>
<button className="bg-blue-600hover:bg-blue-700text-whitetext-smfont-mediumpy-2px-4roundedtransition-colors">
StartChallenge
</button>
</div>
</div>
))}
</div>
</div>
</main>
</div>
);
}