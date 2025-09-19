import{clsx,typeClassValue}from"clsx"
import{twMerge}from"tailwind-merge"

export function cn(...inputs:ClassValue[]) {
returntwMerge(clsx(inputs))
}
