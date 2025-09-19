"useclient";

importReact,{useState,useEffect}from"react";
import { motion,AnimatePresence } from"framer-motion";
import { 
X,
ArrowRight,
ArrowLeft,
CheckCircle,
Sparkles,
Target,
Zap,
Trophy,
Users,
BookOpen,
Code2,
 } from"lucide-react";
import { Button } from"@/components/ui/button";
import { Card,CardContent } from"@/components/ui/card";
import { Badge } from"@/components/ui/badge";

interfaceTourStep{
id:string;
title:string;
description:string;
icon:React.ElementType;
target?:string;
action?:{
text:string;
href:string;
};
highlight?:boolean;
}

consttourSteps:TourStep[]=[
{
id:"welcome",
title:"WelcometoPercept!",
description:
"Readytoescapetutorialhell?Let'sshowyouaroundourrevolutionarylearningplatform.",
icon:Sparkles,
highlight:true,
},
{
id:"philosophy",
title:"OurAnti-TutorialPhilosophy",
description:
"Wedon'tspoon-feedyoucode.Instead,you'llstruggle,research,andsolverealproblemsindependently.",
icon:Target,
target:"#philosophy-section",
},
{
id:"learning",
title:"InteractiveLearningPortal",
description:
"Startwithprogrammingfundamentals,thenprogressthroughHTML,CSS,JavaScript,andbeyond.",
icon:BookOpen,
action:{
text:"ExploreLearningPortal",
href:"/learn",
},
},
{
id:"challenges",
title:"Real-WorldChallenges",
description:
"Testyourskillswithhands-oncodingchallengesthatmirroractualdevelopmentwork.",
icon:Trophy,
action:{
text:"ViewChallenges",
href:"/challenges",
},
},
{
id:"community",
title:"JointheCommunity",
description:
"Connectwiththousandsofdeveloperswhoaremasteringcodingthroughstruggle-firstlearning.",
icon:Users,
},
{
id:"start",
title:"ReadytoBegin?",
description:
"Yourjourneytobecomingaconfidentdeveloperstartsnow.Nomorepassivelearning!",
icon:Zap,
action:{
text:"StartLearning",
href:"/learn/programming",
},
highlight:true,
},
];

export function WelcomeTour() {
const[isOpen,setIsOpen]=useState(false);
const[currentStep,setCurrentStep]=useState(0);
const[hasSeenTour,setHasSeenTour]=useState(false);

useEffect(()=>{
//Checkifuserhasseenthetourbefore
const tourComplet ed =  localStorage.getItem("welcome-tour-completed");
if (!tourCompleted) {
//Showtourafterabriefdelay
const timer = setTimeout(()=>{
setIsOpen(true);
},2000);
return()=>clearTimeout(timer);
}else{
setHasSeenTour(true);
}
},[]);

const nextStep = ()=>{
if (currentStep<tourSteps.length-1) {
setCurrentStep(currentStep+1);
}
};

const prevStep = ()=>{
if (currentStep>0) {
setCurrentStep(currentStep-1);
}
};

const closeTour = ()=>{
setIsOpen(false);
localStorage.setItem("welcome-tour-completed","true");
setHasSeenTour(true);
};

const restartTour = ()=>{
setCurrentStep(0);
setIsOpen(true);
};

const currentTourStep = tourSteps[currentStep];
const progress = ((currentStep+1)/tourSteps.length)*100;

if (hasSeenTour&&!isOpen) {
return(
<motion.div
initial={{opacity:0,scale:0.8}}
animate={{opacity:1,scale:1}}
className="fixedbottom-6left-6z-40"
>
<Button
onClick={restartTour}
variant="outline"
size="sm"
className="bg-white/90backdrop-blur-smshadow-lghover:shadow-xltransition-all duration-200"
>
<BookOpen className="w-4 h-4mr-2"/>
TourGuide
</Button>
</motion.div>
);
}

return(
<AnimatePresence>
{isOpen&&(
<>
{/*Backdrop*/}
<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="fixedinset-0 bg-black/60backdrop-blur-smz-50"
onClick={closeTour}
/>

{/*TourCard*/}
<motion.div
initial={{opacity:0,scale:0.8,y:50}}
animate={{opacity:1,scale:1,y:0}}
exit={{opacity:0,scale:0.8,y:50}}
transition={{type:"spring",duration:0.5}}
className="fixedtop-1/2left-1/2transform-translate-x-1/2-translate-y-1/2z-50w-fullmax-w-md mx-4"
>
<Card className="shadow-2xlborder-0overflow-hidden">
{/*ProgressBar*/}
<div className="h-2bg-gray-100dark:bg-gray-800">
<motion.div
initial={{width:0}}
animate={{width:`${progress}%`}}
transition={{duration:0.3}}
className="h-fullbg-gradient-to-rfrom-blue-500 to-purple-500"
/>
</div>

<CardContent className="p-6">
{/*Header*/}
<div className="flex items-centerjustify-betweenmb-4">
<div className="flex items-centergap-2">
<div
className={`
p-2rounded-lg${
currentTourStep.highlight
?"bg-gradient-to-rfrom-blue-500 to-purple-500"
:"bg-blue-100dark:bg-blue-900"
}
`}
>
<currentTourStep.icon
className={`w-5 h-5${
currentTourStep.highlight
?"text-white"
:"text-blue-600dark:text-blue-400"
}`}
/>
</div>
<Badgevariant="secondary"className="text-xs">
{currentStep+1}of{tourSteps.length}
</Badge>
</div>
<Button
variant="ghost"
size="sm"
onClick={closeTour}
className="h-8w-8p-0"
>
<X className="w-4 h-4"/>
</Button>
</div>

{/*Content*/}
<motion.div
key={currentStep}
initial={{opacity:0,x:20}}
animate={{opacity:1,x:0}}
exit={{opacity:0,x:-20}}
transition={{duration:0.3}}
>
<h3 className="text-xl font-boldmb-3text-gray-900dark:text-white">
{currentTourStep.title}
</h3>
<p className="text-gray-600dark:text-gray-300 mb-6leading-relaxed">
{currentTourStep.description}
</p>
</motion.div>

{/*ActionButton*/}
{currentTourStep.action&&(
<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
transition={{delay:0.2}}
className="mb-6"
>
<Button
asChild
className="w-fullbg-gradient-to-rfrom-blue-600 to-purple-600hover:from-blue-700hover:to-purple-700"
>
<a href={currentTourStep.action.href}onClick={closeTour}>
{currentTourStep.action.text}
<ArrowRight className="w-4 h-4ml-2"/>
</a>
</Button>
</motion.div>
)}

{/*Navigation*/}
<div className="flex items-centerjustify-between">
<Button
variant="outline"
size="sm"
onClick={prevStep}
disabled={currentStep===0}
className="flex items-centergap-2"
>
<ArrowLeft className="w-4 h-4"/>
Previous
</Button>

<div className="flexgap-1">
{tourSteps.map((_,index)=>(
<button
key={index}
onClick={()=>setCurrentStep(index)}
className={`
w-2 h-2rounded-fulltransition-all duration-200
${
index===currentStep
?"bg-blue-600scale-125"
:index<currentStep
?"bg-green-500"
:"bg-gray-300dark:bg-gray-600"
}
`}
/>
))}
</div>

{currentStep===tourSteps.length-1?(
<Button
size="sm"
onClick={closeTour}
className="flex items-centergap-2bg-green-600hover:bg-green-700"
>
<CheckCircle className="w-4 h-4"/>
GetStarted!
</Button>
):(
<Button
size="sm"
onClick={nextStep}
className="flex items-centergap-2"
>
Next
<ArrowRight className="w-4 h-4"/>
</Button>
)}
</div>

{/*SkipOption*/}
<div className="mt-4text-center">
<button
onClick={closeTour}
className="text-smtext-gray-500 hover:text-gray-700dark:text-gray-400dark:hover:text-gray-200transition-colors"
>
Skiptour
</button>
</div>
</CardContent>
</Card>
</motion.div>
</>
)}
</AnimatePresence>
);
}
