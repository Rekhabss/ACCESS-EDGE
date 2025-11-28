import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-400 p-6">
      <div className="bg-white/20 backdrop-blur-xl border border-white/30 p-10 rounded-2xl shadow-2xl w-full max-w-md">

        <h1 className="text-4xl font-extrabold text-white text-center mb-6 drop-shadow-lg">
          Access Ease
        </h1>

        <h2 className="text-xl text-white/90 text-center mb-8">
          Log in to continue
        </h2>

        <form className="space-y-6">

          <div>
            <label className="text-white font-semibold">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/40 backdrop-blur-md text-black placeholder-gray-700 focus:ring-2 focus:ring-white outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-white font-semibold">Password</label>
            <input
              type="password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/40 backdrop-blur-md text-black placeholder-gray-700 focus:ring-2 focus:ring-white outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-blue-600 font-bold py-3 rounded-xl shadow-lg hover:bg-gray-100 transition"
          >
            Login
          </button>
        </form>

        <p className="text-white/90 text-center text-sm mt-6">
          Don’t have an account? <span className="font-semibold underline cursor-pointer">Register</span>
        </p>
      </div>
    </div>
  );
}
