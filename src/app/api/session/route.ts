// /app/api/session/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { app } from '@/app/firebase/server';

const auth = getAuth(app);
const EXPIRES_IN_MS = 7 * 24 * 60 * 60 * 1000;
const isProd = process.env.NODE_ENV === 'production';

export async function POST(req: NextRequest) {
  try {
    const { idToken } = await req.json();
    if (!idToken)
      return NextResponse.json({ error: 'Missing idToken' }, { status: 400 });

    const sessionCookie = await auth.createSessionCookie(idToken, {
      expiresIn: EXPIRES_IN_MS,
    });

    const res = NextResponse.json({ ok: true });
    res.cookies.set('session', sessionCookie, {
      httpOnly: true,
      secure: isProd, // ✅ dev=false, prod=true
      sameSite: 'lax',
      maxAge: EXPIRES_IN_MS / 1000,
      path: '/',
    });
    return res;
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'failed';
    return NextResponse.json({ error: msg }, { status: 401 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set('session', '', {
    httpOnly: true,
    secure: isProd, // ✅ ให้สอดคล้องกัน
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  });
  return res;
}
