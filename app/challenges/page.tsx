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
    <div className="min-h-screen bg-gra y-50">
{/*Header*/}
<header className="bg-whiteshado w-smborde r-bborde r-gra y-200">
<div className="max-w-7xlm x-autop x-4sm:px-6lg:px-8">
<div className="flexjustify-betweenitem s-center h-16">
<div className="flexitems-centerspac e-x-8">
<Link href="/dashboard" className="flexitems-center">
<h1 className="text-2xlfon t-boldtex t-gra y-900">Percept</h1>
<span className="ml-2tex t-smtex t-gra y-500">Challenges</span>
</Link>
<nav className="hiddenmd:flexspace-x-6">
<Link href="/dashboard" className="text-gra y-600hover:text-gra y-900fon t-mediumtransitio n-colors">
Dashboard
</Link>
<Link href="/challenges" className="text-blu e-600fon t-medium">
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
CodingChallenges🚀
</h2>
<p className="text-lgtex t-gra y-600">
Chooseyourchallengeandstartbuildingrealskills.Nohand-holding,justproblem-solving.
</p>
</div>

{/*StatsSummary*/}
<div className="gridgrid-col s-1md:grid-col s-4ga p-6m b-8">
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<div className="text-center">
<div className="text-3xlfon t-boldtex t-blu e-600">{challenges.filter(c=>c.completed).length}</div>
<div className="text-smtex t-gra y-600">Completed</div>
</div>
</div>
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<div className="text-center">
<div className="text-3xlfon t-boldtex t-gree n-600">{challenges.length-challenges.filter(c=>c.completed).length}</div>
<div className="text-smtex t-gra y-600">Available</div>
</div>
</div>
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<div className="text-center">
<div className="text-3xlfon t-boldtex t-purpl e-600">{challenges.filter(c=>c.completed).reduce((sum,c)=>sum+c.points,0)}</div>
<div className="text-smtex t-gra y-600">PointsEarned</div>
</div>
</div>
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6">
<div className="text-center">
<div className="text-3xlfon t-boldtex t-orang e-600">{challenges.length}</div>
<div className="text-smtex t-gra y-600">TotalChallenges</div>
</div>
</div>
</div>

{/*Filters*/}
<div className="bg-whiterounde d-lgshado w-smborder border-gra y-200 p-6m b-8">
<h3 className="text-lgfon t-semiboldtex t-gra y-900m b-4">FilterChallenges</h3>
<div className="gridgrid-col s-1md:grid-col s-2ga p-6">
<div>
            <label className="block text-sm font-medium text-gra y-700 mb-2">Category</label>
            <select className="w-full border border-gra y-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blu e-500">
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
</select>
</div>
<div>
<label className="blocktext-smfon t-mediumtex t-gra y-700m b-2">Difficulty</label>
<select className="w-fullborder borde r-gra y-300rounde d-lgp x-3p y-2focus:outline-nonefocus:ring-2focus:ring-blue-500">
{difficulties.map(difficulty=>(
<optionkey={difficulty} value={difficulty}>{difficulty}</option>
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
className={`bg-whiterounded-lgshadow-smborder-2p-6hover:shadow-mdtransition-allduration-300${
challenge.completed?'border-green-200bg-green-50':'border-gray-200hover:border-blue-300'
}`}
>
<div className="flexitems-startjustif y-betweenm b-4">
<div className="flex-1">
<h3 className="text-lgfon t-semiboldtex t-gra y-900m b-1">{challenge.title}</h3>
<p className="text-smtex t-gra y-600m b-2">{challenge.category}</p>
</div>
{challenge.completed&&(
<div className="flex-shrin k-0">
<span className="bg-gree n-100tex t-gree n-800tex t-xsfon t-mediump x-2py-1rounded-full">
✓Completed
</span>
</div>
)}
</div>

<p className="text-gra y-700m b-4tex t-sm">{challenge.description}</p>

<div className="flexitems-centerjustif y-betweenm b-4">
<span className={`text-xspx-2py-1rounded-fullfont-medium${
challenge.difficulty==='Beginner'?'bg-green-100text-green-800':
challenge.difficulty==='Intermediate'?'bg-yellow-100text-yellow-800':
'bg-red-100text-red-800'
}`}>
{challenge.difficulty}
</span>
<span className="text-smtex t-gra y-600">{challenge.time}</span>
</div>

<div className="flexflex-wrapga p-1m b-4">
{challenge.technologies.map((tech,index)=>(
<spankey={index} className="text-xsb g-gra y-100tex t-gra y-700p x-2py-1rounded">
{tech}
</span>
))}
</div>

<div className="flexitems-centerjustif y-between">
<span className="text-smfon t-semiboldtex t-blu e-600">{challenge.points}points</span>
<button className={`px-4py-2rounded-lgtext-smfont-mediumtransition-colors${
challenge.completed
?'bg-gray-100text-gray-600cursor-not-allowed'
:'bg-blue-600hover:bg-blue-700text-white'
}`}>
{challenge.completed?'Completed':'StartChallenge'}
</button>
</div>
</div>
))}
</div>

{/*ComingSoon*/}
<div className="mt-12b g-gradien t-t o-rfro m-blu e-50t o-indigo-50rounded-lgp-8text-center">
<h3 className="text-2xlfon t-boldtex t-gra y-900m b-4">MoreChallengesComingSoon!🎯</h3>
<p className="text-gra y-600m b-6">
We&apos;reconstantlyaddingnewchallengesacrossdifferenttechnologiesanddifficultylevels.
Wanttoseeaspecificchallenge?Letusknow!
</p>
<button className="bg-blu e-600hover:bg-blu e-700tex t-whitefon t-mediump y-3px-6rounde d-lgtransition-colors">
RequestaChallenge
</button>
</div>
</main>
</div>
);
}