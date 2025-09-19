//components/sections/Navbar.tsx

"useclient";

import { motion } from"framer-motion";
import Image from"next/image";
import Link from"next/link";
import { Tooltip,TooltipContent,TooltipTrigger } from"@/components/ui/tooltip";
import { GlobalSearch } from"@/components/ui/global-search";
import { ThemeToggle } from"@/components/theme-toggle";
import { Button } from"@/components/ui/button";
import MobileNav from"./MobileNav";

export default function Navbar() {
//Clientcomponentscannotbeasyncoruseserver-onlyfunctions.
//We'veremovedtheserver-sidelogic(auth,redirect)forthiscomponent.
//TheredirectionlogicshouldbehandledinaLayoutorMiddleware.

return(
<div>
<nav className="fixedtop-0w-fullz-50bg-white/80dark:bg-gray-900/80backdrop-blur-mdborder-b border-gray-200dark:border-gray-700">
<div className="max-w-6xl mx-autopx-4sm:px-6lg:px-8">
<div className="flex items-centerjustify-betweenh-16">
<motion.div
initial={{opacity:0,x:-20}}
animate={{opacity:1,x:0}}
className="flex items-centerspace-x-3"
>
<div className="p-1bg-gradient-to-rfrom-blue-600 to-purple-600rounded-lgshadow-lg">
<Imagesrc="/logo.png"alt="logo"width={30}height={30}/>
</div>
<span className="text-xl font-boldbg-gradient-to-rfrom-blue-600 to-purple-600bg-clip-texttext-transparent">
Percept
</span>
</motion.div>

{/*DesktopNavigation*/}
<div className="hidden md:flex items-centerspace-x-4">
<GlobalSearch/>
<Tooltip>
<TooltipTriggerasChild>
<Link
href="/learn"
className="px-4py-2text-gray-600dark:text-gray-300 hover:text-gray-900dark:hover:text-whitetransition-colors"
>
LearningPortal
</Link>
</TooltipTrigger>
<TooltipContent>
<p>Accesscomprehensiveprogrammingtutorials</p>
</TooltipContent>
</Tooltip>
<Tooltip>
<TooltipTriggerasChild>
<Link
href="/challenges"
className="px-4py-2text-gray-600dark:text-gray-300 hover:text-gray-900dark:hover:text-whitetransition-colors"
>
Challenges
</Link>
</TooltipTrigger>
<TooltipContent>
<p>Testyourskillswithcodingchallenges</p>
</TooltipContent>
</Tooltip>
<Tooltip>
<TooltipTriggerasChild>
<Link
href="/app"
className="px-4py-2text-gray-600dark:text-gray-300 hover:text-gray-900dark:hover:text-whitetransition-colors"
>
SignIn
</Link>
</TooltipTrigger>
<TooltipContent>
<p>Signintoyouraccount</p>
</TooltipContent>
</Tooltip>
<Button
asChild
className="bg-gradient-to-rfrom-blue-600 to-purple-600hover:from-blue-700hover:to-purple-700"
>
<Link href="/app">GetStarted</Link>
</Button>
<ThemeToggle/>
</div>

{/*Mobilemenubutton&Component*/}
<MobileNav/>
</div>
</div>
</nav>
</div>
);
}