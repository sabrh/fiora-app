import Link from 'next/link'
import React from 'react'

export default function AuthLayout({ children }) {
  return (
    <div>
        <div className="navbar shadow-sm md:px-16">
            <div className="navbar-start">
                <Link href='/' className="flex items-center font-extrabold text-2xl gap-x-1">fiora</Link>
            </div>
        </div>
        {children}
    </div>
  )
}
