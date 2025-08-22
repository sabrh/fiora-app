"use client";
import React from 'react'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc';
import { FaEye } from 'react-icons/fa';
import { registerUser } from '@/app/actions/auth/registerUser';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    await registerUser({name, email, password});
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center px-4">
    <fieldset className="w-full max-w-md border p-6 rounded-lg shadow-md">
      <label className="label mt-2">Name</label>
      <input
        type="text"
        name="name"
        required
        className="input w-full"
        placeholder="Name"
      />

      <label className="label mt-4">Email</label>
      <input
        type="email"
        name="email"
        required
        className="input w-full"
        placeholder="Email"
      />

      <label className="label mt-4">Password</label>
      <div className="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          className="input w-full"
          placeholder="Password"
        />
        <span onClick={() => setShowPassword(!showPassword)}
          className='absolute left-55 md:left-70 top-3 text-xl cursor-pointer '><FaEye />
        </span>
      </div>

      <button className="btn btn-neutral rounded-full mt-6 w-full">Register</button>
    </fieldset>

    <p className="mt-4 text-center">Already have an account?{" "}<Link href="/login" className="text-blue-700">
        Login</Link>{" "}here.
    </p>


    <button className="btn btn-soft rounded-full w-full max-w-md mt-4 text-lg flex items-center justify-center gap-2">
      Signin with <FcGoogle />
    </button>
  </form>

  )
}
