import React from 'react'
import RegisterForm from './components/RegisterForm'

export default function Register() {
  return (
    <div className="card w-full my-10">
      <h2 className='text-2xl font-bold justify-center text-center'>Create an Account</h2>
      <RegisterForm />
    </div>
  )
}
