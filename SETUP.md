# Percept - Anti-Tutorial Hell Platform Setup Guide

Percept is a revolutionary challenge-based learning platform that transforms passive learners into confident, skilled developers. This guide will help you set up the platform with Supabase database and Clerk authentication.

## Prerequisites

- Node.js 18+ and npm
- A Supabase account and project
- A Clerk account and application

## Setup Instructions

### 1. Environment Configuration

1. Copy the environment template:
   ```bash
   cp .env.example .env.local
   ```

2. Fill in your environment variables in `.env.local`:

#### Supabase Configuration
- Create a new project at [supabase.com](https://supabase.com)
- Go to Settings > API to find your keys
- Update these variables:
  ```
  NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
  SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
  ```

#### Clerk Configuration
- Create a new application at [clerk.com](https://clerk.com)
- Go to Developers > API Keys to find your keys
- Update these variables:
  ```
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
  CLERK_SECRET_KEY=your_clerk_secret_key
  ```

### 2. Database Setup

1. In your Supabase project dashboard, go to the SQL Editor
2. Run the schema creation script:
   ```sql
   -- Copy and paste the contents of database/schema.sql
   ```
3. Run the seed data script to populate initial data:
   ```sql
   -- Copy and paste the contents of database/seed-data.sql
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Clerk Settings

In your Clerk dashboard:

1. **Sign-in/Sign-up URLs**: 
   - Sign-in URL: `http://localhost:3000/sign-in`
   - Sign-up URL: `http://localhost:3000/sign-up`
   - After sign-in URL: `http://localhost:3000/dashboard`
   - After sign-up URL: `http://localhost:3000/dashboard`

2. **Social Providers** (Optional):
   - Enable Google, GitHub, or other OAuth providers as needed

### 5. Run the Application

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

```
percept/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Protected dashboard page
│   ├── sign-in/          # Clerk sign-in page
│   ├── sign-up/          # Clerk sign-up page
│   ├── layout.tsx        # Root layout with Clerk provider
│   └── page.tsx          # Landing page
├── lib/                   # Utility libraries
│   ├── supabase.ts       # Supabase client configuration
│   └── percept-api.ts    # API utilities for database operations
├── database/             # Database schema and seed files
│   ├── schema.sql        # Complete database schema
│   └── seed-data.sql     # Initial data for testing
├── middleware.ts         # Clerk middleware for route protection
└── .env.example         # Environment variables template
```

## Database Schema Overview

The platform uses a comprehensive PostgreSQL schema designed for challenge-based learning:

### Core Tables

- **users**: Extended user profiles linked to Clerk
- **technologies**: Programming languages and frameworks (HTML, CSS, JS, etc.)
- **challenge_categories**: Organization of challenges by type
- **challenges**: Individual coding challenges with problems and solutions
- **user_challenge_progress**: Tracking user progress through challenges
- **achievements**: Gamification system with badges and points
- **user_achievements**: User's earned achievements
- **user_analytics**: Daily learning statistics
- **learning_paths**: Curated sequences of challenges
- **code_submissions**: User code submissions for analysis

### Key Features

- **Row Level Security (RLS)**: Ensures users can only access their own data
- **Progressive Hints**: AI-powered hint system stored in JSONB
- **Real-time Progress**: Tracks completion, time spent, and scores
- **Analytics**: Comprehensive learning analytics and streak tracking

## Authentication Flow

1. **Landing Page**: Unauthenticated users see the marketing site
2. **Sign Up/In**: Clerk handles authentication with customizable UI
3. **Auto-redirect**: Authenticated users are redirected to dashboard
4. **Protected Routes**: Middleware protects dashboard and challenge routes
5. **User Sync**: User data is automatically synced with Supabase

## Development Features

- **TypeScript**: Full type safety across the application
- **Tailwind CSS**: Utility-first styling system
- **Server Components**: Optimized for performance with Next.js 15
- **API Integration**: Ready for Gemini AI integration for code analysis

## Next Steps

After setup, you can:

1. **Add Challenges**: Use the database structure to add new coding challenges
2. **Customize UI**: Modify the Tailwind-based components
3. **Integrate AI**: Connect to Gemini API for code analysis and hints
4. **Add Features**: Build the Monaco code editor and challenge system

## Support

For issues or questions:
- Check the database schema in `database/schema.sql`
- Review API utilities in `lib/percept-api.ts`
- Ensure environment variables are correctly configured
- Verify Supabase RLS policies are properly set up

The platform is now ready for development and can be extended with additional features like the Monaco code editor, AI-powered hints, and challenge management system.