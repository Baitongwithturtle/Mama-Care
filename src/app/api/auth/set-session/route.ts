// /app/api/auth/set-session/route.ts
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { uid } = await req.json();
  if (!uid) return NextResponse.json({ success: false }, { status: 400 });

  const res = NextResponse.json({ success: true });
  res.cookies.set('uID', uid, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24,
  });
  return res;
}
