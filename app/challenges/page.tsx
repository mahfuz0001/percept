import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

export default async function ChallengesPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const challenges = [
    {
      id: 1,
      title: "Build a Todo App",
      description: "Create a functional todo application with add, delete, and mark complete features",
      difficulty: "Beginner",
      technologies: ["HTML", "CSS", "JavaScript"],
      points: 150,
      time: "1-2 hours",
      completed: true,
      category: "Web Fundamentals"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Build a weather app that fetches data from an API and displays current conditions",
      difficulty: "Intermediate",
      technologies: ["React", "API", "CSS"],
      points: 250,
      time: "2-3 hours",
      completed: false,
      category: "React & APIs"
    },
    {
      id: 3,
      title: "E-commerce Cart",
      description: "Implement a shopping cart with add/remove items, quantity management, and total calculation",
      difficulty: "Intermediate",
technologies:["React","StateManagement"],
points:300,
time:"3-4hours",
completed:false,
category:"ReactAdvanced"
},
{
id:4,
title:"AuthenticationSystem",
description:"Buildacompleteauthsystemwithlogin,signup,andprotectedroutes",
difficulty:"Advanced",
technologies:["Node.js","JWT","Database"],
points:400,
time:"4-5hours",
completed:false,
category:"Backend"
},
{
id:5,
title:"Real-timeChatApp",
description:"Createareal-timechatapplicationwithmultipleroomsanduserpresence",
difficulty:"Advanced",
technologies:["WebSockets","Node.js","React"],
points:500,
time:"6-8hours",
completed:false,
category:"FullStack"
},
{
id:6,
title:"CSSGridGallery",
description:"DesignaresponsiveimagegalleryusingCSSGridwithhovereffects",
difficulty:"Beginner",
technologies:["HTML","CSS","Grid"],
points:100,
time:"1hour",
completed:true,
category:"CSSMastery"
}
  ];

  const categories = ["All", "Web Fundamentals", "React & APIs", "React Advanced", "Backend", "Full Stack", "CSS Mastery"];
  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <div className="min-h-screen bg-gray-50">
{/*Header*/}
<header className="bg-whiteshado w-smborde r-bborder-gray-200">
<div className="max-w-7xlm x-autop x-4sm:px-6lg:px-8">
<div className="flex justify-betweenitem s-center h-16">
<div className="flex items-centerspac e-x-8">
<Link href="/dashboard" className="flex items-center">
<h1 className="text-2xlfont-bold text-gray-900">Percept</h1>
<span className="ml-2tex t-smtext-gray-500">Challenges</span>
</Link>
<nav className="hidden md:flex space-x-6">
<Link href="/dashboard" className="text-gray-600 hover:text-gray-900font-mediumtransitio n-colors">
Dashboard
</Link>
<Link href="/challenges" className="text-blue-600font-medium">
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
CodingChallenges🚀
</h2>
<p className="text-lgtext-gray-600">
Chooseyourchallengeandstartbuildingrealskills.Nohand-holding,justproblem-solving.
</p>
</div>

{/*StatsSummary*/}
<div className="gridgrid-col s-1md:grid-col s-4ga p-6m b-8">
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6">
<div className="text-center">
<div className="text-3xlfont-bold text-blue-600">{challenges.filter(c=>c.completed).length}</div>
<div className="text-smtext-gray-600">Completed</div>
</div>
</div>
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6">
<div className="text-center">
<div className="text-3xlfont-bold text-green-600">{challenges.length-challenges.filter(c=>c.completed).length}</div>
<div className="text-smtext-gray-600">Available</div>
</div>
</div>
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6">
<div className="text-center">
<div className="text-3xlfont-boldtex t-purpl e-600">{challenges.filter(c=>c.completed).reduce((sum,c)=>sum+c.points,0)}</div>
<div className="text-smtext-gray-600">PointsEarned</div>
</div>
</div>
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6">
<div className="text-center">
<div className="text-3xlfont-boldtex t-orang e-600">{challenges.length}</div>
<div className="text-smtext-gray-600">TotalChallenges</div>
</div>
</div>
</div>

{/*Filters*/}
<div className="bg-whiterounded-lgshado w-smborder border-gray-200 p-6m b-8">
<h3 className="text-lg font-semibold text-gray-900 mb-4">FilterChallenges</h3>
<div className="gridgrid-col s-1md:grid-col s-2ga p-6">
<div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
<select className="w-fullborder border-gray-300rounded-lg px-3p y-2focus:outline-none focus:ring-2 focus:ring-blue-500">
{difficulties.map(difficulty=>(
<option key={difficulty} value={difficulty}>{difficulty}</option>
))}
</select>
</div>
</div>
</div>

{/*ChallengesGrid*/}
<div className="gridgrid-col s-1md:grid-col s-2lg:grid-col s-3gap-6">
{challenges.map((challenge)=>(
<div
key={challenge.id}
className={`bg-whiterounded-lgshadow-sm border-2p-6hover:shadow-mdtransition-all duration-300${
challenge.completed?'border-green-200bg-green-50':'border-gray-200hover:border-blue-300'
}`}
>
<div className="flexitems-startjustif y-betweenm b-4">
<div className="flex-1">
<h3 className="text-lg font-semibold text-gray-900 mb-1">{challenge.title}</h3>
<p className="text-smtext-gray-600 mb-2">{challenge.category}</p>
</div>
{challenge.completed&&(
<div className="flex-shrin k-0">
<span className="bg-green-100 text-green-800tex t-xsfont-mediump x-2py-1rounded-full">
✓Completed
</span>
</div>
)}
</div>

<p className="text-gray-700 mb-4tex t-sm">{challenge.description}</p>

<div className="flex items-center justify-betweenm b-4">
<span className={`text-xspx-2py-1rounded-fullfont-medium${
challenge.difficulty==='Beginner'?'bg-green-100 text-green-800':
challenge.difficulty==='Intermediate'?'bg-yellow-100 text-yellow-800':
'bg-red-100 text-red-800'
}`}>
{challenge.difficulty}
</span>
<span className="text-smtext-gray-600">{challenge.time}</span>
</div>

<div className="flex flex-wrapga p-1m b-4">
{challenge.technologies.map((tech,index)=>(
<span key={index} className="text-xsbg-gray-100 text-gray-700p x-2py-1rounded">
{tech}
</span>
))}
</div>

<div className="flex items-center justify-between">
<span className="text-sm font-semibold text-blue-600">{challenge.points}points</span>
<button className={`px-4py-2rounded-lgtext-sm font-mediumtransition-colors${
challenge.completed
?'bg-gray-100 text-gray-600cursor-not-allowed'
:'bg-blue-600hover:bg-blue-700 text-white'
}`}>
{challenge.completed?'Completed':'StartChallenge'}
</button>
</div>
</div>
))}
</div>

{/*ComingSoon*/}
<div className="mt-12 bg-gradien t-t o-rfro m-blue-50t o-indigo-50rounded-lgp-8text-center">
<h3 className="text-2xlfont-bold text-gray-900 mb-4">MoreChallengesComingSoon!🎯</h3>
<p className="text-gray-600 mb-6">
We&apos;reconstantlyaddingnewchallengesacrossdifferenttechnologiesanddifficultylevels.
Wanttoseeaspecificchallenge?Letusknow!
</p>
<button className="bg-blue-600hover:bg-blue-700tex t-whitefont-mediump y-3px-6rounded-lg transition-colors">
RequestaChallenge
</button>
</div>
</main>
</div>
);
}