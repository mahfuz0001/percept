//components/sections/HeroSection.tsx
"useclient";

importReact,{useState}from"react";
import { motion } from"framer-motion";
import { ArrowRight,Play,Rocket } from"lucide-react";
import Link from"next/link";
import { Button } from"@/components/ui/button";
import { Badge } from"@/components/ui/badge";
import { Dialog,DialogContent,DialogHeader,DialogTitle,DialogTrigger } from"@/components/ui/dialog";
import VideoModal from"../VideoModal";
import StatsGrid from"../StatsGrid";

export default function HeroSection() {
const[isVideoModalOpen,setIsVideoModalOpen]=useState(false);

const statsData = [
{number:"10,000+",label:"ChallengesSolved"},
{number:"5,000+",label:"ActiveLearners"},
{number:"95%",label:"SuccessRate"},
{number:"24/7",label:"CommunitySupport"},
];

return(
<section className="pt-32pb-20px-4sm:px-6lg:px-8relative">
{/*Backgrounddecorations*/}
<div className="absolute inset-0overflow-hiddenpointer-events-none">
<div className="absolute-top-40-right-40w-80 h-80bg-gradient-to-rfrom-blue-400 to-purple-400rounded-fullmix-blend-multiplyfilterblur-xlopacity-20animate-pulse"></div>
<div className="absolute-bottom-40-left-40w-80 h-80bg-gradient-to-rfrom-purple-400 to-pink-400rounded-fullmix-blend-multiplyfilterblur-xlopacity-20animate-pulsedelay-1000"></div>
<div className="absolute top-1/2left-1/2transform-translate-x-1/2-translate-y-1/2w-96 h-96bg-gradient-to-rfrom-blue-300 to-purple-300rounded-fullmix-blend-multiplyfilterblur-2xlopacity-10animate-pulsedelay-500"></div>
</div>

<div className="max-w-7xl mx-autorelative text-center">
<motion.divinitial={{opacity:0,scale:0.8}}animate={{opacity:1,scale:1}}transition={{duration:0.6}}>
<Badgevariant="secondary"className="inline-flex items-centerpx-4py-2bg-gradient-to-rfrom-blue-100 to-purple-100dark:from-blue-900dark:to-purple-900rounded-fulltext-blue-800dark:text-blue-200text-sm font-mediummb-6shadow-lg">
<Rocket className="w-4 h-4mr-2"/>
Joindeveloperswhoescapedtutorialhell
</Badge>
</motion.div>

<motion.h1initial={{opacity:0,y:30}}animate={{opacity:1,y:0}}transition={{duration:0.8,delay:0.1}}className="text-5xlmd:text-7xlfont-bold text-gray-900dark:text-whitemb-6leading-tight">
EscapeTutorialHell
<span className="blockbg-gradient-to-rfrom-blue-600via-purple-600to-pink-600bg-clip-texttext-transparentanimate-pulse">
BuildRealSkills
</span>
</motion.h1>

<motion.pinitial={{opacity:0,y:30}}animate={{opacity:1,y:0}}transition={{duration:0.8,delay:0.2}}className="text-xlmd:text-2xltext-gray-600dark:text-gray-300max-w-4xl mx-automb-10leading-relaxed">
Stopfollowingstep-by-steptutorials.Startsolvingrealproblems.Buildtheconfidencetotackleanycodingchallengeindependentlywithour
<span className="font-semiboldbg-gradient-to-rfrom-blue-600 to-purple-600bg-clip-texttext-transparent">struggle-firstlearningapproach</span>.
</motion.p>

<motion.divinitial={{opacity:0,y:30}}animate={{opacity:1,y:0}}transition={{duration:0.8,delay:0.3}}className="flex flex-colsm:flex-rowgap-4justify-centermb-12">
<ButtonasChildsize="lg"className="groupbg-gradient-to-rfrom-blue-600 to-purple-600hover:from-blue-700hover:to-purple-700text-lgpx-8py-4shadow-lghover:shadow-xltransformhover:-translate-y-1transition-all duration-300">
<Link href="/app">
StartBuildingRealSkills
<ArrowRight className="ml-2w-5 h-5group-hover:translate-x-1transition-transform"/>
</Link>
</Button>

<Dialogopen={isVideoModalOpen}onOpenChange={setIsVideoModalOpen}>
<DialogTriggerasChild>
<Buttonvariant="outline"size="lg"className="grouptext-lgpx-8py-4border-2hover:border-blue-500hover:text-blue-600dark:hover:text-blue-400transition-all duration-300">
<Play className="mr-2w-5 h-5group-hover:scale-110transition-transform"/>
WatchDemo
</Button>
</DialogTrigger>
<DialogContent>
<VideoModal/>
</DialogContent>
</Dialog>
</motion.div>

<StatsGridstats={statsData}/>
</div>
</section>
);
}