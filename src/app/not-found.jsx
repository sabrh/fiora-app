"use client";
import Lottie from 'lottie-react';
import errorAnimation from '../../public/animations/404.json'
import { useRouter } from "next/navigation"

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      
      <Lottie animationData={errorAnimation} className="w-96" />

      <h1 className="text-4xl font-bold uppercase mt-6">Page Not Found</h1>
      <p className="text-gray-600 mt-2">Sorry, we couldn’t find the page you’re looking for.</p>

      <button onClick={() => router.push("/")}
        className="btn btn-neutral mt-6 uppercase">
        Go Back Home
      </button>
    </div>
  )
}
