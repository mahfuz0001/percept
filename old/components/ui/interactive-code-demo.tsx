"useclient";

importReact,{useState,useEffect,useRef}from"react";
import { motion,AnimatePresence } from"framer-motion";
import { Play,RotateCcw,Code2,Eye,Sparkles,Check } from"lucide-react";
import { Button } from"@/components/ui/button";
import { Card,CardContent,CardHeader,CardTitle } from"@/components/ui/card";
import { Badge } from"@/components/ui/badge";

const codeExamples = [
{
id:"html",
title:"HTMLBasics",
description:"Createyourfirstwebpage",
code:`<divclass="welcome-card">
<h1>Hello,World!</h1>
<p>Welcometocoding!</p>
<button>GetStarted</button>
</div>`,
preview:`<div style="
background:linear-gradient(135deg,#667eea0%,#764ba2100%);
padding:2rem;
border-radius:12px;
color:white;
text-align:center;
font-family:system-ui;
">
<h1 style="margin:001rem0;font-size:2rem;">Hello,World!</h1>
<p style="margin:001.5rem0;opacity:0.9;">Welcometocoding!</p>
<button style="
background:white;
color:#667eea;
border:none;
padding:0.75rem1.5rem;
border-radius:8px;
font-weight:bold;
cursor:pointer;
">GetStarted</button>
</div>`,
},
{
id:"css",
title:"CSSAnimation",
description:"Makethingsmove",
code:`.bouncing-ball{
width:50px;
height:50px;
background:#ff6b6b;
border-radius:50%;
animation:bounce2sinfinite;
}

@keyframesbounce{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-30px);}
}`,
preview:`<div style="padding:2rem;background:#f8f9fa;border-radius:12px;text-align:center;">
<div style="
width:50px;
height:50px;
background:#ff6b6b;
border-radius:50%;
margin:0auto;
animation:bounce2sinfinite;
"></div>
<style>
@keyframesbounce{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-30px);}
}
</style>
</div>`,
},
{
id:"javascript",
title:"JavaScriptMagic",
description:"Addinteractivity",
code:`function createConfetti() {
const colors = ['#ff6b6b','#4ecdc4','#45b7d1','#f9ca24'];

for(let i = 0;i<50;i++){
const confetti = document.createElement('div');
confetti.style.cssText=\`
position:fixed;
width:10px;
height:10px;
background:\${colors[Math.floor(Math.random()*colors.length)]};
top:-10px;
left:\${Math.random()*100}%;
animation:fall3slinearforwards;
border-radius:50%;
\`;
document.body.appendChild(confetti);
}
}`,
preview:`<div style="padding:2rem;background:#2d3748;color:white;border-radius:12px;text-align:center;">
<buttononclick="createConfetti()"style="
background:linear-gradient(45deg,#ff6b6b,#4ecdc4);
color:white;
border:none;
padding:1rem2rem;
border-radius:8px;
font-weight:bold;
cursor:pointer;
font-size:1.1rem;
">🎉CreateConfetti!</button>
<script>
function createConfetti() {
const colors = ['#ff6b6b','#4ecdc4','#45b7d1','#f9ca24'];
for(let i = 0;i<30;i++){
const confetti = document.createElement('div');
confetti.style.cssText=\`
position:fixed;
width:8px;
height:8px;
background:\${colors[Math.floor(Math.random()*colors.length)]};
top:-10px;
left:\${Math.random()*100}%;
animation:fall2slinearforwards;
border-radius:50%;
z-index:1000;
\`;
document.body.appendChild(confetti);
setTimeout(()=>confetti.remove(),2000);
}
}
</script>
<style>
@keyframesfall{
to{
transform:translateY(100vh)rotate(360deg);
opacity:0;
}
}
</style>
</div>`,
},
];

export function InteractiveCodeDemo() {
const[currentExample,setCurrentExample]=useState(0);
const[isPlaying,setIsPlaying]=useState(false);
const[showPreview,setShowPreview]=useState(false);
const[typedCode,setTypedCode]=useState("");
const[completedSteps,setCompletedSteps]=useState<number[]>([]);
const[hasMounted,setHasMounted]=useState(false);
const demoRef = useRef<HTMLDivElement>(null);

const example = codeExamples[currentExample];

useEffect(()=>{
setTypedCode("");
setShowPreview(false);
setIsPlaying(false);
},[currentExample]);

useEffect(()=>{
if (!hasMounted) {
typeCode();
setHasMounted(true);
}
},[hasMounted]);

const typeCode = async()=>{
if(isPlaying)return;
setIsPlaying(true);
setTypedCode("");

const code = example.code;
for(let i = 0;i<=code.length;i++){
setTypedCode(code.slice(0,i));
await newPromise((resolve)=>setTimeout(resolve,30));
}

setIsPlaying(false);
setShowPreview(true);

if(!completedSteps.includes(currentExample)){
setCompletedSteps((prev)=>[...prev,currentExample]);
}
};

const resetDemo = ()=>{
setTypedCode("");
setShowPreview(false);
setIsPlaying(false);
};

return(
<divref={demoRef}className="w-fullmax-w-4xl mx-auto">
<motion.div
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
className="text-centermb-8"
>
<div className="flex items-centerjustify-centergap-2mb-4">
<Sparkles className="w-6 h-6text-purple-500"/>
<h3 className="text-2xlfont-bold">TryitYourself!</h3>
<Sparkles className="w-6 h-6text-blue-500"/>
</div>
<p className="text-gray-600dark:text-gray-400">
Watchcodecometolifeasyoutypeit
</p>
</motion.div>

<div className="flex flex-wrapjustify-centergap-2mb-6">
{codeExamples.map((ex,index)=>(
<Button
key={ex.id}
variant={currentExample===index?"default":"outline"}
onClick={()=>setCurrentExample(index)}
className="relative"
size="sm"
>
{completedSteps.includes(index)&&(
<Check className="w-4 h-4mr-1text-green-500"/>
)}
{ex.title}
</Button>
))}
</div>

<div className="gridmd:grid-cols-2gap-6">
<Card className="relative overflow-hidden">
<CardHeader className="pb-3">
<div className="flex items-centerjustify-between">
<div>
<CardTitle className="text-lg">{example.title}</CardTitle>
<p className="text-smtext-gray-600dark:text-gray-400">
{example.description}
</p>
</div>
<div className="flexgap-2">
<Button
size="sm"
onClick={typeCode}
disabled={isPlaying}
className="bg-green-600hover:bg-green-700"
>
<Play className="w-4 h-4mr-1"/>
{isPlaying?"Typing...":"Run"}
</Button>
<Buttonsize="sm"variant="outline"onClick={resetDemo}>
<RotateCcw className="w-4 h-4"/>
</Button>
</div>
</div>
</CardHeader>
<CardContent>
<div className="relative">
<div className="bg-gray-900 rounded-lgp-4font-mono text-sm">
<pre className="text-green-400whitespace-pre-wrapoverflow-hidden">
{typedCode}
{isPlaying&&(
<motion.span
animate={{opacity:[1,0]}}
transition={{duration:0.8,repeat:Infinity}}
className="bg-green-400inline-blockw-2 h-5ml-1"
/>
)}
</pre>
</div>
</div>
</CardContent>
</Card>

<Card className="relative overflow-hidden">
<CardHeader className="pb-3">
<div className="flex items-centergap-2">
<Eye className="w-5 h-5"/>
<CardTitle className="text-lg">LivePreview</CardTitle>
{showPreview&&(
<Badgevariant="secondary"className="text-xs">
<Sparkles className="w-3 h-3mr-1"/>
Live
</Badge>
)}
</div>
</CardHeader>
<CardContent>
<AnimatePresencemode="wait">
{showPreview?(
<motion.div
key="preview"
initial={{opacity:0,scale:0.9}}
animate={{opacity:1,scale:1}}
exit={{opacity:0,scale:0.9}}
transition={{duration:0.3}}
className="border rounded-lgoverflow-hiddenbg-whitedark:bg-gray-800"
dangerouslySetInnerHTML={{__html:example.preview}}
/>
):(
<motion.div
key="placeholder"
initial={{opacity:0}}
animate={{opacity:1}}
exit={{opacity:0}}
className="h-32bg-gray-100dark:bg-gray-800 rounded-lgflex items-centerjustify-centertext-gray-500dark:text-gray-400"
>
<div className="text-center">
<Code2 className="w-8 h-8mx-automb-2opacity-50"/>
<p className="text-sm">Runthecodetoseethemagic!</p>
</div>
</motion.div>
)}
</AnimatePresence>
</CardContent>
</Card>
</div>

{completedSteps.length>0&&(
<motion.div
initial={{opacity:0,y:10}}
animate={{opacity:1,y:0}}
className="mt-6text-center"
>
<div className="inline-flex items-centergap-2px-4py-2bg-green-100dark:bg-green-900 rounded-fulltext-green-800dark:text-green-200">
<Check className="w-4 h-4"/>
<span className="text-sm font-medium">
{completedSteps.length}of{codeExamples.length}examples
completed!
</span>
</div>
</motion.div>
)}
</div>
);
}