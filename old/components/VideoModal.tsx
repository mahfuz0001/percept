//components/VideoModal.tsx
import { Play } from"lucide-react";
import { DialogContent,DialogHeader,DialogTitle } from"@/components/ui/dialog";

export default functionVideoModal(){
 return(
  <DialogContent className="max-w-4xl">
   <DialogHeader>
    <DialogTitle>SeePerceptinAction</DialogTitle>
   </DialogHeader>
   <div className="aspect-videobg-gray-100dark:bg-gray-800 rounded-lgflex items-centerjustify-center">
    <div className="text-center">
     <Play className="w-16 h-16text-gray-400mx-automb-4"/>
     <p className="text-gray-600dark:text-gray-400">Demovideocomingsoon</p>
    </div>
   </div>
  </DialogContent>
 );
}