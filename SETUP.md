#Percept-Anti-TutorialHellPlatformSetupGuide

Perceptisarevolutionarychallenge-basedlearningplatformthattransformspassivelearnersintoconfident,skilleddevelopers.ThisguidewillhelpyousetuptheplatformwithSupabasedatabaseandClerkauthentication.

##Prerequisites

-Node.js18+andnpm
-ASupabaseaccountandproject
-AClerkaccountandapplication

##SetupInstructions

###1.EnvironmentConfiguration

1.Copytheenvironmenttemplate:
```bash
cp.env.example.env.local
```

2.Fillinyourenvironmentvariablesin`.env.local`:

####SupabaseConfiguration
-Createanewprojectat[supabase.com](https://supabase.com)
-GotoSettings>APItofindyourkeys
-Updatethesevariables:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

####ClerkConfiguration
-Createanewapplicationat[clerk.com](https://clerk.com)
-GotoDevelopers>APIKeystofindyourkeys
-Updatethesevariables:
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

###2.DatabaseSetup

1.InyourSupabaseprojectdashboard,gototheSQLEditor
2.Runtheschemacreationscript:
```sql
--Copyandpastethecontentsofdatabase/schema.sql
```
3.Runtheseeddatascripttopopulateinitialdata:
```sql
--Copyandpastethecontentsofdatabase/seed-data.sql
```

###3.InstallDependencies

```bash
npminstall
```

###4.ConfigureClerkSettings

InyourClerkdashboard:

1.**Sign-in/Sign-upURLs**:
-Sign-inURL:`http://localhost:3000/sign-in`
-Sign-upURL:`http://localhost:3000/sign-up`
-Aftersign-inURL:`http://localhost:3000/dashboard`
-Aftersign-upURL:`http://localhost:3000/dashboard`

2.**SocialProviders**(Optional):
-EnableGoogle,GitHub,orotherOAuthprovidersasneeded

###5.RuntheApplication

```bash
npmrundev
```

Theapplicationwillbeavailableat`http://localhost:3000`.

##ProjectStructure

```
percept/
├──app/#Next.jsappdirectory
│├──dashboard/#Protecteddashboardpage
│├──sign-in/#Clerksign-inpage
│├──sign-up/#Clerksign-uppage
│├──layout.tsx#RootlayoutwithClerkprovider
│└──page.tsx#Landingpage
├──lib/#Utilitylibraries
│├──supabase.ts#Supabaseclientconfiguration
│└──percept-api.ts#APIutilitiesfordatabaseoperations
├──database/#Databaseschemaandseedfiles
│├──schema.sql#Completedatabaseschema
│└──seed-data.sql#Initialdatafortesting
├──middleware.ts#Clerkmiddlewareforrouteprotection
└──.env.example#Environmentvariablestemplate
```

##DatabaseSchemaOverview

TheplatformusesacomprehensivePostgreSQLschemadesignedforchallenge-basedlearning:

###CoreTables

-**users**:ExtendeduserprofileslinkedtoClerk
-**technologies**:Programminglanguagesandframeworks(HTML,CSS,JS,etc.)
-**challenge_categories**:Organizationofchallengesbytype
-**challenges**:Individualcodingchallengeswithproblemsandsolutions
-**user_challenge_progress**:Trackinguserprogressthroughchallenges
-**achievements**:Gamificationsystemwithbadgesandpoints
-**user_achievements**:User'searnedachievements
-**user_analytics**:Dailylearningstatistics
-**learning_paths**:Curatedsequencesofchallenges
-**code_submissions**:Usercodesubmissionsforanalysis

###KeyFeatures

-**RowLevelSecurity(RLS)**:Ensuresuserscanonlyaccesstheirowndata
-**ProgressiveHints**:AI-poweredhintsystemstoredinJSONB
-**Real-timeProgress**:Trackscompletion,timespent,andscores
-**Analytics**:Comprehensivelearninganalyticsandstreaktracking

##AuthenticationFlow

1.**LandingPage**:Unauthenticatedusersseethemarketingsite
2.**SignUp/In**:ClerkhandlesauthenticationwithcustomizableUI
3.**Auto-redirect**:Authenticatedusersareredirectedtodashboard
4.**ProtectedRoutes**:Middlewareprotectsdashboardandchallengeroutes
5.**UserSync**:UserdataisautomaticallysyncedwithSupabase

##DevelopmentFeatures

-**TypeScript**:Fulltypesafetyacrosstheapplication
-**TailwindCSS**:Utility-firststylingsystem
-**ServerComponents**:OptimizedforperformancewithNext.js15
-**APIIntegration**:ReadyforGeminiAIintegrationforcodeanalysis

##NextSteps

Aftersetup,youcan:

1.**AddChallenges**:Usethedatabasestructuretoaddnewcodingchallenges
2.**CustomizeUI**:ModifytheTailwind-basedcomponents
3.**IntegrateAI**:ConnecttoGeminiAPIforcodeanalysisandhints
4.**AddFeatures**:BuildtheMonacocodeeditorandchallengesystem

##Support

Forissuesorquestions:
-Checkthedatabaseschemain`database/schema.sql`
-ReviewAPIutilitiesin`lib/percept-api.ts`
-Ensureenvironmentvariablesarecorrectlyconfigured
-VerifySupabaseRLSpoliciesareproperlysetup

TheplatformisnowreadyfordevelopmentandcanbeextendedwithadditionalfeaturesliketheMonacocodeeditor,AI-poweredhints,andchallengemanagementsystem.