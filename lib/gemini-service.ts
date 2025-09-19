import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || '');

export class GeminiHintService {
  private model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  async generateHint(
    challenge: {
      title: string;
      description: string;
      requirements: string[];
      problemStatement: string;
    },
    userCode: string,
    hintsUsed: number
  ): Promise<string> {
    try {
      const prompt = `
You are an AI coding mentor for the Percept platform. Your job is to provide progressive hints that guide learners without giving away the solution.

Challenge: ${challenge.title}
Description: ${challenge.description}
Problem Statement: ${challenge.problemStatement}
Requirements: ${challenge.requirements.join(', ')}

User's Current Code:
${userCode}

Hints already given: ${hintsUsed}

Provide a helpful hint that:
1. Identifies what the user might be missing or struggling with
2. Gives guidance without showing the exact solution
3. Encourages independent problem-solving
4. Is appropriate for the hint level (hint ${hintsUsed + 1})

Make the hint encouraging and educational. Keep it under 100 words.
`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating hint:', error);
      
      // Fallback hints based on hint number
      const fallbackHints = [
        "Start by breaking down the problem into smaller parts. What's the first feature you need to implement?",
        "Check your HTML structure. Do you have all the necessary elements for user interaction?",
        "Focus on the JavaScript functionality. How will you store and manage the data?",
        "Consider edge cases and user experience. How should your app behave when there's no data?"
      ];
      
      return fallbackHints[hintsUsed] || "Keep working on your solution! You're making progress.";
    }
  }

  async analyzeCode(
    code: string,
    challenge: {
      requirements: string[];
      testCases: Array<{ description: string; expected: string }>;
    }
  ): Promise<{
    issues: string[];
    suggestions: string[];
    score: number;
  }> {
    try {
      const prompt = `
Analyze this code submission for a coding challenge:

Code:
${code}

Challenge Requirements:
${challenge.requirements.join('\n')}

Test Cases:
${challenge.testCases.map(tc => `- ${tc.description}: ${tc.expected}`).join('\n')}

Provide a JSON response with:
1. "issues": Array of specific issues found in the code
2. "suggestions": Array of improvement suggestions
3. "score": Numerical score from 0-100 based on completeness and quality

Be constructive and educational in your feedback.
`;

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      // Try to parse JSON response
      try {
        return JSON.parse(text);
      } catch {
        // Fallback if JSON parsing fails
        return {
          issues: ["Code analysis could not be completed"],
          suggestions: ["Try running your code and test the functionality manually"],
          score: 50
        };
      }
    } catch (error) {
      console.error('Error analyzing code:', error);
      return {
        issues: ["Code analysis temporarily unavailable"],
        suggestions: ["Please test your implementation manually"],
        score: 50
      };
    }
  }
}