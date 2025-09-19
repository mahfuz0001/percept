import { supabase } from './supabase';

export interface UserProfile {
  id: string;
  clerk_user_id: string;
  email: string;
  username?: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
  last_seen_at: string;
  is_active: boolean;
  preferences: Record<string, unknown>;
}

export interface Challenge {
  id: string;
  title: string;
  slug: string;
  description: string;
  difficulty_level: number;
  category_id: string;
  technology_id: string;
  problem_statement: string;
  requirements: string[];
  starter_code?: string;
  solution_template?: string;
  test_cases: unknown[];
  validation_criteria: Record<string, unknown>;
  hint_system: unknown[];
  estimated_time_minutes?: number;
  points: number;
  tags: string[];
  prerequisites: string[];
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  challenge_id: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'submitted';
  current_code?: string;
  completion_percentage: number;
  started_at?: string;
  completed_at?: string;
  time_spent_minutes: number;
  submission_count: number;
  last_submission_at?: string;
  best_score: number;
  hints_used: number;
  ai_interactions: unknown[];
  created_at: string;
  updated_at: string;
}

export class PerceptAPI {
  /**
   * Create or update user profile from Clerk data
   */
  static async createOrUpdateUser(clerkUser: {
    id: string;
    emailAddresses: { emailAddress: string }[];
    username?: string;
    fullName?: string;
    imageUrl?: string;
  }): Promise<UserProfile | null> {
    try {
      const userData = {
        clerk_user_id: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        username: clerkUser.username,
        full_name: clerkUser.fullName,
        avatar_url: clerkUser.imageUrl,
        last_seen_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('users')
        .upsert(userData, {
          onConflict: 'clerk_user_id',
          ignoreDuplicates: false,
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating/updating user:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in createOrUpdateUser:', error);
      return null;
    }
  }

  /**
   * Get user profile by Clerk ID
   */
  static async getUserByClerkId(clerkUserId: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('clerk_user_id', clerkUserId)
        .single();

      if (error) {
        console.error('Error fetching user:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in getUserByClerkId:', error);
      return null;
    }
  }

  /**
   * Get all technologies
   */
  static async getTechnologies() {
    try {
      const { data, error } = await supabase
        .from('technologies')
        .select('*')
        .eq('is_active', true)
        .order('difficulty_level', { ascending: true });

      if (error) {
        console.error('Error fetching technologies:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in getTechnologies:', error);
      return [];
    }
  }

  /**
   * Get challenges by technology
   */
  static async getChallengesByTechnology(technologyId: string, difficulty?: number) {
    try {
      let query = supabase
        .from('challenges')
        .select(`
          *,
          technologies(name, slug),
          challenge_categories(name, slug)
        `)
        .eq('technology_id', technologyId)
        .eq('is_published', true);

      if (difficulty) {
        query = query.eq('difficulty_level', difficulty);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching challenges:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in getChallengesByTechnology:', error);
      return [];
    }
  }

  /**
   * Get user progress for challenges
   */
  static async getUserProgress(userId: string, challengeId?: string) {
    try {
      let query = supabase
        .from('user_challenge_progress')
        .select(`
          *,
          challenges(title, slug, difficulty_level, points)
        `)
        .eq('user_id', userId);

      if (challengeId) {
        query = query.eq('challenge_id', challengeId);
      }

      const { data, error } = await query.order('updated_at', { ascending: false });

      if (error) {
        console.error('Error fetching user progress:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in getUserProgress:', error);
      return [];
    }
  }

  /**
   * Update user progress for a challenge
   */
  static async updateChallengeProgress(
    userId: string,
    challengeId: string,
    updates: Partial<UserProgress>
  ) {
    try {
      const { data, error } = await supabase
        .from('user_challenge_progress')
        .upsert({
          user_id: userId,
          challenge_id: challengeId,
          ...updates,
          updated_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,challenge_id',
          ignoreDuplicates: false,
        })
        .select()
        .single();

      if (error) {
        console.error('Error updating challenge progress:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in updateChallengeProgress:', error);
      return null;
    }
  }

  /**
   * Submit code for a challenge
   */
  static async submitCode(
    userId: string,
    challengeId: string,
    code: string,
    language: string
  ) {
    try {
      const { data, error } = await supabase
        .from('code_submissions')
        .insert({
          user_id: userId,
          challenge_id: challengeId,
          submitted_code: code,
          language: language,
          submitted_at: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        console.error('Error submitting code:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error in submitCode:', error);
      return null;
    }
  }

  /**
   * Get user analytics and stats
   */
  static async getUserStats(userId: string) {
    try {
      // Get basic progress stats
      const { data: progressData, error: progressError } = await supabase
        .from('user_challenge_progress')
        .select('status, best_score, time_spent_minutes, challenge_id')
        .eq('user_id', userId);

      if (progressError) {
        console.error('Error fetching progress stats:', progressError);
        return null;
      }

      // Calculate stats
      const totalChallenges = progressData?.length || 0;
      const completedChallenges = progressData?.filter(p => p.status === 'completed').length || 0;
      const totalPoints = progressData?.reduce((sum, p) => sum + (p.best_score || 0), 0) || 0;
      const totalTimeMinutes = progressData?.reduce((sum, p) => sum + (p.time_spent_minutes || 0), 0) || 0;

      // Get recent activity for streak calculation
      const { data: analyticsData } = await supabase
        .from('user_analytics')
        .select('date, challenges_completed')
        .eq('user_id', userId)
        .gte('date', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0])
        .order('date', { ascending: false });

      let currentStreak = 0;
      if (analyticsData && analyticsData.length > 0) {
        // Calculate streak from recent days
        const today = new Date().toISOString().split('T')[0];
        const checkDate = new Date();
        
        for (let i = 0; i < 30; i++) {
          const dateStr = checkDate.toISOString().split('T')[0];
          const dayData = analyticsData.find(d => d.date === dateStr);
          
          if (dayData && dayData.challenges_completed > 0) {
            currentStreak++;
          } else if (dateStr !== today) {
            // If no activity and not today, break streak
            break;
          }
          
          checkDate.setDate(checkDate.getDate() - 1);
        }
      }

      return {
        totalChallenges,
        completedChallenges,
        totalPoints,
        totalTimeMinutes,
        currentStreak,
        completionRate: totalChallenges > 0 ? (completedChallenges / totalChallenges) * 100 : 0,
      };
    } catch (error) {
      console.error('Error in getUserStats:', error);
      return null;
    }
  }
}