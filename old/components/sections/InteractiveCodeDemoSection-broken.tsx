//components/sections/InteractiveCodeDemoSection.tsx
"useclient";

import { motion } from"framer-motion";
import { InteractiveCodeDemo } from"@/components/ui/interactive-code-demo";

export default function InteractiveCodeDemoSection() {
 return(
  <section className="py-20bg-gradient-to-brfrom-gray-50via-blue-50to-purple-50dark:from-gray-900dark:via-blue-900/20dark:to-purple-900/20">
   <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8">
    <motion.divinitial={{opacity:0,y:20}}whileInView={{opacity:1,y:0}}transition={{duration:0.6}}viewport={{once:true}}>
     <InteractiveCodeDemo/>
    </motion.div>
   </div>
  </section>
 );
}