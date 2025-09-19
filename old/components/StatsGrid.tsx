//components/StatsGrid.tsx
import { motion } from"framer-motion";

//Definethetypeforasinglestatobject
interfaceStat{
number:string;
label:string;
}

//Definethepropsinterfaceforthecomponent
interfaceStatsGridProps{
stats:Stat[];
}

export default functionStatsGrid({stats}:StatsGridProps){
return(
<motion.divinitial={{opacity:0,y:30}}animate={{opacity:1,y:0}}transition={{duration:0.8,delay:0.4}}className="grid grid-cols-2md:grid-cols-4gap-8max-w-4xl mx-auto">
{stats.map((stat,index)=>(
<motion.divkey={index}whileHover={{scale:1.05}}className="text-centerp-4rounded-lgbg-white/50dark:bg-gray-800/50backdrop-blur-smshadow-lg border border-gray-200dark:border-gray-700">
<div className="text-3xlmd:text-4xlfont-boldbg-gradient-to-rfrom-blue-600 to-purple-600bg-clip-texttext-transparentmb-2">
{stat.number}
</div>
<div className="text-gray-600dark:text-gray-400text-smmd:text-base font-medium">
{stat.label}
</div>
</motion.div>
))}
</motion.div>
);
}