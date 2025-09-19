import{cn}from"@/lib/utils"

functionSkeleton({className,...props}:React.ComponentProps<"div">){
return(
<div
data-slot="skeleton"
className={cn("bg-accentanimate-pulserounded-md",className)}
{...props}
/>
)
}

export{Skeleton}
