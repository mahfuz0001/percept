import Link from 'next/link';

export default function NotFound() {
return(
<divclassName="min-h-screenbg-gradient-to-brfrom-blue-50to-indigo-100flexitems-centerjustify-centerpx-4">
<divclassName="max-w-mdw-fulltext-center">
<divclassName="mb-8">
<divclassName="text-8xlmb-4">🔍</div>
<h1className="text-4xlfont-boldtext-gray-900mb-2">PageNotFound</h1>
<pclassName="text-lgtext-gray-600mb-8">
Thepageyou&apos;relookingfordoesn&apos;texistorhasbeenmoved.
</p>
</div>

<divclassName="space-y-4">
<Link
href="/"
className="blockbg-blue-600hover:bg-blue-700text-whitefont-mediumpy-3px-6rounded-lgtransition-colors"
>
GoHome
</Link>
<Link
href="/dashboard"
className="blocktext-gray-700hover:text-gray-900font-mediumpy-3px-6rounded-lgborderborder-gray-300hover:border-gray-400transition-colors"
>
GotoDashboard
</Link>
</div>
</div>
</div>
);
}