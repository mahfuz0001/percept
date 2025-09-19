"useclient";

import*asReactfrom"react";
import{ThemeProviderasNextThemesProvider}from"next-themes";

interfaceThemeProviderProps{
children:React.ReactNode;
[key:string]:unknown;
}

exportfunctionThemeProvider({children,...props}:ThemeProviderProps){
return<NextThemesProvider{...props}>{children}</NextThemesProvider>;
}
