import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    const client = new OpenAI({
      apiKey: process.env.HF_TOKEN,
      baseURL: 'https://router.huggingface.co/v1',
    });

    const response = await client.chat.completions.create({
      model: 'meta-llama/Llama-3.1-8B-Instruct',
      messages: messages,
      temperature: 0.7,
      max_tokens: 1000,
    });

    const content = response.choices[0].message?.content ?? '❌ ไม่มีคำตอบ';

    return NextResponse.json({ message: content });
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
