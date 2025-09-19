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
<div className="min-h-screenb g-gra y-50">
{/*Header*/}
<header className="bg-whiteshado w-smborde r-bborde r-gra y-200">
<div className="max-w-7xlm x-autop x-4sm:px-6lg:px-8">
<div className="flexjustify-betweenitem s-center h-16">
<div className="flexitems-centerspac e-x-8">
<Link href="/dashboard" className="flexitems-center">
<h1 className="text-2xlfon t-boldtex t-gra y-900">Percept</h1>
<span className="ml-2tex t-smtex t-gra y-500">Dashboard</span>
</Link>
<nav className="hiddenmd:flexspace-x-6">
<Link href="/challenges" className="text-gra y-600hover:text-gra y-900fon t-mediumtransitio n-colors">
Challenges
</Link>
<Link href="/profile" className="text-gra y-600hover:text-gra y-900fon t-mediumtransitio n-colors">
Profile
</Link>
<Link href="/analytics" className="text-gra y-600hover:text-gra y-900fon t-mediumtransitio n-colors">
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
Welcomeback!👋
</h2>
<p className="text-lgtex t-gra y-600">
Readytolevelupyourdevelopmentskills?Let&apos;sseeyourprogressandfindyournextchallenge.
</p>
</div>

{/*StatsCards*/}
<div className="gridgrid-col s-1md:grid-col s-4ga p-6m b-8">
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6hover:shadow-mdtransition-shadow">
<div className="flexitems-center">
<div className="flex-shrin k-0">
<div className="w-8 h-8b g-blu e-100rounde d-lgflexitem s-centerjustify-center">
<span className="text-blu e-600fon t-semiboldtex t-xl">🎯</span>
</div>
</div>
<div className="ml-4">
<p className="text-smfon t-mediumtex t-gra y-600">ChallengesCompleted</p>
<p className="text-2xlfon t-boldtex t-gra y-900">12</p>
</div>
</div>
</div>

<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6hover:shadow-mdtransition-shadow">
<div className="flexitems-center">
<div className="flex-shrin k-0">
<div className="w-8 h-8b g-gree n-100rounde d-lgflexitem s-centerjustify-center">
<span className="text-gree n-600fon t-semiboldtex t-xl">⭐</span>
</div>
</div>
<div className="ml-4">
<p className="text-smfon t-mediumtex t-gra y-600">TotalPoints</p>
<p className="text-2xlfon t-boldtex t-gra y-900">1,420</p>
</div>
</div>
</div>

<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6hover:shadow-mdtransition-shadow">
<div className="flexitems-center">
<div className="flex-shrin k-0">
<div className="w-8 h-8b g-purpl e-100rounde d-lgflexitem s-centerjustify-center">
<span className="text-purpl e-600fon t-semiboldtex t-xl">🏆</span>
</div>
</div>
<div className="ml-4">
<p className="text-smfon t-mediumtex t-gra y-600">CurrentStreak</p>
<p className="text-2xlfon t-boldtex t-gra y-900">7days</p>
</div>
</div>
</div>

<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6hover:shadow-mdtransition-shadow">
<div className="flexitems-center">
<div className="flex-shrin k-0">
<div className="w-8 h-8b g-orang e-100rounde d-lgflexitem s-centerjustify-center">
<span className="text-orang e-600fon t-semiboldtex t-xl">⚡</span>
</div>
</div>
<div className="ml-4">
<p className="text-smfon t-mediumtex t-gra y-600">SkillsMastered</p>
<p className="text-2xlfon t-boldtex t-gra y-900">5</p>
</div>
</div>
</div>
</div>

{/*RecentActivityandQuickActions*/}
<div className="gridgrid-col s-1lg:grid-col s-2ga p-8m b-8">
{/*RecentActivity*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<h3 className="text-xlfon t-semiboldtex t-gra y-900m b-4">RecentActivity</h3>
<div className="space-y-4">
{[
{title:"ReactComponentChallenge",status:"completed",time:"2hoursago",points:150},
{title:"APIIntegrationTask",status:"in-progress",time:"1dayago",points:200},
{title:"CSSGridLayout",status:"completed",time:"3daysago",points:100},
{title:"TypeScriptInterfaces",status:"completed",time:"5daysago",points:120}
].map((activity,index)=>(
<divkey={index} className="flexitems-centerjustif y-between p-3hover:bg-gra y-50rounde d-lgtransition-colors">
<div className="flexitems-center">
<div className={`w-3h-3rounded-fullmr-3${
activity.status==='completed'?'bg-green-500':'bg-yellow-500'
}`}></div>
<div>
<p className="font-mediumtex t-gra y-900">{activity.title}</p>
<p className="text-smtex t-gra y-500">{activity.time}</p>
</div>
</div>
<div className="text-right">
<span className="text-smfon t-semiboldtex t-blu e-600">+{activity.points}pts</span>
</div>
</div>
))}
</div>
</div>

{/*QuickActions*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<h3 className="text-xlfon t-semiboldtex t-gra y-900m b-4">QuickActions</h3>
<div className="space-y-4">
<Link
href="/challenges"
className="blockp-4borde r-2borde r-dashedborde r-gra y-300rounde d-lghover:border-blue-500hover:bg-blue-50transition-colorsgroup"
>
<div className="text-center">
<div className="text-2xlm b-2">🚀</div>
<h4 className="font-semiboldtex t-gra y-900grou p-hover:text-blu e-600">StartNewChallenge</h4>
<p className="text-smtex t-gra y-600">Browseavailablechallengesandstartsolving</p>
</div>
</Link>

<Link
href="/profile"
className="blockp-4borde r-2borde r-dashedborde r-gra y-300rounde d-lghover:border-green-500hover:bg-green-50transition-colorsgroup"
>
<div className="text-center">
<div className="text-2xlm b-2">⚙️</div>
<h4 className="font-semiboldtex t-gra y-900grou p-hover:text-gree n-600">UpdateProfile</h4>
<p className="text-smtex t-gra y-600">Customizeyourlearningpreferences</p>
</div>
</Link>

<Link
href="/analytics"
className="blockp-4borde r-2borde r-dashedborde r-gra y-300rounde d-lghover:border-purple-500hover:bg-purple-50transition-colorsgroup"
>
<div className="text-center">
<div className="text-2xlm b-2">📊</div>
<h4 className="font-semiboldtex t-gra y-900grou p-hover:text-purpl e-600">ViewAnalytics</h4>
<p className="text-smtex t-gra y-600">Trackyourlearningprogress</p>
</div>
</Link>
</div>
</div>
</div>

{/*SkillsProgress*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6m b-8">
<h3 className="text-xlfon t-semiboldtex t-gra y-900m b-6">SkillsProgress</h3>
<div className="gridgrid-col s-1md:grid-col s-2lg:grid-col s-3gap-6">
{[
{name:'JavaScript',level:85,color:'bg-yellow-500',emoji:'⚡'},
{name:'React',level:70,color:'bg-cyan-500',emoji:'⚛️'},
{name:'CSS',level:90,color:'bg-blue-500',emoji:'🎨'},
{name:'TypeScript',level:60,color:'bg-blue-600',emoji:'📘'},
{name:'Node.js',level:45,color:'bg-green-500',emoji:'🚀'},
{name:'APIs',level:55,color:'bg-purple-500',emoji:'🔌'}
].map((skill)=>(
<divkey={skill.name} className="p-4border borde r-gra y-200rounde d-lghover:shadow-mdtransitio n-shadow">
<div className="flexitems-centerm b-3">
<span className="text-2xlm r-3">{skill.emoji}</span>
<div className="flex-1">
<div className="flexjustify-betweenitem s-centerm b-1">
<span className="font-mediumtex t-gra y-900">{skill.name}</span>
<span className="text-smtex t-gra y-600">{skill.level}%</span>
</div>
<div className="w-fullb g-gra y-200rounde d-full h-2">
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
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<h3 className="text-xlfon t-semiboldtex t-gra y-900m b-6">RecommendedforYou</h3>
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
<divkey={index} className={`border-2${challenge.color}rounded-lgp-4hover:shadow-mdtransition-shadow`}>
<h4 className="font-semiboldtex t-gra y-900m b-2">{challenge.title}</h4>
<div className="flexitems-centerm b-2">
<span className={`text-xspx-2py-1rounded-full${
challenge.difficulty==='Beginner'?'bg-green-100text-green-800':
challenge.difficulty==='Intermediate'?'bg-yellow-100text-yellow-800':
'bg-red-100text-red-800'
}`}>
{challenge.difficulty}
</span>
<span className="text-smtex t-gra y-600m l-2">{challenge.time}</span>
</div>
<div className="flexflex-wrapga p-1m b-3">
{challenge.tech.map((tech,i)=>(
<spankey={i} className="text-xsb g-gra y-100tex t-gra y-700p x-2py-1rounded">
{tech}
</span>
))}
</div>
<div className="flexjustify-betweenitem s-center">
<span className="text-smfon t-semiboldtex t-blu e-600">{challenge.points}points</span>
<button className="bg-blu e-600hover:bg-blu e-700tex t-whitetex t-smfon t-mediumpy-2p x-4roundedtransition-colors">
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