import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Mock user stats - in production, this would fetch from your database
    const userStats = {
      userId,
      challengesCompleted: 12,
      totalPoints: 1420,
      currentStreak: 7,
      skillsMastered: 5,
      totalHours: 42,
      successRate: 85,
      hintsUsed: 23,
      lastActive: new Date().toISOString(),
      achievements: [
        { id: 1, name: 'JavaScript Ninja', earned: true, date: '2024-12-20' },
        { id: 2, name: 'Streak Master', earned: true, date: '2024-12-18' },
        { id: 3, name: 'First Steps', earned: true, date: '2024-12-15' }
      ]
    };

    return NextResponse.json(userStats);
  } catch (error) {
    console.error('User stats error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}