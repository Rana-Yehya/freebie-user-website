import { cookies } from 'next/headers';

export default async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  // Check for authentication and specific permissions if needed
  if (token != null) {
    return true
  } else {
    return false
  }
}
