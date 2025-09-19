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
    const { challenge, userCode, hintsUsed = 0 } = body;

    if (!challenge || !userCode) {
      return NextResponse.json(
        { error: 'Missing required fields: challenge and userCode' },
        { status: 400 }
      );
    }

    const hintService = new GeminiHintService();
    const hint = await hintService.generateHint(challenge, userCode, hintsUsed);

    // In production, you would also save this hint request to the database
    // to track usage and improve the service

    return NextResponse.json({
      hint,
      hintsUsed: hintsUsed + 1,
      success: true
    });

  } catch (error) {
    console.error('Hint generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate hint' },
      { status: 500 }
    );
  }
}