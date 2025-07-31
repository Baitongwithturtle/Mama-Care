import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from './client';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Store token in sessionStorage (valid only for the session)
const saveToken = (token: string) =>
  sessionStorage.setItem('accessToken', token);

// Generate a session fingerprint to track the session
const generateSessionKey = (): string =>
  btoa(`${navigator.userAgent}-${Math.random()}`);

export const validateSession = () => {
  const storedSession = sessionStorage.getItem('sessionKey');
  if (
    !storedSession ||
    storedSession !== sessionStorage.getItem('sessionKey')
  ) {
    alert('Invalid session. Please sign in again.');
    auth.signOut();
    sessionStorage.clear();
    window.location.href = '/login';
  }
};

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken ?? null;
    const user = result.user;

    if (token) saveToken(token);
    localStorage.setItem('uID', user.uid);

    if (user) {
      const sessionKey = generateSessionKey();
      sessionStorage.setItem('sessionKey', sessionKey);
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uID: user.uid,
        email: user.email,
        name: user.displayName,
      }),
    });

    const data = await res.json();

    if (res.status === 409) {
      console.warn('User already exists:', data.message);
      return { user, token, exists: true };
    }

    if (!res.ok) {
      console.error('Error creating user:', data.message);
      return null;
    }

    console.log('User signed in and created:', user);
    return { user, token, exists: false };
  } catch (error: unknown) {
    if (error instanceof Error && 'code' in error) {
      const firebaseError = error as { code: string; message: string };
      console.error('Error Code:', firebaseError.code);
      console.error('Error Message:', firebaseError.message);
    } else {
      console.error('Unexpected error:', error);
    }
  } finally {
    window.location.href = '/content';
  }
};
