//components/sections/HeroSection.tsx
"useclient";

importReact,{useState}from"react";
import{motion}from"framer-motion";
import{ArrowRight,Play,Rocket}from"lucide-react";
importLinkfrom"next/link";
import{Button}from"@/components/ui/button";
import{Badge}from"@/components/ui/badge";
import{Dialog,DialogContent,DialogHeader,DialogTitle,DialogTrigger}from"@/components/ui/dialog";
importVideoModalfrom"../VideoModal";
importStatsGridfrom"../StatsGrid";

export default function HeroSection() {
const[isVideoModalOpen,setIsVideoModalOpen]=useState(false);

const statsData = [
{number:"10,000+",label:"ChallengesSolved"},
{number:"5,000+",label:"ActiveLearners"},
{number:"95%",label:"SuccessRate"},
{number:"24/7",label:"CommunitySupport"},
];

return(
<sectionclassName="pt-32pb-20px-4sm:px-6lg:px-8relative">
{/*Backgrounddecorations*/}
<divclassName="absoluteinset-0overflow-hiddenpointer-events-none">
<divclassName="absolute-top-40-right-40w-80h-80bg-gradient-to-rfrom-blue-400to-purple-400rounded-fullmix-blend-multiplyfilterblur-xlopacity-20animate-pulse"></div>
<divclassName="absolute-bottom-40-left-40w-80h-80bg-gradient-to-rfrom-purple-400to-pink-400rounded-fullmix-blend-multiplyfilterblur-xlopacity-20animate-pulsedelay-1000"></div>
<divclassName="absolutetop-1/2left-1/2transform-translate-x-1/2-translate-y-1/2w-96h-96bg-gradient-to-rfrom-blue-300to-purple-300rounded-fullmix-blend-multiplyfilterblur-2xlopacity-10animate-pulsedelay-500"></div>
</div>

<divclassName="max-w-7xlmx-autorelativetext-center">
<motion.divinitial={{opacity:0,scale:0.8}}animate={{opacity:1,scale:1}}transition={{duration:0.6}}>
<Badgevariant="secondary"className="inline-flexitems-centerpx-4py-2bg-gradient-to-rfrom-blue-100to-purple-100dark:from-blue-900dark:to-purple-900rounded-fulltext-blue-800dark:text-blue-200text-smfont-mediummb-6shadow-lg">
<RocketclassName="w-4h-4mr-2"/>
Joindeveloperswhoescapedtutorialhell
</Badge>
</motion.div>

<motion.h1initial={{opacity:0,y:30}}animate={{opacity:1,y:0}}transition={{duration:0.8,delay:0.1}}className="text-5xlmd:text-7xlfont-boldtext-gray-900dark:text-whitemb-6leading-tight">
EscapeTutorialHell
<spanclassName="blockbg-gradient-to-rfrom-blue-600via-purple-600to-pink-600bg-clip-texttext-transparentanimate-pulse">
BuildRealSkills
</span>
</motion.h1>

<motion.pinitial={{opacity:0,y:30}}animate={{opacity:1,y:0}}transition={{duration:0.8,delay:0.2}}className="text-xlmd:text-2xltext-gray-600dark:text-gray-300max-w-4xlmx-automb-10leading-relaxed">
Stopfollowingstep-by-steptutorials.Startsolvingrealproblems.Buildtheconfidencetotackleanycodingchallengeindependentlywithour
<spanclassName="font-semiboldbg-gradient-to-rfrom-blue-600to-purple-600bg-clip-texttext-transparent">struggle-firstlearningapproach</span>.
</motion.p>

<motion.divinitial={{opacity:0,y:30}}animate={{opacity:1,y:0}}transition={{duration:0.8,delay:0.3}}className="flexflex-colsm:flex-rowgap-4justify-centermb-12">
<ButtonasChildsize="lg"className="groupbg-gradient-to-rfrom-blue-600to-purple-600hover:from-blue-700hover:to-purple-700text-lgpx-8py-4shadow-lghover:shadow-xltransformhover:-translate-y-1transition-allduration-300">
<Linkhref="/app">
StartBuildingRealSkills
<ArrowRightclassName="ml-2w-5h-5group-hover:translate-x-1transition-transform"/>
</Link>
</Button>

<Dialogopen={isVideoModalOpen}onOpenChange={setIsVideoModalOpen}>
<DialogTriggerasChild>
<Buttonvariant="outline"size="lg"className="grouptext-lgpx-8py-4border-2hover:border-blue-500hover:text-blue-600dark:hover:text-blue-400transition-allduration-300">
<PlayclassName="mr-2w-5h-5group-hover:scale-110transition-transform"/>
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