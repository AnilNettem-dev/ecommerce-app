'use client';

import { useState } from 'react';
import { login } from '@/features/auth/login';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const res = await login({ email, password });
    console.log(res);
    router.push('/dashboard');
  };

  return (
    <div className="p-10 flex flex-col gap-4 max-w-sm">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />

      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2"
      />

      <button
        onClick={handleLogin}
        className="bg-black text-white p-2"
      >
        Login
      </button>
    </div>
  );
}