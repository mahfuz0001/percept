"useclient";

importReact,{useState,useEffect}from"react";
import { motion,AnimatePresence } from"framer-motion";
import { 
Plus,
X,
BookOpen,
Trophy,
User,
Search,
Zap,
MessageCircle,
Settings,
Home,
Code2,
Rocket,
 } from"lucide-react";
import Link from"next/link";
import { Button } from"@/components/ui/button";
import { Badge } from"@/components/ui/badge";
import { 
Tooltip,
TooltipContent,
TooltipProvider,
TooltipTrigger,
 } from"@/components/ui/tooltip";

interfaceQuickAction{
id:string;
label:string;
href:string;
icon:React.ElementType;
badge?:string;
color:string;
description:string;
}

constquickActions:QuickAction[]=[
{
id:"learn",
label:"Learn",
href:"/learn",
icon:BookOpen,
color:"bg-blue-500hover:bg-blue-600",
description:"Startlearningwithinteractivetutorials",
},
{
id:"challenges",
label:"Challenges",
href:"/challenges",
icon:Trophy,
badge:"New",
color:"bg-orange-500hover:bg-orange-600",
description:"Testyourskillswithcodingchallenges",
},
{
id:"dashboard",
label:"Dashboard",
href:"/app",
icon:User,
color:"bg-purple-500hover:bg-purple-600",
description:"Viewyourprogressandachievements",
},
{
id:"quickstart",
label:"QuickStart",
href:"/learn/programming",
icon:Rocket,
badge:"Popular",
color:"bg-green-500hover:bg-green-600",
description:"Jumprightintoprogrammingfundamentals",
},
];

constmoreActions:QuickAction[]=[
{
id:"home",
label:"Home",
href:"/",
icon:Home,
color:"bg-gray-500hover:bg-gray-600",
description:"Backtohomepage",
},
{
id:"community",
label:"Community",
href:"#",
icon:MessageCircle,
badge:"Soon",
color:"bg-pink-500hover:bg-pink-600",
description:"Connectwithotherlearners",
},
];

export function FloatingActionButton() {
const[isOpen,setIsOpen]=useState(false);
const[isVisible,setIsVisible]=useState(true);
const[lastScrollY,setLastScrollY]=useState(0);

useEffect(()=>{
const handleScroll = ()=>{
const currentScrollY = window.scrollY;

//HideFABwhenscrollingdown,showwhenscrollingup
if (currentScrollY>lastScrollY&&currentScrollY>100) {
setIsVisible(false);
setIsOpen(false);
}else{
setIsVisible(true);
}

setLastScrollY(currentScrollY);
};

window.addEventListener("scroll",handleScroll,{passive:true});
return()=>window.removeEventListener("scroll",handleScroll);
},[lastScrollY]);

const toggleMenu = ()=>{
setIsOpen(!isOpen);
};

return(
<TooltipProvider>
<div className="fixedbottom-6right-6z-50">
<AnimatePresence>
{isVisible&&(
<motion.div
initial={{opacity:0,scale:0.8,y:20}}
animate={{opacity:1,scale:1,y:0}}
exit={{opacity:0,scale:0.8,y:20}}
transition={{duration:0.3}}
>
{/*ActionItems*/}
<AnimatePresence>
{isOpen&&(
<div className="mb-4space-y-3">
{/*PrimaryActions*/}
{quickActions.map((action,index)=>(
<motion.div
key={action.id}
initial={{opacity:0,scale:0.8,x:50}}
animate={{opacity:1,scale:1,x:0}}
exit={{opacity:0,scale:0.8,x:50}}
transition={{
duration:0.2,
delay:index*0.05,
type:"spring",
stiffness:400,
}}
>
<Tooltip>
<TooltipTriggerasChild>
<Link href={action.href}>
<Button
size="lg"
className={`
relative h-14w-14rounded-fullshadow-lg
${action.color}
text-whitetransition-all duration-200
hover:shadow-xlhover:scale-110
border-2border-white/20
`}
onClick={()=>setIsOpen(false)}
>
<action.iconclassName="w-6 h-6"/>
{action.badge&&(
<Badge
variant="secondary"
className="absolute-top-2-right-2text-xspx-1.5py-0.5bg-red-500 text-whiteborder-white"
>
{action.badge}
</Badge>
)}
</Button>
</Link>
</TooltipTrigger>
<TooltipContentside="left"className="max-w-xs">
<div className="text-center">
<p className="font-medium">{action.label}</p>
<p className="text-xstext-gray-500mt-1">
{action.description}
</p>
</div>
</TooltipContent>
</Tooltip>
</motion.div>
))}

{/*Separator*/}
<motion.div
initial={{opacity:0,scaleX:0}}
animate={{opacity:1,scaleX:1}}
exit={{opacity:0,scaleX:0}}
transition={{
duration:0.2,
delay:quickActions.length*0.05,
}}
className="h-pxbg-gray-300dark:bg-gray-600my-2"
/>

{/*SecondaryActions*/}
{moreActions.map((action,index)=>(
<motion.div
key={action.id}
initial={{opacity:0,scale:0.8,x:50}}
animate={{opacity:1,scale:1,x:0}}
exit={{opacity:0,scale:0.8,x:50}}
transition={{
duration:0.2,
delay:(quickActions.length+index+1)*0.05,
type:"spring",
stiffness:400,
}}
>
<Tooltip>
<TooltipTriggerasChild>
<Link href={action.href}>
<Button
size="lg"
variant="outline"
className={`
relative h-12w-12rounded-fullshadow-lg
bg-whitedark:bg-gray-800hover:bg-gray-50dark:hover:bg-gray-700
border-2border-gray-200dark:border-gray-600
transition-all duration-200hover:shadow-xlhover:scale-110
`}
onClick={()=>setIsOpen(false)}
>
<action.iconclassName="w-5 h-5"/>
{action.badge&&(
<Badge
variant="secondary"
className="absolute-top-2-right-2text-xspx-1.5py-0.5bg-yellow-500 text-whiteborder-white"
>
{action.badge}
</Badge>
)}
</Button>
</Link>
</TooltipTrigger>
<TooltipContentside="left"className="max-w-xs">
<div className="text-center">
<p className="font-medium">{action.label}</p>
<p className="text-xstext-gray-500mt-1">
{action.description}
</p>
</div>
</TooltipContent>
</Tooltip>
</motion.div>
))}
</div>
)}
</AnimatePresence>

{/*MainFABButton*/}
<Tooltip>
<TooltipTriggerasChild>
<Button
size="lg"
onClick={toggleMenu}
className={`
h-16w-16rounded-fullshadow-xl
bg-gradient-to-rfrom-blue-600 to-purple-600
hover:from-blue-700hover:to-purple-700
text-whitetransition-all duration-300
hover:shadow-2xlhover:scale-110
border-4border-white/20
${isOpen?"rotate-45":"rotate-0"}
`}
>
{isOpen?(
<X className="w-8 h-8"/>
):(
<div className="relative">
<Plus className="w-8 h-8"/>
<motion.div
animate={{
scale:[1,1.2,1],
opacity:[0.7,1,0.7],
}}
transition={{
duration:2,
repeat:Infinity,
ease:"easeInOut",
}}
className="absolute inset-0 bg-white/20rounded-full"
/>
</div>
)}
</Button>
</TooltipTrigger>
<TooltipContentside="left">
<div className="text-center">
<p className="font-medium">QuickActions</p>
<p className="text-xstext-gray-500mt-1">
{isOpen?"Closemenu":"Accesslearningtools"}
</p>
</div>
</TooltipContent>
</Tooltip>
</motion.div>
)}
</AnimatePresence>
</div>
</TooltipProvider>
);
}
