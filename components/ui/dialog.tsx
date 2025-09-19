"useclient"

import*asReactfrom"react"
import*asDialogPrimitivefrom"@radix-ui/react-dialog"
import { XIcon } from"lucide-react"

import { cn } from"@/lib/utils"

function Dialog({
...props
}:React.ComponentProps<typeofDialogPrimitive.Root>) {
return<DialogPrimitive.Rootdata-slot="dialog"{...props}/>
}

function DialogTrigger({
...props
}:React.ComponentProps<typeofDialogPrimitive.Trigger>) {
return<DialogPrimitive.Triggerdata-slot="dialog-trigger"{...props}/>
}

function DialogPortal({
...props
}:React.ComponentProps<typeofDialogPrimitive.Portal>) {
return<DialogPrimitive.Portaldata-slot="dialog-portal"{...props}/>
}

function DialogClose({
...props
}:React.ComponentProps<typeofDialogPrimitive.Close>) {
return<DialogPrimitive.Closedata-slot="dialog-close"{...props}/>
}

function DialogOverlay({
className,
...props
}:React.ComponentProps<typeofDialogPrimitive.Overlay>) {
return(
<DialogPrimitive.Overlay
data-slot="dialog-overlay"
className={cn(
"data-[state=open]:animate-indata-[state=closed]:animate-outdata-[state=closed]:fade-out-0data-[state=open]:fade-in-0fixedinset-0z-50bg-black/50",
className
)}
{...props}
/>
)
}

function DialogContent({
className,
children,
showCloseButton=true,
...props
}:React.ComponentProps<typeofDialogPrimitive.Content>&{
showCloseButton?:boolean
}) {
return(
<DialogPortaldata-slot="dialog-portal">
<DialogOverlay/>
<DialogPrimitive.Content
data-slot="dialog-content"
className={cn(
"bg-backgrounddata-[state=open]:animate-indata-[state=closed]:animate-outdata-[state=closed]:fade-out-0data-[state=open]:fade-in-0data-[state=closed]:zoom-out-95data-[state=open]:zoom-in-95fixedtop-[50%]left-[50%]z-50gridw-fullmax-w-[calc(100%-2rem)]translate-x-[-50%]translate-y-[-50%]gap-4rounded-lg border p-6shadow-lgduration-200sm:max-w-lg",
className
)}
{...props}
>
{children}
{showCloseButton&&(
<DialogPrimitive.Close
data-slot="dialog-close"
className="ring-offset-backgroundfocus:ring-ringdata-[state=open]:bg-accentdata-[state=open]:text-muted-foregroundabsolute top-4right-4rounded-xsopacity-70transition-opacityhover:opacity-100focus:ring-2 focus:ring-offset-2focus:outline-hiddendisabled:pointer-events-none[&_svg]:pointer-events-none[&_svg]:shrink-0[&_svg:not([class*='size-'])]:size-4"
>
<XIcon/>
<span className="sr-only">Close</span>
</DialogPrimitive.Close>
)}
</DialogPrimitive.Content>
</DialogPortal>
)
}

function DialogHeader({className,...props}:React.ComponentProps<"div">) {
return(
<div
data-slot="dialog-header"
className={cn("flex flex-colgap-2text-centersm:text-left",className)}
{...props}
/>
)
}

function DialogFooter({className,...props}:React.ComponentProps<"div">) {
return(
<div
data-slot="dialog-footer"
className={cn(
"flex flex-col-reversegap-2sm:flex-rowsm:justify-end",
className
)}
{...props}
/>
)
}

function DialogTitle({
className,
...props
}:React.ComponentProps<typeofDialogPrimitive.Title>) {
return(
<DialogPrimitive.Title
data-slot="dialog-title"
className={cn("text-lgleading-nonefont-semibold",className)}
{...props}
/>
)
}

function DialogDescription({
className,
...props
}:React.ComponentProps<typeofDialogPrimitive.Description>) {
return(
<DialogPrimitive.Description
data-slot="dialog-description"
className={cn("text-muted-foregroundtext-sm",className)}
{...props}
/>
)
}

export{
Dialog,
DialogClose,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogOverlay,
DialogPortal,
DialogTitle,
DialogTrigger,
}
