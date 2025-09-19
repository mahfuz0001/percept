import Link from 'next/link';

export default function DemoPage() {
return(
<div className="min-h-screen bg-gradient-to-br from-blue-50via-whiteto-indigo-50">
{/*Header*/}
<header className="relative z-10">
<div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8">
<div className="flex justify-betweenitems-centerpy-6">
<div className="flex items-center">
<h1 className="text-2xlfont-bold text-gray-900">Percept</h1>
</div>
<div className="flex items-centerspace-x-4">
<Link
href="#demo"
className="text-gray-700 hover:text-gray-900font-mediumtransition-colors"
>
SignIn
</Link>
<Link
href="#demo"
className="bg-blue-600hover:bg-blue-700 text-white font-mediumpy-2px-4rounded-lg transition-colors"
>
GetStarted
</Link>
</div>
</div>
</div>
</header>

{/*HeroSection*/}
<main className="relative">
<div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8pt-20pb-32">
<div className="text-center">
<h1 className="text-5xlmd:text-6xlfont-bold text-gray-900 mb-6">
Escape
<span className="text-blue-600">TutorialHell</span>
</h1>
<p className="text-xlmd:text-2xltext-gray-600 mb-8max-w-3xl mx-auto">
Transformfrompassivelearnertoconfidentdeveloperthrough
<strong>real-worldchallenges</strong>thatbuildgenuineproblem-solvingskills.
</p>
<div className="flex flex-colsm:flex-rowgap-4justify-centeritems-centermb-12">
<Link
href="#demo"
className="bg-blue-600hover:bg-blue-700 text-white font-semiboldpy-4px-8rounded-lgtext-lgtransition-all duration-300shadow-lghover:shadow-xltransformhover:-translate-y-1"
>
StartYourJourney
</Link>
<Link
href="#features"
className="text-gray-700 hover:text-gray-900font-semiboldpy-4px-8rounded-lgtext-lgtransition-colorsborder-2border-gray-300hover:border-gray-400"
>
LearnMore→
</Link>
</div>

{/*SocialProof*/}
<div className="flex flex-colsm:flex-rowitems-centerjustify-centergap-8text-gray-600">
<div className="flex items-center">
<span className="text-2xlmr-2">⚡</span>
<span className="font-medium">500+Challenges</span>
</div>
<div className="flex items-center">
<span className="text-2xlmr-2">👥</span>
<span className="font-medium">10,000+Developers</span>
</div>
<div className="flex items-center">
<span className="text-2xlmr-2">🏆</span>
<span className="font-medium">95%SuccessRate</span>
</div>
</div>
</div>
</div>

{/*DemoAlert*/}
<section className="py-12bg-blue-600">
<div className="max-w-4xl mx-autotext-centerpx-4sm:px-6lg:px-8">
<h2 className="text-2xlmd:text-3xlfont-bold text-whitemb-4">
🚀EnhancedUIShowcase
</h2>
<p className="text-lgtext-blue-100 mb-6">
ProfessionalUIimprovementsforthePerceptplatform
</p>
<div className="bg-white/10rounded-lgp-6text-leftmax-w-2xl mx-auto">
<h3 className="font-semibold text-whitemb-3">✅ImplementedFeatures:</h3>
<ul className="text-blue-100space-y-1text-sm">
<li>•Fixedauthentication404errors</li>
<li>•Enhancedlandingpagedesign</li>
<li>•Addederrorhandling&ratelimiting</li>
<li>•Createdrichdashboard</li>
<li>•Builtchallenges&profilepages</li>
<li>•Addedanalytics&progresstracking</li>
</ul>
</div>
</div>
</section>

{/*FeaturesSection*/}
<section id="features"className="py-20bg-white">
<div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8">
<div className="text-centermb-16">
<h2 className="text-3xlmd:text-4xlfont-bold text-gray-900 mb-4">
WhyPerceptWorks
</h2>
<p className="text-xltext-gray-600max-w-2xl mx-auto">
Ouranti-tutorialapproachbuildsrealdeveloperskills
</p>
</div>

<div className="grid grid-cols-1md:grid-cols-3gap-8">
<div className="text-centerp-6">
<div className="w-16 h-16bg-blue-100 rounded-fullflex items-centerjustify-centermx-automb-4">
<span className="text-2xl">🎯</span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">
NoHand-Holding
</h3>
<p className="text-gray-600">
Getproblems,notsolutions.Learntoresearchandbuildindependently.
</p>
</div>

<div className="text-centerp-6">
<div className="w-16 h-16bg-green-100 rounded-fullflex items-centerjustify-centermx-automb-4">
<span className="text-2xl">🏗️</span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">
RealChallenges
</h3>
<p className="text-gray-600">
SolveactualproblemsacrossHTML,CSS,JavaScript,React,andAPIs.
</p>
</div>

<div className="text-centerp-6">
<div className="w-16 h-16bg-purple-100 rounded-fullflex items-centerjustify-centermx-automb-4">
<span className="text-2xl">🤖</span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-2">
AI-PoweredHints
</h3>
<p className="text-gray-600">
Getprogressivenudgeswithoutspoilingsolutions.
</p>
</div>
</div>
</div>
</section>

{/*CTASection*/}
<section className="py-20bg-blue-600">
<div className="max-w-4xl mx-autotext-centerpx-4sm:px-6lg:px-8">
<h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4">
ReadytoBreakFreefromTutorialHell?
</h2>
<p className="text-xltext-blue-100 mb-8">
Joindeveloperstransformingtheirskillsthroughrealproblemsolving
</p>
<Link
href="#demo"
className="bg-whitehover:bg-gray-100 text-blue-600font-semiboldpy-4px-8rounded-lgtext-lgtransition-colorsshadow-lghover:shadow-xlinline-block"
>
StartSolvingRealProblems
</Link>
</div>
</section>
</main>

{/*Footer*/}
<footer className="bg-gray-900 text-whitepy-12">
<div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8">
<div className="text-center">
<h3 className="text-2xlfont-boldmb-4">Percept</h3>
<p className="text-gray-400 mb-4">
Theanti-tutorialhellplatformforconfidentdevelopers
</p>
</div>
</div>
</footer>
</div>
);
}