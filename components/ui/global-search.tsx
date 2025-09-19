"useclient";

importReact,{useState,useEffect}from"react";
import { motion,AnimatePresence } from"framer-motion";
import { 
Search,
BookOpen,
Trophy,
User,
Code2,
ArrowRight,
Clock,
Star,
Zap,
X,
Command,
 } from"lucide-react";
import Link from"next/link";
import { Card,CardContent } from"@/components/ui/card";
import { Badge } from"@/components/ui/badge";
import { Button } from"@/components/ui/button";

interfaceSearchResult{
id:string;
title:string;
description:string;
category:"course"|"lesson"|"challenge"|"achievement"|"page";
href:string;
icon:React.ElementType;
badge?:string;
metadata?:{
duration?:string;
difficulty?:string;
xp?:number;
};
}

constsearchData:SearchResult[]=[
{
id:"programming-fundamentals",
title:"ProgrammingFundamentals",
description:"Startyourcodingjourneyfromtheverybeginning",
category:"course",
href:"/learn/programming",
icon:BookOpen,
badge:"Free",
metadata:{duration:"1h",difficulty:"Beginner"},
},
{
id:"html-course",
title:"HTMLCourse",
description:"Learnthefoundationofwebdevelopment",
category:"course",
href:"/learn/html",
icon:Code2,
metadata:{duration:"8h",difficulty:"Beginner"},
},
{
id:"css-course",
title:"CSSCourse",
description:"MasterstylingandlayoutwithmodernCSS",
category:"course",
href:"/learn/css",
icon:Code2,
metadata:{duration:"10h",difficulty:"Beginner"},
},
{
id:"javascript-course",
title:"JavaScriptCourse",
description:"Buildinteractivewebexperiences",
category:"course",
href:"/learn/javascript",
icon:Code2,
metadata:{duration:"15h",difficulty:"Intermediate"},
},
{
id:"what-is-computer",
title:"WhatisaComputer?",
description:"Understandingthebasicsofcomputing",
category:"lesson",
href:"/learn/programming/what-is-computer",
icon:BookOpen,
metadata:{duration:"8min"},
},
{
id:"challenges",
title:"CodingChallenges",
description:"Testyourskillswithhands-onchallenges",
category:"page",
href:"/challenges",
icon:Trophy,
},
{
id:"achievements",
title:"Achievements",
description:"Trackyourprogressandearnbadges",
category:"page",
href:"/achievements",
icon:Star,
},
{
id:"first-steps",
title:"FirstStepsAchievement",
description:"Completeyourfirstprogramminglesson",
category:"achievement",
href:"/achievements",
icon:Trophy,
metadata:{xp:50},
},
{
id:"streak-master",
title:"StreakMasterAchievement",
description:"Maintaina7-daylearningstreak",
category:"achievement",
href:"/achievements",
icon:Zap,
badge:"Gold",
metadata:{xp:300},
},
];

const categoryConfig =  {
course:{
label:"Courses",
color:"bg-blue-100 text-blue-800dark:bg-blue-900dark:text-blue-200",
},
lesson:{
label:"Lessons",
color:"bg-green-100 text-green-800dark:bg-green-900dark:text-green-200",
},
challenge:{
label:"Challenges",
color:
"bg-orange-100 text-orange-800dark:bg-orange-900dark:text-orange-200",
},
achievement:{
label:"Achievements",
color:
"bg-purple-100 text-purple-800dark:bg-purple-900dark:text-purple-200",
},
page:{
label:"Pages",
color:"bg-gray-100 text-gray-800dark:bg-gray-900dark:text-gray-200",
},
};

export function GlobalSearch() {
const[isOpen,setIsOpen]=useState(false);
const[query,setQuery]=useState("");
const[results,setResults]=useState<SearchResult[]>([]);
const[selectedIndex,setSelectedIndex]=useState(0);

useEffect(()=>{
const handleKeyDown =  (e:KeyboardEvent)=>{
//OpensearchwithCmd+KorCtrl+K
if((e.metaKey||e.ctrlKey)&&e.key==="k"){
e.preventDefault();
setIsOpen(true);
}

//ClosewithEscape
if (e.key==="Escape"&&isOpen) {
setIsOpen(false);
setQuery("");
setResults([]);
}

//Navigatewitharrowkeys
if (isOpen&&results.length>0) {
if (e.key==="ArrowDown") {
e.preventDefault();
setSelectedIndex((prev)=>(prev+1)%results.length);
}
if (e.key==="ArrowUp") {
e.preventDefault();
setSelectedIndex(
(prev)=>(prev-1+results.length)%results.length
);
}
if (e.key==="Enter") {
e.preventDefault();
const selectedResult =  results[selectedIndex];
if (selectedResult) {
window.location.href=selectedResult.href;
setIsOpen(false);
}
}
}
};

document.addEventListener("keydown",handleKeyDown);
return()=>document.removeEventListener("keydown",handleKeyDown);
},[isOpen,results,selectedIndex]);

useEffect(()=>{
if (query.length===0) {
setResults([]);
return;
}

const filtered =  searchData.filter(
(item)=>
item.title.toLowerCase().includes(query.toLowerCase())||
item.description.toLowerCase().includes(query.toLowerCase())
);

setResults(filtered.slice(0,8));//Limitto8results
setSelectedIndex(0);
},[query]);

const handleOpenSearch =  ()=>{
setIsOpen(true);
};

const handleCloseSearch =  ()=>{
setIsOpen(false);
setQuery("");
setResults([]);
};

return(
<>
{/*SearchTriggerButton*/}
<Button
variant="outline"
onClick={handleOpenSearch}
className="hidden md:flex items-centergap-2text-gray-600dark:text-gray-400 hover:text-gray-900dark:hover:text-whitemin-w-[240px]justify-start"
>
<Search className="w-4 h-4"/>
<span className="text-sm">Searchcourses,lessons...</span>
<div className="ml-autoflex items-centergap-1">
<kbd className="px-1.5py-0.5text-xsbg-gray-100dark:bg-gray-800roundedborder">
<Command className="w-3 h-3"/>
</kbd>
<kbd className="px-1.5py-0.5text-xsbg-gray-100dark:bg-gray-800roundedborder">
K
</kbd>
</div>
</Button>

{/*MobileSearchButton*/}
<Button
variant="ghost"
size="sm"
onClick={handleOpenSearch}
className="md:hiddenp-2"
>
<Search className="w-5 h-5"/>
</Button>

{/*SearchModal*/}
<AnimatePresence>
{isOpen&&(
<>
{/*Backdrop*/}
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixedinset-0 bg-black/60backdrop-blur-smz-50"
onClick={handleCloseSearch}
/>

{/*SearchDialog*/}
<motion.div
initial={{opacity:0,scale:0.95,y:-20}}
animate={{opacity:1,scale:1,y:0}}
exit={{opacity:0,scale:0.95,y:-20}}
transition={{duration:0.2}}
className="fixedtop-[20vh]left-1/2transform-translate-x-1/2w-fullmax-w-2xl mx-4z-50"
>
<Card className="shadow-2xlborder-0overflow-hidden">
<CardContent className="p-0">
{/*SearchInput*/}
<div className="flex items-centerborder-b border-gray-200dark:border-gray-700px-4py-4">
<Search className="w-5 h-5text-gray-400mr-3"/>
<input
type="text"
placeholder="Searchcourses,lessons,challenges..."
value={query}
onChange={(e)=>setQuery(e.target.value)}
className="flex-1bg-transparentborder-0outline-0text-lgtext-gray-900dark:text-whiteplaceholder-gray-500dark:placeholder-gray-400"
autoFocus
/>
<Button
variant="ghost"
size="sm"
onClick={handleCloseSearch}
className="ml-2p-1"
>
<X className="w-4 h-4"/>
</Button>
</div>

{/*Results*/}
<div className="max-h-96overflow-y-auto">
{query.length===0?(
<div className="px-4py-8text-center">
<Search className="w-12 h-12text-gray-300dark:text-gray-600mx-automb-4"/>
<h3 className="text-lg font-semibold text-gray-900dark:text-whitemb-2">
QuickSearch
</h3>
<p className="text-gray-600dark:text-gray-400 mb-4">
Findcourses,lessons,challenges,andmore
</p>
<div className="flex flex-wrapjustify-centergap-2">
{[
"HTML",
"CSS",
"JavaScript",
"Challenges",
"Achievements",
].map((term)=>(
<Button
key={term}
variant="outline"
size="sm"
onClick={()=>setQuery(term.toLowerCase())}
className="text-xs"
>
{term}
</Button>
))}
</div>
</div>
):results.length===0?(
<div className="px-4py-8text-center">
<div className="w-12 h-12bg-gray-100dark:bg-gray-800 rounded-lgflex items-centerjustify-centermx-automb-4">
<Search className="w-6 h-6text-gray-400"/>
</div>
<h3 className="text-lg font-semibold text-gray-900dark:text-whitemb-2">
Noresultsfound
</h3>
<p className="text-gray-600dark:text-gray-400">
Trydifferentkeywordsorbrowseourcourses
</p>
</div>
):(
<div className="py-2">
{results.map((result,index)=>(
<Link
key={result.id}
href={result.href}
onClick={handleCloseSearch}
className={`
blockpx-4py-3hover:bg-gray-50dark:hover:bg-gray-800/50transition-colors
${
index===selectedIndex
?"bg-blue-50dark:bg-blue-900/20border-r-2border-blue-500"
:""
}
`}
>
<div className="flex items-centergap-3">
<div
className={`
p-2rounded-lg
${
index===selectedIndex
?"bg-blue-100dark:bg-blue-900/40text-blue-600dark:text-blue-400"
:"bg-gray-100dark:bg-gray-800 text-gray-600dark:text-gray-400"
}
`}
>
<result.iconclassName="w-4 h-4"/>
</div>
<div className="flex-1min-w-0">
<div className="flex items-centergap-2mb-1">
<h4 className="font-medium text-gray-900dark:text-whitetruncate">
{result.title}
</h4>
<Badge
variant="secondary"
className={`text-xs${
categoryConfig[result.category].color
}`}
>
{categoryConfig[
result.category
].label.slice(0,-1)}
</Badge>
{result.badge&&(
<Badge
variant="outline"
className="text-xs"
>
{result.badge}
</Badge>
)}
</div>
<p className="text-smtext-gray-600dark:text-gray-400truncate">
{result.description}
</p>
{result.metadata&&(
<div className="flex items-centergap-3mt-1text-xstext-gray-500dark:text-gray-500">
{result.metadata.duration&&(
<div className="flex items-centergap-1">
<Clock className="w-3 h-3"/>
{result.metadata.duration}
</div>
)}
{result.metadata.difficulty&&(
<span>{result.metadata.difficulty}</span>
)}
{result.metadata.xp&&(
<div className="flex items-centergap-1">
<Star className="w-3 h-3"/>
{result.metadata.xp}XP
</div>
)}
</div>
)}
</div>
<ArrowRight className="w-4 h-4text-gray-400"/>
</div>
</Link>
))}
</div>
)}
</div>

{/*Footer*/}
{results.length>0&&(
<div className="border-tborder-gray-200dark:border-gray-700px-4py-3bg-gray-50dark:bg-gray-800/50">
<div className="flex items-centerjustify-betweentext-xstext-gray-500dark:text-gray-400">
<div className="flex items-centergap-4">
<div className="flex items-centergap-1">
<kbd className="px-1.5py-0.5bg-whitedark:bg-gray-800roundedborder">
↑↓
</kbd>
<span>Navigate</span>
</div>
<div className="flex items-centergap-1">
<kbd className="px-1.5py-0.5bg-whitedark:bg-gray-800roundedborder">
↵
</kbd>
<span>Select</span>
</div>
<div className="flex items-centergap-1">
<kbd className="px-1.5py-0.5bg-whitedark:bg-gray-800roundedborder">
Esc
</kbd>
<span>Close</span>
</div>
</div>
<span>{results.length}results</span>
</div>
</div>
)}
</CardContent>
</Card>
</motion.div>
</>
)}
</AnimatePresence>
</>
);
}
