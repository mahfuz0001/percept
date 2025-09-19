//components/sections/PhilosophySection.tsx
"useclient";

import { motion } from"framer-motion";
import { Target,CheckCircle,XCircle } from"lucide-react";
import { Card,CardContent,CardDescription,CardHeader,CardTitle } from"@/components/ui/card";

export default function PhilosophySection() {
 return(
  <section className="py-20bg-whitedark:bg-gray-900">
   <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8">
    <motion.divinitial={{opacity:0,y:40}}whileInView={{opacity:1,y:0}}transition={{duration:0.8,delay:0.2}}viewport={{once:true}}className="gridmd:grid-cols-2gap-12items-centermb-24">
     <div>
      <h2 className="text-3xlfont-bold text-gray-900dark:text-whitemb-6">OurPhilosophy</h2>
      <div className="space-y-6">
       <Card className="border-red-200dark:border-red-800">
        <CardContent className="p-6">
         <div className="flexitems-startspace-x-4">
          <XCircle className="w-6 h-6text-red-500flex-shrink-0mt-1"/>
          <div>
           <h3 className="font-semibold text-gray-900dark:text-whitemb-2">Traditionaltutorialscreatepassivelearners</h3>
           <p className="text-gray-600dark:text-gray-400">Youfollowsteps,copycode,andfeellikeyouunderstand—untilyoufacearealproblemalone.</p>
          </div>
         </div>
        </CardContent>
       </Card>

       <Card className="border-green-200dark:border-green-800">
        <CardContent className="p-6">
         <div className="flexitems-startspace-x-4">
          <CheckCircle className="w-6 h-6text-green-500flex-shrink-0mt-1"/>
          <div>
           <h3 className="font-semibold text-gray-900dark:text-whitemb-2">Ourchallengesforceactivelearning</h3>
           <p className="text-gray-600dark:text-gray-400">You&apos;llstruggle,research,experiment,andeventuallysolveproblemsindependently.</p>
          </div>
         </div>
        </CardContent>
       </Card>

       <Card className="bg-gradient-to-rfrom-blue-50 to-purple-50dark:from-blue-900/20dark:to-purple-900/20border-blue-200dark:border-blue-700">
        <CardContent className="p-6">
         <p className="text-blue-900dark:text-blue-200font-medium">Thisstruggleisnotabug—it&apos;sthefeaturethatbuildsgenuinedeveloperconfidence.</p>
        </CardContent>
       </Card>
      </div>
     </div>

     <Card className="shadow-2xl">
      <CardHeader>
       <CardTitle className="text-2xlfont-bold text-gray-900dark:text-white">RealProblems</CardTitle>
       <CardDescription className="text-gray-600dark:text-gray-400">Facechallengesthatmirroractualdevelopmentwork.Noartificialexamples.</CardDescription>
      </CardHeader>
      <CardContent>
       <div className="space-y-4">
        {["ResponsiveThree-ColumnGrid","TypeScriptFormValidation","ReactStateManagement","APIIntegration&Caching"].map((challenge,index)=>(
         <motion.divkey={index}initial={{opacity:0,x:-20}}whileInView={{opacity:1,x:0}}transition={{delay:index*0.1}}className="flex items-centerspace-x-3p-3rounded-lgbg-gray-50dark:bg-gray-800">
          <Target className="w-5 h-5text-blue-600"/>
          <span className="text-gray-700dark:text-gray-300font-medium">{challenge}</span>
         </motion.div>
        ))}
       </div>
      </CardContent>
     </Card>
    </motion.div>
   </div>
  </section>
 );
}