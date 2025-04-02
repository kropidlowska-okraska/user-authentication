import axios from 'axios';

const EXPO_PUBLIC_API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export async function createUser(email: string, password: string) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${EXPO_PUBLIC_API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true
    }
  );

  return response.data.idToken;
}

export async function authenticate(email: string, password: string) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${EXPO_PUBLIC_API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true
    }
  );

  return response.data.idToken;
}