
"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login success", response.data);
      toast.success('Successfully logged in');
      router.push("/profile");
    } catch (error: unknown) {
      // console.log("login failed", error.message);
      // toast.error(error.message)
      if (error instanceof Error) {
        console.log("login failed", error.message);
        toast.error(error.message);
      } else {
        console.log("An unexpected error occurred.");
        toast.error("An unexpected error occurred.");
      }

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
                  {loading ? "Processing..." : "Welcome Back"}
                </h1>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-gray-600 block">
                      Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      placeholder="Enter your email"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="text-sm font-medium text-gray-600 block">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      placeholder="Enter your password"
                      className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                        focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="pt-6 space-y-4">
                  <button
                    onClick={onLogin}
                    disabled={buttonDisabled}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                      ${buttonDisabled ? 
                        'bg-blue-300 cursor-not-allowed' : 
                        'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'}`}
                  >
                    {loading ? 'Please wait...' : 'Sign In'}
                  </button>
                  <div className="text-sm text-center">
                  <span className="text-gray-500">Don&apos;t have an account?</span>
                    <Link href="/signup" className="ml-1 font-medium text-blue-600 hover:text-blue-500">
                      Sign up now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}