import*asReactfrom"react"

import { cn } from"@/lib/utils"

function Card({className,...props}:React.ComponentProps<"div">) {
return(
<div
data-slot="card"
className={cn(
"bg-cardtext-card-foregroundflex flex-colgap-6rounded-xl border py-6shadow-sm",
className
)}
{...props}
/>
)
}

function CardHeader({className,...props}:React.ComponentProps<"div">) {
return(
<div
data-slot="card-header"
className={cn(
"@container/card-headergridauto-rows-mingrid-rows-[auto_auto]items-startgap-1.5px-6has-data-[slot=card-action]:grid-cols-[1fr_auto][.border-b]:pb-6",
className
)}
{...props}
/>
)
}

function CardTitle({className,...props}:React.ComponentProps<"div">) {
return(
<div
data-slot="card-title"
className={cn("leading-nonefont-semibold",className)}
{...props}
/>
)
}

function CardDescription({className,...props}:React.ComponentProps<"div">) {
return(
<div
data-slot="card-description"
className={cn("text-muted-foregroundtext-sm",className)}
{...props}
/>
)
}

function CardAction({className,...props}:React.ComponentProps<"div">) {
return(
<div
data-slot="card-action"
className={cn(
"col-start-2row-span-2row-start-1self-startjustify-self-end",
className
)}
{...props}
/>
)
}

function CardContent({className,...props}:React.ComponentProps<"div">) {
return(
<div
data-slot="card-content"
className={cn("px-6",className)}
{...props}
/>
)
}

function CardFooter({className,...props}:React.ComponentProps<"div">) {
return(
<div
data-slot="card-footer"
className={cn("flex items-centerpx-6[.border-t]:pt-6",className)}
{...props}
/>
)
}

export{
Card,
CardHeader,
CardFooter,
CardTitle,
CardAction,
CardDescription,
CardContent,
}
