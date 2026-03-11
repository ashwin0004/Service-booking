"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen font-display antialiased bg-white">
      {/* Left Side: Login Form */}
      <div className="flex w-full flex-col justify-center px-8 py-12 lg:w-[45%] lg:px-24 bg-white">
        <div className="mx-auto w-full max-w-[420px]">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="size-8 text-[#0f172a]">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="5" cy="12" rx="2.5" ry="8" transform="rotate(15 5 12)" />
                <ellipse cx="12" cy="12" rx="2.5" ry="9" />
                <ellipse cx="19" cy="12" rx="2.5" ry="8" transform="rotate(-15 19 12)" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-[#0f172a]">
              Service Booking
            </span>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl font-black text-[#0f172a] tracking-tight">
              Sign In
            </h1>
          </div>

          <form action="#" className="space-y-5" method="POST">
            <div>
              <label
                className="block text-sm font-medium text-[#0f172a]"
                htmlFor="email"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  autoComplete="email"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-[#0f172a] placeholder-gray-400 focus:border-[#0f172a] focus:outline-none focus:ring-1 focus:ring-[#0f172a]"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  className="block text-sm font-medium text-[#0f172a]"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    className="font-medium text-[#0f172a] hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  autoComplete="current-password"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 pr-10 text-sm text-[#0f172a] placeholder-gray-400 focus:border-[#0f172a] focus:outline-none focus:ring-1 focus:ring-[#0f172a]"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-4 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center pt-1">
              <input
                className="h-4 w-4 rounded border-gray-300 text-[#0f172a] focus:ring-[#0f172a]"
                id="remember-me"
                name="remember-me"
                type="checkbox"
              />
              <label
                className="ml-3 block text-sm text-[#0f172a]"
                htmlFor="remember-me"
              >
                Remember me
              </label>
            </div>

            <div className="pt-2">
              <button
                className="flex w-full justify-center rounded-lg bg-[#18181b] px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-black transition-colors"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div aria-hidden="true" className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              <Link
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-600 hover:bg-gray-50 transition-colors"
                href="#"
              >
                <span className="sr-only">Google</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.909 3.292-2.09 4.313-1.277 1.023-3.277 2.091-6.125 2.091-4.731 0-8.64-3.803-8.64-8.598S7.374 3.42 12.105 3.42c2.505 0 4.388.986 5.734 2.276l2.31-2.31C18.196 1.54 15.42 0 12.095 0 5.424 0 0 5.363 0 12s5.424 12 12.095 12c3.54 0 6.225-1.155 8.334-3.345C22.62 18.495 23.3 15.52 23.3 13.11c0-.84-.06-1.485-.18-2.19H12.48z" />
                </svg>
              </Link>
              <Link
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-gray-900 hover:bg-gray-50 transition-colors"
                href="#"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                className="flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-[#1877F2] hover:bg-gray-50 transition-colors"
                href="#"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    clipRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fillRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              className="font-semibold text-[#0f172a] hover:underline"
              href="#"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Aesthetic Dark Panel */}
      <div className="relative hidden w-0 flex-1 lg:block overflow-hidden bg-[#1a202c]">
        {/* Background with Modern Abstract Shapes & Glow */}
        <div className="absolute inset-0 z-0 bg-linear-to-br from-[#1e293b] to-[#0f172a]">
          {/* Hero Image */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3c4yMBG4aIDcSXa6eY4mtHUzraeOuilEAiJ3okRGcVUcvgc6hPs-T_-O86KWM5g2F920wky47pLElhkWao6gZsHyGX4URENPHHni83-4lOHrLTag-4szW_LA64oEwxucPpSoLqqLOoNveOxcQGz_HUSmu6DiNYbsxbFchnGGz--QbTIQbDgaORKeLwHEucGsnOgstVC3JLYgIC4E7QbUH24MrtLnURf01CiWhnCZMffMw0B4AvMJJc8mBeKg3o3M44ox5y667wZk"
              alt="Modern abstract digital network connection lines and nodes"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center p-12 text-center text-white">
          <div className="max-w-2xl w-full px-8">
            <h2 className="text-[3.25rem] font-black tracking-tight leading-[1.1] mb-6">
              Welcome to Service<br />Booking
            </h2>
            <p className="text-[1.1rem] text-gray-300 leading-relaxed mb-12 max-w-xl mx-auto">
              Connect with salons, car washes, clinics, and more -- see real-time
              availability, lock your slot instantly, and never wait in line again.
            </p>

            <div className="w-full h-px bg-white/10 mb-10"></div>

            {/* Stats or Features */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-bold text-white">Real-time</p>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  Live slot availability with<br />soft-lock protection
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">0 wait</p>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  Walk-in queues replaced<br />smart scheduling
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">5 min</p>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  Vendor onboarding-- go<br />live instantly
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="absolute bottom-10 left-12 flex gap-6 text-sm text-gray-400">
            <Link className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}