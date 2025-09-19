import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { GeminiHintService } from '../../../../lib/gemini-service';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { code, challenge } = body;

    if (!code || !challenge) {
      return NextResponse.json(
        { error: 'Missing required fields: code and challenge' },
        { status: 400 }
      );
    }

    const hintService = new GeminiHintService();
    const analysis = await hintService.analyzeCode(code, challenge);

    // In production, you would save this analysis to the database
    // for tracking user progress and improving the system

    return NextResponse.json({
      analysis,
      success: true
    });

  } catch (error) {
    console.error('Code analysis error:', error);
    return NextResponse.json(
      { error: 'Failed to analyze code' },
      { status: 500 }
    );
  }
}