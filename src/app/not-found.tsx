import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900 p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-6xl font-bold mb-2 animate-bounce">Oops!</h1>
        <div className="relative animate-bounce" >
          <h2 className="text-[180px] font-extrabold leading-tight">404</h2>
          <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Robot/>
          </div>
        </div>
        <h3 className="text-3xl font-bold mt-4 mb-2">Error!</h3>
        <p className="text-xl mb-8">Something went wrong! Please try again later.</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Home className="mr-2 h-5 w-5" />
          Go Home
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    </div>
  )
}

function Robot() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      className="transform -translate-y-4"
    >
      <rect x="60" y="60" width="80" height="100" rx="10" fill="#3B82F6" />
      <circle cx="80" cy="90" r="10" fill="white" />
      <circle cx="120" cy="90" r="10" fill="white" />
      <rect x="70" y="120" width="60" height="10" rx="5" fill="white" />
      <rect x="50" y="50" width="100" height="20" rx="10" fill="#3B82F6" />
      <rect x="40" y="160" width="30" height="40" rx="5" fill="#3B82F6" />
      <rect x="130" y="160" width="30" height="40" rx="5" fill="#3B82F6" />
      <circle cx="55" cy="180" r="8" fill="#2563EB" />
      <circle cx="145" cy="180" r="8" fill="#2563EB" />
      <path d="M90 40 L110 40 L100 20 Z" fill="#3B82F6" />
    </svg>
  )
}