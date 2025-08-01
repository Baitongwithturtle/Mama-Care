import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const client = new OpenAI({
      apiKey: process.env.HF_TOKEN,
      baseURL: 'https://router.huggingface.co/v1',
    });

    const response = await client.chat.completions.create({
      model: 'meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8:together',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5,
      top_p: 0.7,
    });

    const content = response.choices[0].message?.content ?? '❌ ไม่มีคำตอบ';

    return NextResponse.json({ message: content });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
