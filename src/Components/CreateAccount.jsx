import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function CreateAccount() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSignup = async () => {
    try {
      const res = await API.post("/auth/register", form);

      localStorage.setItem("token", res.data);

      console.log(res.data);

      alert("Signup Success 🎉");

      navigate("/dashboard");

    } catch (err) {
      alert(err.response?.data || "Error");
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 relative overflow-hidden mt-20">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50/60 via-transparent to-transparent -z-10"></div>

      {/* CARD WRAPPER */}
      <div className="w-full max-w-md">

        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-pink-600 rounded-full animate-pulse"></div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">
              FitViSion
              <span className="italic font-light text-orange-500">AI</span>
            </h1>
          </div>
          <span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mt-1">
            Intelligence in Fashion
          </span>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 
        shadow-[0_20px_50px_rgba(0,0,0,0.05)] 
        transition-all duration-300 
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] 
        hover:-translate-y-1">

          {/* LOGO */}
          <div className="text-center mb-6">

            {/* HEADING */}
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Get Started Free 🚀
            </h2>

            <p className="text-slate-500 text-sm mt-2">
              🎁 100 Free AI Credits — No card required
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Full Name (optional)
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Minimum 8 characters"
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>

            {/* BUTTON */}
            <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-sm hover:brightness-110 transition-all active:scale-[0.98] shadow-xl shadow-orange-200 mt-2 group">
              Create Account
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100"></span>
              </div>
              <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold">
                <span className="bg-white px-4 text-slate-400">Or sign up with email</span>
              </div>
            </div>

            {/* GOOGLE LOGIN */}
            <button className="w-full bg-white border border-slate-200 text-slate-700 py-3.5 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-3 mb-5">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5 h-5"
                alt="Google"
              />
              Continue with Google
            </button>

          </form>
        </div>

        {/* FOOTER */}
        <p className="text-center text-slate-500 text-sm mt-8">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-orange-600 font-bold cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}