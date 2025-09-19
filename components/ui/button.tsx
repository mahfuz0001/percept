import*asReactfrom"react"
import { Slot } from"@radix-ui/react-slot"
import { cva,typeVariantProps } from"class-variance-authority"

import { cn } from"@/lib/utils"

const buttonVariants = cva(
"inline-flex items-centerjustify-centergap-2whitespace-nowraprounded-mdtext-sm font-mediumtransition-alldisabled:pointer-events-nonedisabled:opacity-50[&_svg]:pointer-events-none[&_svg:not([class*='size-'])]:size-4shrink-0[&_svg]:shrink-0outline-nonefocus-visible:border-ringfocus-visible:ring-ring/50focus-visible:ring-[3px]aria-invalid:ring-destructive/20dark:aria-invalid:ring-destructive/40aria-invalid:border-destructive",
{
variants:{
variant:{
default:"bg-primarytext-primary-foregroundhover:bg-primary/90",
destructive:
"bg-destructivetext-whitehover:bg-destructive/90focus-visible:ring-destructive/20dark:focus-visible:ring-destructive/40dark:bg-destructive/60",
outline:
"border bg-backgroundshadow-xshover:bg-accenthover:text-accent-foregrounddark:bg-input/30dark:border-inputdark:hover:bg-input/50",
secondary:
"bg-secondarytext-secondary-foregroundhover:bg-secondary/80",
ghost:
"hover:bg-accenthover:text-accent-foregrounddark:hover:bg-accent/50",
link:"text-primaryunderline-offset-4hover:underline",
},
size:{
default:"h-9px-4py-2has-[>svg]:px-3",
sm:"h-8rounded-mdgap-1.5px-3has-[>svg]:px-2.5",
lg:"h-10rounded-mdpx-6has-[>svg]:px-4",
icon:"size-9",
},
},
defaultVariants:{
variant:"default",
size:"default",
},
}
)

function Button({
className,
variant,
size,
asChild=false,
...props
}:React.ComponentProps<"button">&
VariantProps<typeofbuttonVariants>&{
asChild?:boolean
}) {
const Comp = asChild?Slot:"button"

return(
<Comp
data-slot="button"
className={cn(buttonVariants({variant,size,className}))}
{...props}
/>
)
}

export{Button,buttonVariants}
