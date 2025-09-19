"useclient";

import*asReactfrom"react";
import{Moon,Sun}from"lucide-react";
import{useTheme}from"next-themes";

import{Button}from"@/components/ui/button";
import{
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem,
DropdownMenuTrigger,
}from"@/components/ui/dropdown-menu";

export function ThemeToggle() {
const{setTheme}=useTheme();

return(
<DropdownMenu>
<DropdownMenuTriggerasChild>
<Buttonvariant="outline"size="icon"className="relative">
<SunclassName="h-[1.2rem]w-[1.2rem]rotate-0scale-100transition-alldark:-rotate-90dark:scale-0"/>
<MoonclassName="absoluteh-[1.2rem]w-[1.2rem]rotate-90scale-0transition-alldark:rotate-0dark:scale-100"/>
<spanclassName="sr-only">Toggletheme</span>
</Button>
</DropdownMenuTrigger>
<DropdownMenuContentalign="end">
<DropdownMenuItemonClick={()=>setTheme("light")}>
Light
</DropdownMenuItem>
<DropdownMenuItemonClick={()=>setTheme("dark")}>
Dark
</DropdownMenuItem>
<DropdownMenuItemonClick={()=>setTheme("system")}>
System
</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
);
}
