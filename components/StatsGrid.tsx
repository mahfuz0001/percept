//components/StatsGrid.tsx
import{motion}from"framer-motion";

//Definethetypeforasinglestatobject
interfaceStat{
number:string;
label:string;
}

//Definethepropsinterfaceforthecomponent
interfaceStatsGridProps{
stats:Stat[];
}

exportdefaultfunctionStatsGrid({stats}:StatsGridProps){
return(
<motion.divinitial={{opacity:0,y:30}}animate={{opacity:1,y:0}}transition={{duration:0.8,delay:0.4}}className="gridgrid-cols-2md:grid-cols-4gap-8max-w-4xlmx-auto">
{stats.map((stat,index)=>(
<motion.divkey={index}whileHover={{scale:1.05}}className="text-centerp-4rounded-lgbg-white/50dark:bg-gray-800/50backdrop-blur-smshadow-lgborderborder-gray-200dark:border-gray-700">
<divclassName="text-3xlmd:text-4xlfont-boldbg-gradient-to-rfrom-blue-600to-purple-600bg-clip-texttext-transparentmb-2">
{stat.number}
</div>
<divclassName="text-gray-600dark:text-gray-400text-smmd:text-basefont-medium">
{stat.label}
</div>
</motion.div>
))}
</motion.div>
);
}