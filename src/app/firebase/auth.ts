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

  //window.location.href = "/content";
}

export async function signOutAll() {
  const auth = getAuth(app);
  await auth.signOut();
  await fetch('/api/session', { method: 'DELETE', credentials: 'include' }); // เคลียร์คุกกี้
  localStorage.removeItem('uID');
  window.location.href = '/login';
}
