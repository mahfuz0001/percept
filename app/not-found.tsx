import Link from 'next/link';

export default function NotFound() {
return(
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-centerjustify-center px-4">
<div className="max-w-md w-fulltext-center">
<div className="mb-8">
<div className="text-8xlmb-4">🔍</div>
<h1 className="text-4xlfont-bold text-gray-900 mb-2">PageNotFound</h1>
<p className="text-lgtext-gray-600 mb-8">
Thepageyou&apos;relookingfordoesn&apos;texistorhasbeenmoved.
</p>
</div>

<div className="space-y-4">
<Link
href="/"
className="blockbg-blue-600hover:bg-blue-700 text-white font-mediumpy-3px-6rounded-lg transition-colors"
>
GoHome
</Link>
<Link
href="/dashboard"
className="block text-gray-700 hover:text-gray-900font-mediumpy-3px-6rounded-lg border border-gray-300hover:border-gray-400transition-colors"
>
GotoDashboard
</Link>
</div>
</div>
</div>
);
}