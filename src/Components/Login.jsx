import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleLogin = async () => {
        try {
            const res = await API.post("/auth/login", form);

            localStorage.setItem("token", res.data);

            alert("Login Success 🔥");

            navigate("/dashboard");

        } catch (err) {
            alert(err.response?.data || "Error");
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);

            const user = result.user;

            console.log(user);

            // 🔥 send to backend
            const res = await API.post("/auth/google", {
                name: user.displayName,
                email: user.email,
            });

            // 🔐 save token
            localStorage.setItem("token", res.data.token);

            navigate("/dashboard");

        } catch (error) {
            console.log(error);
            alert("Google login failed");
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 relative overflow-hidden mt-12">
            {/* Background Decor - Pricing page se match karta hua */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50/60 via-transparent to-transparent -z-10"></div>

            {/* Login Card */}
            <div className="w-full max-w-md">
                <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden p-8 md:p-12">

                    {/* Logo/Brand Section */}
                    <div className="text-center mb-10">
                        <div className="flex flex-col items-center mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-pink-600 rounded-full animate-pulse"></div>
                                <h1 className="text-3xl font-black tracking-tight text-slate-900">
                                    FitVeSion<span className="italic font-light text-orange-500">AI</span>
                                </h1>
                            </div>
                            <span className="text-[11px] text-slate-400 font-medium tracking-widest uppercase mt-1">Intelligence in Fashion</span>
                        </div>
                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">Welcome back</h2>
                        <p className="text-slate-500 text-sm mt-2">Enter your details to access your dashboard</p>
                    </div>

                    <form className="space-y-5" onSubmit={(e) => {
                        e.preventDefault(); handleLogin();
                    }}>
                        {/* Email Field */}
                        <div>
                            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2 ml-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 text-slate-900"
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <div className="flex justify-between items-center mb-2 ml-1">
                                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                                    Password
                                </label>
                                <a href="#" className="text-[11px] font-bold text-orange-600 hover:text-orange-700 uppercase tracking-widest">
                                    Forgot?
                                </a>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 text-slate-900"
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2 px-1">
                            <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer" />
                            <label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer select-none">Keep me logged in</label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-sm hover:bg-black transition-all active:scale-[0.98] shadow-xl shadow-slate-200 mt-4 group">
                            Sign In
                            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-slate-100"></span></div>
                        <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold"><span className="bg-white px-4 text-slate-400">Or continue with</span></div>
                    </div>

                    {/* Social Login */}
                    <button onClick={handleGoogleLogin} className="w-full bg-white border border-slate-200 text-slate-700 py-3.5 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                        Google
                    </button>
                </div>

                {/* Footer Link */}
                <p className="text-center text-slate-500 text-sm mt-8">
                    Don't have an account? {' '}
                    <Link to={`/CreateAccount`} className="text-orange-600 font-bold hover:underline">Create an account</Link>
                </p>
            </div>
        </div>
    );
}