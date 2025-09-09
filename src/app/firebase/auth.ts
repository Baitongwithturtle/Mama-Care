import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './client';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const idToken = await user.getIdToken(true);

  // สร้าง session cookie
  const sessionResp = await fetch('/api/session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ idToken }),
    credentials: 'include',
  });
  if (!sessionResp.ok) throw new Error('Session creation failed');

  localStorage.setItem('uID', user.uid);

  // เช็คว่ามี user ใน DB หรือยัง
  const checkResp = await fetch(`/api/users/${user.uid}`, {
    credentials: 'include',
  });
  if (checkResp.status === 404) {
    // ไม่มี → สร้างใหม่
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email: user.email, name: user.displayName }),
    });
  }

  window.location.href = '/content';
}

export async function signInWithName(name: string) {
  const trimmed = name.trim();
  if (!trimmed) {
    alert('กรุณากรอกชื่อ');
    throw new Error('กรุณากรอกชื่อ');
  }

  const checkResp = await fetch(
    `/api/users?name=${encodeURIComponent(trimmed)}`,
    {
      credentials: 'include',
    }
  );

  if (checkResp.ok) {
    const data = await checkResp.json();

    const sess = await fetch('/api/auth/set-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ uid: data.uid }),
    });
    if (!sess.ok) throw new Error('ตั้ง session ไม่สำเร็จ');

    localStorage.setItem('uID', data.uid);
    window.location.assign('/content');
    return;
  }

  if (checkResp.status === 404) {
    const createResp = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ name: trimmed }),
    });
    const data = await createResp.json();
    if (!createResp.ok || !data.success) {
      throw new Error(data?.message ?? 'สร้าง user ล้มเหลว');
    }

    localStorage.setItem('uID', data.uid);
    window.location.assign('/content');
    return;
  }

  throw new Error('เชื่อมต่อระบบไม่ได้');
}

export async function signOutAll() {
  await fetch('/api/auth/logout', {
    method: 'POST',
    credentials: 'include', // ต้อง include cookie ด้วย
  });

  localStorage.removeItem('uID');
  window.location.href = '/login';
}
