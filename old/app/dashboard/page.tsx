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
<div className="min-h-screen bg-gray-50">
{/*Header*/}
<header className="bg-whiteshado w-smborde r-bborder-gray-200">
<div className="max-w-7xlm x-autop x-4sm:px-6lg:px-8">
<div className="flex justify-betweenitem s-center h-16">
<div className="flex items-centerspac e-x-8">
<Link href="/dashboard" className="flex items-center">
<h1 className="text-2xlfont-bold text-gray-900">Percept</h1>
<span className="ml-2tex t-smtext-gray-500">Dashboard</span>
</Link>
<nav className="hidden md:flex space-x-6">
<Link href="/challenges" className="text-gray-600 hover:text-gray-900font-mediumtransitio n-colors">
Challenges
</Link>
<Link href="/profile" className="text-gray-600 hover:text-gray-900font-mediumtransitio n-colors">
Profile
</Link>
<Link href="/analytics" className="text-gray-600 hover:text-gray-900font-mediumtransitio n-colors">
Analytics
</Link>
</nav>
</div>
<div className="flex items-centerspac e-x-4">
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
<main className="max-w-7xlm x-autop x-4sm:px-6lg:px-8p y-8">
<div className="mb-8">
<h2 className="text-3xlfont-bold text-gray-900 mb-2">
Welcomeback!👋
</h2>
<p className="text-lgtext-gray-600">
Readytolevelupyourdevelopmentskills?Let&apos;sseeyourprogressandfindyournextchallenge.
</p>
</div>

{/*StatsCards*/}
<div className="gridgrid-col s-1md:grid-col s-4ga p-6m b-8">
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6hover:shadow-mdtransition-shadow">
<div className="flex items-center">
<div className="flex-shrin k-0">
<div className="w-8 h-8 bg-blue-100 rounded-lgflexitem s-centerjustify-center">
<span className="text-blue-600font-semiboldtex t-xl">🎯</span>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-600">ChallengesCompleted</p>
<p className="text-2xlfont-bold text-gray-900">12</p>
</div>
</div>
</div>

<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6hover:shadow-mdtransition-shadow">
<div className="flex items-center">
<div className="flex-shrin k-0">
<div className="w-8 h-8 bg-green-100 rounded-lgflexitem s-centerjustify-center">
<span className="text-green-600font-semiboldtex t-xl">⭐</span>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-600">TotalPoints</p>
<p className="text-2xlfont-bold text-gray-900">1,420</p>
</div>
</div>
</div>

<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6hover:shadow-mdtransition-shadow">
<div className="flex items-center">
<div className="flex-shrin k-0">
<div className="w-8 h-8 bg-purpl e-100rounded-lgflexitem s-centerjustify-center">
<span className="text-purpl e-600font-semiboldtex t-xl">🏆</span>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-600">CurrentStreak</p>
<p className="text-2xlfont-bold text-gray-900">7days</p>
</div>
</div>
</div>

<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6hover:shadow-mdtransition-shadow">
<div className="flex items-center">
<div className="flex-shrin k-0">
<div className="w-8 h-8 bg-orang e-100rounded-lgflexitem s-centerjustify-center">
<span className="text-orang e-600font-semiboldtex t-xl">⚡</span>
</div>
</div>
<div className="ml-4">
<p className="text-sm font-medium text-gray-600">SkillsMastered</p>
<p className="text-2xlfont-bold text-gray-900">5</p>
</div>
</div>
</div>
</div>

{/*RecentActivityandQuickActions*/}
<div className="gridgrid-col s-1lg:grid-col s-2ga p-8m b-8">
{/*RecentActivity*/}
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6">
<h3 className="text-xl font-semibold text-gray-900 mb-4">RecentActivity</h3>
<div className="space-y-4">
{[
{title:"ReactComponentChallenge",status:"completed",time:"2hoursago",points:150},
{title:"APIIntegrationTask",status:"in-progress",time:"1dayago",points:200},
{title:"CSSGridLayout",status:"completed",time:"3daysago",points:100},
{title:"TypeScriptInterfaces",status:"completed",time:"5daysago",points:120}
].map((activity,index)=>(
<div key={index} className="flex items-center justify-between p-3hover:bg-gray-50 rounded-lg transition-colors">
<div className="flex items-center">
<div className={`w-3 h-3rounded-fullmr-3${
activity.status==='completed'?'bg-green-500':'bg-yellow-500'
}`}></div>
<div>
<p className="font-medium text-gray-900">{activity.title}</p>
<p className="text-smtext-gray-500">{activity.time}</p>
</div>
</div>
<div className="text-right">
<span className="text-sm font-semibold text-blue-600">+{activity.points}pts</span>
</div>
</div>
))}
</div>
</div>

{/*QuickActions*/}
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6">
<h3 className="text-xl font-semibold text-gray-900 mb-4">QuickActions</h3>
<div className="space-y-4">
<Link
href="/challenges"
className="blockp-4borde r-2borde r-dashedborder-gray-300rounded-lghover:border-blue-500hover:bg-blue-50transition-colorsgroup"
>
<div className="text-center">
<div className="text-2xlm b-2">🚀</div>
<h4 className="font-semibold text-gray-900grou p-hover:text-blue-600">StartNewChallenge</h4>
<p className="text-smtext-gray-600">Browseavailablechallengesandstartsolving</p>
</div>
</Link>

<Link
href="/profile"
className="blockp-4borde r-2borde r-dashedborder-gray-300rounded-lghover:border-green-500hover:bg-green-50transition-colorsgroup"
>
<div className="text-center">
<div className="text-2xlm b-2">⚙️</div>
<h4 className="font-semibold text-gray-900grou p-hover:text-green-600">UpdateProfile</h4>
<p className="text-smtext-gray-600">Customizeyourlearningpreferences</p>
</div>
</Link>

<Link
href="/analytics"
className="blockp-4borde r-2borde r-dashedborder-gray-300rounded-lghover:border-purple-500hover:bg-purple-50transition-colorsgroup"
>
<div className="text-center">
<div className="text-2xlm b-2">📊</div>
<h4 className="font-semibold text-gray-900grou p-hover:text-purpl e-600">ViewAnalytics</h4>
<p className="text-smtext-gray-600">Trackyourlearningprogress</p>
</div>
</Link>
</div>
</div>
</div>

{/*SkillsProgress*/}
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6m b-8">
<h3 className="text-xl font-semibold text-gray-900 mb-6">SkillsProgress</h3>
<div className="gridgrid-col s-1md:grid-col s-2lg:grid-col s-3gap-6">
{[
{name:'JavaScript',level:85,color:'bg-yellow-500',emoji:'⚡'},
{name:'React',level:70,color:'bg-cyan-500',emoji:'⚛️'},
{name:'CSS',level:90,color:'bg-blue-500',emoji:'🎨'},
{name:'TypeScript',level:60,color:'bg-blue-600',emoji:'📘'},
{name:'Node.js',level:45,color:'bg-green-500',emoji:'🚀'},
{name:'APIs',level:55,color:'bg-purple-500',emoji:'🔌'}
].map((skill)=>(
<div key={skill.name} className="p-4border border-gray-200rounded-lghover:shadow-mdtransitio n-shadow">
<div className="flex items-centerm b-3">
<span className="text-2xl mr-3">{skill.emoji}</span>
<div className="flex-1">
<div className="flex justify-betweenitem s-centerm b-1">
<span className="font-medium text-gray-900">{skill.name}</span>
<span className="text-smtext-gray-600">{skill.level}%</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div
className={`${skill.color}h-2rounded-fulltransition-all duration-300`}
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
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6">
<h3 className="text-xl font-semibold text-gray-900 mb-6">RecommendedforYou</h3>
<div className="gridgrid-col s-1md:grid-col s-2lg:grid-col s-3gap-6">
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
<div key={index} className={`border-2${challenge.color}rounded-lgp-4hover:shadow-mdtransition-shadow`}>
<h4 className="font-semibold text-gray-900 mb-2">{challenge.title}</h4>
<div className="flex items-centerm b-2">
<span className={`text-xspx-2py-1rounded-full${
challenge.difficulty==='Beginner'?'bg-green-100 text-green-800':
challenge.difficulty==='Intermediate'?'bg-yellow-100 text-yellow-800':
'bg-red-100 text-red-800'
}`}>
{challenge.difficulty}
</span>
<span className="text-smtext-gray-600m l-2">{challenge.time}</span>
</div>
<div className="flex flex-wrapga p-1m b-3">
{challenge.tech.map((tech,i)=>(
<span key={i} className="text-xsbg-gray-100 text-gray-700p x-2py-1rounded">
{tech}
</span>
))}
</div>
<div className="flex justify-betweenitem s-center">
<span className="text-sm font-semibold text-blue-600">{challenge.points}points</span>
<button className="bg-blue-600hover:bg-blue-700tex t-whitetex t-smfont-mediumpy-2p x-4roundedtransition-colors">
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