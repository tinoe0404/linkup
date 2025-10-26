"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      <SignedOut>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold">Welcome to LinkUp</h1>
          <div className="flex gap-4">
            <SignInButton mode="modal">
              <button className="bg-gray-200 text-gray-900 rounded-full font-medium px-6 py-3">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="bg-blue-600 text-white rounded-full font-medium px-6 py-3">
                Sign Up
              </button>
            </SignUpButton>
          </div>
        </div>
      </SignedOut>
      
      <SignedIn>
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-4xl font-bold">Welcome back!</h1>
          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}