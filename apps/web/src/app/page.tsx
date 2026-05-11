'use client';

import { useState } from 'react';
import { login } from '@/features/auth/login';
import { useRouter } from 'next/navigation';
import { Input } from '@/shared/ui/input';

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: '', 
    password:''
  });
  const [errors, setErrors] = useState({
    email: '', 
    password:''
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const {name, value} = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }))
  };

  const validate = () => {
    const newErrors = {
      email: '',
      password: '',
    };
    if(!form.email){
      newErrors.email = 'Please enter your Email'
    }
    if(!form.password){
      newErrors.password = 'Please enter your Password'
    }
    setErrors(newErrors);

    return !newErrors.email && !newErrors.password;
  };

  const handleLogin = async () => {
    const isValid = validate();
    if(!isValid){
      return
    }
    try{
      setIsLoading(true);
      const res = await login(form);
      console.log(res);
      router.push('/dashboard');
    } catch(e){
      console.log(e);
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <div className="p-10 flex flex-col gap-4 max-w-sm">
      <Input
        placeholder="Email"
        onChange={handleChange}
        className="border p-2"
        name='email'
        value={form.email}
      />
      {errors.email && (
        <p className="text-sm text-red-500">
          {errors.email}
        </p>
      )}

      <Input
        placeholder="Password"
        type="password"
        value={form.password}
        name='password'
        onChange={handleChange}
        className="border p-2"
      />

      {errors.password && (
        <p className="text-sm text-red-500">
          {errors.password}
        </p>
      )}

      <button
        onClick={handleLogin}
        disabled={isLoading}
        className="bg-black text-white p-2"
      >
        Login
      </button>
    </div>
  );
}