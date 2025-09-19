//components/sections/TestimonialsSection.tsx
"useclient";

import { motion } from"framer-motion";
import { Star } from"lucide-react";
import { Card,CardContent,CardDescription } from"@/components/ui/card";
import { Avatar,AvatarFallback,AvatarImage } from"@/components/ui/avatar";
import { Badge } from"@/components/ui/badge";

const testimonials = [
 {
  name:"SarahChen",
  role:"FrontendDeveloper",
  company:"Google",
  content:"PerceptchangedhowIlearn.Insteadofcopyingcode,Inowsolverealproblemsandunderstandthewhybehindeverysolution.",
  avatar:"https://images.unsplash.com/photo-1494790108755-2616b612b5c4?w=64&h=64&fit=crop&crop=face",
 },
 {
  name:"MarcusRodriguez",
  role:"FullStackEngineer",
  company:"Microsoft",
  content:"Thestruggle-firstapproachbuiltmyconfidence.NowItackleanycodingchallengewithoutfearofgettingstuck.",
  avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
 },
 {
  name:"PriyaPatel",
  role:"SoftwareEngineer",
  company:"Meta",
  content:"Fromtutorialhelltoproblem-solvingmasterin3months.Thebestinvestmentinmycodingjourney.",
  avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
 },
];

export default function TestimonialsSection() {
 return(
  <section className="py-20bg-whitedark:bg-gray-900">
   <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8">
    <motion.divinitial={{opacity:0,y:30}}whileInView={{opacity:1,y:0}}transition={{duration:0.8}}viewport={{once:true}}className="text-centermb-16">
     <Badgevariant="secondary"className="mb-4">SuccessStories</Badge>
     <h2 className="text-4xlfont-bold text-gray-900dark:text-whitemb-4">LovedbyDevelopersWorldwide</h2>
     <p className="text-xltext-gray-600dark:text-gray-400max-w-3xl mx-auto">Seehowdeveloperstransformedtheircareersbyescapingtutorialhell</p>
    </motion.div>

    <div className="gridmd:grid-cols-3gap-8">
     {testimonials.map((testimonial,index)=>(
      <motion.divkey={index}initial={{opacity:0,scale:0.9}}whileInView={{opacity:1,scale:1}}transition={{duration:0.5,delay:index*0.1}}viewport={{once:true}}>
       <Card className="p-6h-fullshadow-lg">
        <CardContent className="p-0">
         <div className="flex items-centermb-4">
          <Avatar className="h-12w-12mr-4">
           <AvatarImagesrc={testimonial.avatar}alt={testimonial.name}/>
           <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
           <h3 className="font-bold text-gray-900dark:text-white">{testimonial.name}</h3>
           <p className="text-smtext-gray-600dark:text-gray-400">
            {testimonial.role},{testimonial.company}
           </p>
          </div>
         </div>
         <CardDescription className="text-lgitalictext-gray-700dark:text-gray-300">
          {testimonial.content}
         </CardDescription>
       </CardContent>
</Card>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}