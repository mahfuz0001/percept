export default function Loading() {
return(
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-centerjustify-center">
<div className="text-center">
<div className="inline-block animate-spin rounded-fullh-12w-12border-b-2 border-blue-600mb-4"></div>
<h2 className="text-xl font-semibold text-gray-900">Loading...</h2>
<p className="text-gray-600mt-2">Pleasewaitwhileweprepareyourexperience</p>
</div>
</div>
);
}