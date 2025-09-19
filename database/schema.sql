-- Percept Platform Database Schema
-- This schema supports the anti-tutorial hell platform with challenge-based learning
-- Updated with comprehensive features: badges, community, leaderboards, onboarding

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
  avatar_emoji TEXT DEFAULT '👨‍💻',
  bio TEXT,
  location TEXT,
  specialization TEXT,
  is_public BOOLEAN DEFAULT TRUE,
  
  -- XP and Level System
  total_xp INTEGER DEFAULT 0,
  current_level INTEGER DEFAULT 1,
  xp_to_next_level INTEGER DEFAULT 1000,
  
  -- Streaks and Activity
  current_streak INTEGER DEFAULT 0,
  longest_streak INTEGER DEFAULT 0,
  last_activity_date DATE,
  
  -- Social Links
  github_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  portfolio_url TEXT,
  
  -- Onboarding Data
  experience_level TEXT, -- 'complete-beginner', 'some-experience', 'intermediate', 'advanced'
  learning_goals TEXT[], -- Array of goals
  time_commitment TEXT, -- '30-min', '1-hour', '2-hours', 'weekends', 'flexible'
  preferred_technologies TEXT[], -- Array of technology preferences
  career_goal TEXT,
  onboarding_completed BOOLEAN DEFAULT FALSE,
  onboarding_completed_at TIMESTAMP WITH TIME ZONE,
  
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
  icon_emoji TEXT,
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
  icon_emoji TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Challenges table (enhanced)
CREATE TABLE IF NOT EXISTS challenges (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  difficulty_level INTEGER NOT NULL DEFAULT 1, -- 1 = Beginner, 2 = Intermediate, 3 = Advanced, 4 = Expert
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
  technologies_used TEXT[], -- Array of technology names
  
  -- AI and Community
  ai_generated BOOLEAN DEFAULT FALSE,
  community_rating DECIMAL(3,2) DEFAULT 0,
  total_ratings INTEGER DEFAULT 0,
  
  -- Status and timing
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES users(id) ON DELETE SET NULL
);

-- User challenge progress (enhanced)
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
  
  -- Performance metrics
  completion_time_minutes INTEGER,
  used_hints BOOLEAN DEFAULT FALSE,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, challenge_id)
);

-- Enhanced achievements system
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  description TEXT NOT NULL,
  icon TEXT,
  icon_emoji TEXT,
  badge_color TEXT,
  rarity TEXT DEFAULT 'Common', -- Common, Uncommon, Rare, Epic, Legendary
  points INTEGER DEFAULT 0,
  criteria JSONB NOT NULL, -- Conditions for earning achievement
  is_active BOOLEAN DEFAULT TRUE,
  category TEXT, -- 'progress', 'skill', 'community', 'special'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User earned achievements (enhanced)
CREATE TABLE IF NOT EXISTS user_achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  achievement_id UUID REFERENCES achievements(id) ON DELETE CASCADE,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  progress_data JSONB DEFAULT '{}'::JSONB,
  current_progress INTEGER DEFAULT 0,
  total_required INTEGER DEFAULT 1,
  
  UNIQUE(user_id, achievement_id)
);

-- Community questions (Stack Overflow style)
CREATE TABLE IF NOT EXISTS community_questions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES users(id) ON DELETE CASCADE,
  tags TEXT[],
  votes INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  answer_count INTEGER DEFAULT 0,
  has_accepted_answer BOOLEAN DEFAULT FALSE,
  ai_suggested BOOLEAN DEFAULT FALSE,
  ai_response JSONB DEFAULT '{}'::JSONB,
  is_closed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community answers
CREATE TABLE IF NOT EXISTS community_answers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question_id UUID REFERENCES community_questions(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  author_id UUID REFERENCES users(id) ON DELETE CASCADE,
  votes INTEGER DEFAULT 0,
  is_accepted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Community votes
CREATE TABLE IF NOT EXISTS community_votes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  target_type TEXT NOT NULL, -- 'question' or 'answer'
  target_id UUID NOT NULL,
  vote_type TEXT NOT NULL, -- 'up' or 'down'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, target_type, target_id)
);

-- User reputation system
CREATE TABLE IF NOT EXISTS user_reputation (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  total_reputation INTEGER DEFAULT 0,
  reputation_sources JSONB DEFAULT '{}'::JSONB,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Learning paths (enhanced)
CREATE TABLE IF NOT EXISTS learning_paths (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  difficulty_level INTEGER DEFAULT 1,
  estimated_duration_hours INTEGER,
  technology_id UUID REFERENCES technologies(id) ON DELETE CASCADE,
  challenge_sequence UUID[], -- Ordered array of challenge IDs
  is_published BOOLEAN DEFAULT FALSE,
  enrollment_count INTEGER DEFAULT 0,
  completion_count INTEGER DEFAULT 0,
  rating DECIMAL(3,2) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID REFERENCES users(id) ON DELETE SET NULL
);

-- User learning path progress (enhanced)
CREATE TABLE IF NOT EXISTS user_learning_path_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  learning_path_id UUID REFERENCES learning_paths(id) ON DELETE CASCADE,
  current_challenge_index INTEGER DEFAULT 0,
  completed_challenges UUID[],
  progress_percentage DECIMAL(5,2) DEFAULT 0,
  started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  completed_at TIMESTAMP WITH TIME ZONE,
  
  UNIQUE(user_id, learning_path_id)
);

-- User analytics (enhanced)
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
  
  -- Community activity
  questions_asked INTEGER DEFAULT 0,
  answers_provided INTEGER DEFAULT 0,
  votes_given INTEGER DEFAULT 0,
  reputation_earned INTEGER DEFAULT 0,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  UNIQUE(user_id, date)
);

-- Code submissions (enhanced for review and analysis)
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
  performance_metrics JSONB DEFAULT '{}'::JSONB,
  
  -- Metadata
  submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  analysis_completed_at TIMESTAMP WITH TIME ZONE,
  version INTEGER DEFAULT 1
);

-- Certificates system
CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  certificate_type TEXT NOT NULL, -- 'learning_path', 'specialization', 'achievement'
  title TEXT NOT NULL,
  description TEXT,
  reference_id UUID, -- ID of learning path, specialization, or achievement
  issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  verification_code TEXT UNIQUE,
  is_public BOOLEAN DEFAULT TRUE,
  metadata JSONB DEFAULT '{}'::JSONB
);

-- Enhanced indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_clerk_user_id ON users(clerk_user_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_is_public ON users(is_public);
CREATE INDEX IF NOT EXISTS idx_users_total_xp ON users(total_xp DESC);
CREATE INDEX IF NOT EXISTS idx_users_current_level ON users(current_level DESC);

CREATE INDEX IF NOT EXISTS idx_challenges_slug ON challenges(slug);
CREATE INDEX IF NOT EXISTS idx_challenges_technology ON challenges(technology_id);
CREATE INDEX IF NOT EXISTS idx_challenges_category ON challenges(category_id);
CREATE INDEX IF NOT EXISTS idx_challenges_difficulty ON challenges(difficulty_level);
CREATE INDEX IF NOT EXISTS idx_challenges_published ON challenges(is_published);

CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON user_challenge_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_challenge_id ON user_challenge_progress(challenge_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_status ON user_challenge_progress(status);
CREATE INDEX IF NOT EXISTS idx_user_progress_completed ON user_challenge_progress(completed_at);

CREATE INDEX IF NOT EXISTS idx_user_analytics_user_date ON user_analytics(user_id, date);
CREATE INDEX IF NOT EXISTS idx_code_submissions_user_challenge ON code_submissions(user_id, challenge_id);

CREATE INDEX IF NOT EXISTS idx_community_questions_author ON community_questions(author_id);
CREATE INDEX IF NOT EXISTS idx_community_questions_created ON community_questions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_community_questions_votes ON community_questions(votes DESC);

CREATE INDEX IF NOT EXISTS idx_community_answers_question ON community_answers(question_id);
CREATE INDEX IF NOT EXISTS idx_community_answers_author ON community_answers(author_id);

CREATE INDEX IF NOT EXISTS idx_user_achievements_user ON user_achievements(user_id);
CREATE INDEX IF NOT EXISTS idx_user_achievements_earned ON user_achievements(earned_at);

-- RLS (Row Level Security) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_challenge_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_learning_path_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE code_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Basic RLS policies (users can only access their own data)
CREATE POLICY "Users can view own profile" ON users FOR SELECT USING (clerk_user_id = current_setting('app.current_user_id', true));
CREATE POLICY "Users can update own profile" ON users FOR UPDATE USING (clerk_user_id = current_setting('app.current_user_id', true));
CREATE POLICY "Public profiles are viewable" ON users FOR SELECT USING (is_public = true);

CREATE POLICY "Users can view own progress" ON user_challenge_progress FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Users can view own achievements" ON user_achievements FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Users can view own analytics" ON user_analytics FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Users can view own learning path progress" ON user_learning_path_progress FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Users can view own submissions" ON code_submissions FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Community questions are public" ON community_questions FOR SELECT USING (true);
CREATE POLICY "Users can create questions" ON community_questions FOR INSERT WITH CHECK (author_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));
CREATE POLICY "Users can update own questions" ON community_questions FOR UPDATE USING (author_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Community answers are public" ON community_answers FOR SELECT USING (true);
CREATE POLICY "Users can create answers" ON community_answers FOR INSERT WITH CHECK (author_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));
CREATE POLICY "Users can update own answers" ON community_answers FOR UPDATE USING (author_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Users can vote" ON community_votes FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

CREATE POLICY "Public certificates are viewable" ON certificates FOR SELECT USING (is_public = true);
CREATE POLICY "Users can view own certificates" ON certificates FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_user_id = current_setting('app.current_user_id', true)));

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
CREATE TRIGGER update_community_questions_updated_at BEFORE UPDATE ON community_questions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_community_answers_updated_at BEFORE UPDATE ON community_answers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Functions for automatic calculations
CREATE OR REPLACE FUNCTION update_user_xp_and_level()
RETURNS TRIGGER AS $$
BEGIN
    -- Update total XP and level when user completes challenges
    IF NEW.status = 'completed' AND (OLD.status IS NULL OR OLD.status != 'completed') THEN
        UPDATE users SET 
            total_xp = total_xp + (SELECT points FROM challenges WHERE id = NEW.challenge_id),
            current_level = FLOOR((total_xp + (SELECT points FROM challenges WHERE id = NEW.challenge_id)) / 1000) + 1
        WHERE id = NEW.user_id;
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_xp_on_completion 
    AFTER UPDATE ON user_challenge_progress 
    FOR EACH ROW EXECUTE FUNCTION update_user_xp_and_level();