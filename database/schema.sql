-- Percept Platform Database Schema
-- This schema supports the anti-tutorial hell platform with challenge-based learning

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Users table (extends Clerk user data)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  clerk_user_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_seen_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  preferences JSONB DEFAULT '{}'::JSONB
);

-- Technologies table (HTML, CSS, JavaScript, TypeScript, React, etc.)
CREATE TABLE IF NOT EXISTS technologies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon_url TEXT,
  color TEXT,
  difficulty_level INTEGER DEFAULT 1, -- 1 = Beginner, 2 = Intermediate, 3 = Advanced
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Challenge categories
CREATE TABLE IF NOT EXISTS challenge_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Challenges table
CREATE TABLE IF NOT EXISTS challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  difficulty_level INTEGER NOT NULL DEFAULT 1, -- 1 = Beginner, 2 = Intermediate, 3 = Advanced
  category_id UUID REFERENCES challenge_categories(id) ON DELETE CASCADE,
  technology_id UUID REFERENCES technologies(id) ON DELETE CASCADE,
  
  -- Challenge content
  problem_statement TEXT NOT NULL,
  requirements TEXT[], -- Array of requirements
  starter_code TEXT,
  solution_template TEXT,
  test_cases JSONB DEFAULT '[]'::JSONB,
  
  -- Validation and hints
  validation_criteria JSONB DEFAULT '{}'::JSONB,
  hint_system JSONB DEFAULT '[]'::JSONB, -- Progressive hints
  
  -- Metadata
  estimated_time_minutes INTEGER,
  points INTEGER DEFAULT 100,
  tags TEXT[],
  prerequisites UUID[], -- Array of prerequisite challenge IDs
  
  -- Status and timing
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES users(id) ON DELETE SET NULL
);

-- User challenge progress
CREATE TABLE IF NOT EXISTS user_challenge_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE,
  
  -- Progress tracking
  status TEXT NOT NULL DEFAULT 'not_started', -- not_started, in_progress, completed, submitted
  current_code TEXT,
  completion_percentage DECIMAL(5,2) DEFAULT 0,
  
  -- Timing data
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  time_spent_minutes INTEGER DEFAULT 0,
  
  -- Submission data
  submission_count INTEGER DEFAULT 0,
  last_submission_at TIMESTAMP WITH TIME ZONE,
  best_score INTEGER DEFAULT 0,
  
  -- AI interaction
  hints_used INTEGER DEFAULT 0,
  ai_interactions JSONB DEFAULT '[]'::JSONB,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, challenge_id)
);

-- User achievements
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  badge_color TEXT,
  points INTEGER DEFAULT 0,
  criteria JSONB NOT NULL, -- Conditions for earning achievement
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User earned achievements
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  progress_data JSONB DEFAULT '{}'::JSONB,
  
  UNIQUE(user_id, achievement_id)
);

-- User analytics and learning path
CREATE TABLE IF NOT EXISTS user_analytics (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  
  -- Daily/Weekly stats
  date DATE NOT NULL,
  challenges_attempted INTEGER DEFAULT 0,
  challenges_completed INTEGER DEFAULT 0,
  time_spent_minutes INTEGER DEFAULT 0,
  hints_used INTEGER DEFAULT 0,
  points_earned INTEGER DEFAULT 0,
  
  -- Technology focus
  technologies_practiced TEXT[],
  primary_technology TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, date)
);

-- Learning paths (curated sequences of challenges)
CREATE TABLE IF NOT EXISTS learning_paths (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  difficulty_level INTEGER DEFAULT 1,
  estimated_duration_hours INTEGER,
  technology_id UUID REFERENCES technologies(id) ON DELETE CASCADE,
  challenge_sequence UUID[], -- Ordered array of challenge IDs
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES users(id) ON DELETE SET NULL
);

-- User learning path progress
CREATE TABLE IF NOT EXISTS user_learning_path_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  learning_path_id UUID REFERENCES learning_paths(id) ON DELETE CASCADE,
  current_challenge_index INTEGER DEFAULT 0,
  completed_challenges UUID[],
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  
  UNIQUE(user_id, learning_path_id)
);

-- Code submissions (for review and analysis)
CREATE TABLE IF NOT EXISTS code_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE,
  
  -- Submission content
  submitted_code TEXT NOT NULL,
  language TEXT NOT NULL,
  
  -- Analysis results
  passes_tests BOOLEAN DEFAULT FALSE,
  test_results JSONB DEFAULT '{}'::JSONB,
  ai_feedback JSONB DEFAULT '{}'::JSONB,
  score INTEGER DEFAULT 0,
  
  -- Metadata
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  analysis_completed_at TIMESTAMP WITH TIME ZONE,
  version INTEGER DEFAULT 1
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_clerk_user_id ON users(clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_challenges_slug ON challenges(slug);
CREATE INDEX IF NOT EXISTS idx_challenges_technology ON challenges(technology_id);
CREATE INDEX IF NOT EXISTS idx_challenges_category ON challenges(category_id);
CREATE INDEX IF NOT EXISTS idx_challenges_difficulty ON challenges(difficulty_level);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_challenge_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_challenge_id ON user_challenge_progress(challenge_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_status ON user_challenge_progress(status);
CREATE INDEX IF NOT EXISTS idx_user_analytics_user_date ON user_analytics(user_id, date);
CREATE INDEX IF NOT EXISTS idx_code_submissions_user_challenge ON code_submissions(user_id, challenge_id);

-- RLS (Row Level Security) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_challenge_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_learning_path_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_submissions ENABLE ROW LEVEL SECURITY;

-- Basic RLS policies (users can only access their own data)
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (clerk_user_id = current_setting('app.current_user_id', true));
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (clerk_user_id = current_setting('app.current_user_id', true));

CREATE POLICY "Users can view own progress" ON user_challenge_progress FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Users can view own achievements" ON user_achievements FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Users can view own analytics" ON user_analytics FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Users can view own learning path progress" ON user_learning_path_progress FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Users can view own submissions" ON code_submissions FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

-- Functions for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers for updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_challenges_updated_at BEFORE UPDATE ON challenges FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_user_challenge_progress_updated_at BEFORE UPDATE ON user_challenge_progress FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();