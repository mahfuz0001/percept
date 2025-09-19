//components/sections/FeaturesSection.tsx
"useclient";

import { motion } from"framer-motion";
import { Zap,Target,Users,Star,CheckCircle } from"lucide-react";
import { Card,CardContent,CardHeader,CardTitle } from"@/components/ui/card";
import { Tabs,TabsContent,TabsList,TabsTrigger } from"@/components/ui/tabs";

const features = [
 {icon:Zap,title:"NoHand-Holding",description:"Minimalguidanceforcesyoutothinkcriticallyanddevelopproblem-solvingskills.",color:"blue"},
 {icon:Target,title:"RealProblems",description:"Facechallengesthatmirroractualdevelopmentwork.Noartificialexamples.",color:"green"},
 {icon:Users,title:"CommunityDriven",description:"Joindeveloperswholearnbydoing,notbyfollowingtutorials.",color:"purple"},
];

const processSteps = [
 {step:"1",title:"GetChallenge",description:"Receiveareal-worldcodingproblem"},
 {step:"2",title:"Struggle",description:"Researchandexperimentindependently"},
 {step:"3",title:"Breakthrough",description:"Experiencethejoyofsolvingityourself"},
 {step:"4",title:"Confidence",description:"Buildgenuineproblem-solvingskills"},
];

const resultsMetrics = [
 {metric:"95%",label:"Completechallengessuccessfully"},
 {metric:"3x",label:"Fasteratsolvingnewproblems"},
 {metric:"87%",label:"Landtheirdreamjobwithin6months"},
];

const learningOutcomes = [
 "Independentproblem-solvingability",
 "Confidenceintacklingunknownchallenges",
 "Researchanddebuggingskills",
 "Real-worlddevelopmentexperience",
];

export default function FeaturesSection() {
 return(
  <section className="py-16bg-gray-50dark:bg-gray-800">
   <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8">
    <motion.divinitial={{opacity:0,y:20}}whileInView={{opacity:1,y:0}}transition={{duration:0.6}}viewport={{once:true}}className="text-centermb-16">
     <h2 className="text-4xlfont-bold text-gray-900dark:text-whitemb-4">IndependentLearningPlatform</h2>
     <p className="text-xltext-gray-600dark:text-gray-400max-w-2xl mx-auto">Research,experiment,andsolveproblemsyourself.Buildgenuineconfidencethroughstruggle-firstlearning.</p>
    </motion.div>

    <TabsdefaultValue="features"className="w-full">
     <TabsList className="gridw-fullmax-w-md mx-autogrid-cols-3mb-12">
      <TabsTrigger value="features">Features</TabsTrigger>
      <TabsTrigger value="process">Process</TabsTrigger>
      <TabsTrigger value="results">Results</TabsTrigger>
     </TabsList>

     <TabsContent value="features"className="space-y-8">
      <div className="gridmd:grid-cols-3gap-8">
       {features.map((feature,index)=>(
        <motion.divkey={index}initial={{opacity:0,y:20}}whileInView={{opacity:1,y:0}}transition={{duration:0.6,delay:index*0.1}}viewport={{once:true}}whileHover={{y:-8,transition:{duration:0.3}}}>
         <Card className="h-fullhover:shadow-xltransition-all duration-300border-0shadow-lg">
          <CardContent className="p-6text-center">
           <div className={`w-16 h-16bg-${feature.color}-100dark:bg-${feature.color}-900/30rounded-fullflex items-centerjustify-centermx-automb-4`}>
            <feature.iconclassName={`w-8 h-8text-${feature.color}-600dark:text-${feature.color}-400`}/>
           </div>
           <h3 className="text-xl font-bold text-gray-900dark:text-whitemb-3">{feature.title}</h3>
           <p className="text-gray-600dark:text-gray-400">{feature.description}</p>
          </CardContent>
         </Card>
        </motion.div>
       ))}
      </div>
     </TabsContent>

     <TabsContent value="process"className="space-y-8">
      <div className="gridmd:grid-cols-2lg:grid-cols-4gap-6">
       {processSteps.map((item,index)=>(
        <motion.divkey={index}initial={{opacity:0,scale:0.8}}whileInView={{opacity:1,scale:1}}transition={{duration:0.5,delay:index*0.1}}viewport={{once:true}}>
         <Card className="text-centerh-full">
          <CardContent className="p-6">
           <div className="w-12 h-12bg-gradient-to-rfrom-blue-600 to-purple-600rounded-fullflex items-centerjustify-centermx-automb-4text-white font-bold text-lg">
            {item.step}
           </div>
           <h3 className="font-bold text-gray-900dark:text-whitemb-2">{item.title}</h3>
           <p className="text-gray-600dark:text-gray-400text-sm">{item.description}</p>
          </CardContent>
</Card>
        </motion.div>
       ))}
      </div>
     </TabsContent>

     <TabsContent value="results"className="space-y-8">
      <div className="gridmd:grid-cols-2gap-8">
       <Card>
        <CardHeader>
         <CardTitle className="flex items-centerspace-x-2">
          <Star className="w-5 h-5text-yellow-500"/>
          <span>SuccessMetrics</span>
         </CardTitle>
        </CardHeader>
        <CardContent>
         <div className="space-y-4">
          {resultsMetrics.map((stat,index)=>(
           <div key={index}className="flex justify-betweenitems-centerp-3bg-gray-50dark:bg-gray-800 rounded-lg">
            <span className="text-gray-600dark:text-gray-400">{stat.label}</span>
            <span className="font-bold text-lgtext-blue-600">{stat.metric}</span>
           </div>
          ))}
         </div>
        </CardContent>
       </Card>

       <Card>
        <CardHeader>
         <CardTitle>LearningOutcomes</CardTitle>
        </CardHeader>
        <CardContent>
         <div className="space-y-3">
          {learningOutcomes.map((outcome,index)=>(
           <div key={index}className="flex items-centerspace-x-3">
            <CheckCircle className="w-5 h-5text-green-500"/>
            <span className="text-gray-700dark:text-gray-300">{outcome}</span>
           </div>
          ))}
         </div>
        </CardContent>
       </Card>
      </div>
     </TabsContent>
    </Tabs>
   </div>
  </section>
 );
}