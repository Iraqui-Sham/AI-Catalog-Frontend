import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
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

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("credits", res.data.user.credits);
            localStorage.setItem("user", JSON.stringify(res.data.user));

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

            const res = await API.post("/auth/google", {
                name: user.displayName,
                email: user.email,
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("credits", res.data.user.credits);
            localStorage.setItem("user", JSON.stringify(res.data.user));
            navigate("/dashboard");

        } catch (error) {
            console.log(error);
            alert("Google login failed");
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4 py-6 relative overflow-hidden">
            {/* Background Glow — same as CreateAccount */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-50/60 via-transparent to-transparent -z-10"></div>

            {/* CARD WRAPPER */}
            <div className="w-full max-w-sm">

                {/* Logo/Brand — outside card, same as CreateAccount */}
                <div className="flex flex-col items-center mb-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-gradient-to-b from-orange-500 to-pink-600 rounded-full animate-pulse"></div>
                        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
                            FitViSion<span className="italic font-light text-orange-500">AI</span>
                        </h1>
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">
                        Intelligence in Fashion
                    </span>
                </div>

                {/* CARD */}
                <div className="bg-white rounded-3xl border border-slate-100 p-5 sm:p-7
                shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                transition-all duration-300
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]
                hover:-translate-y-1">

                    {/* HEADING */}
                    <div className="text-center mb-5">
                        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                            Welcome back
                        </h2>
                        <p className="text-slate-500 text-xs mt-1">
                            Enter your details to access your dashboard
                        </p>
                    </div>

                    {/* FORM */}
                    <form className="space-y-3" onSubmit={(e) => {
                        e.preventDefault(); handleLogin();
                    }}>
                        {/* EMAIL */}
                        <div>
                            <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5 ml-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="name@company.com"
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 text-slate-900"
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <div className="flex justify-between items-center mb-1.5 ml-1">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    Password
                                </label>
                                <a href="#" className="text-[10px] font-bold text-orange-600 hover:text-orange-700 uppercase tracking-widest">
                                    Forgot?
                                </a>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all placeholder:text-slate-300 text-slate-900"
                            />
                        </div>

                        {/* Remember Me */}
                        <div className="flex items-center gap-2 px-1 py-0.5">
                            <input type="checkbox" id="remember" className="w-3.5 h-3.5 rounded border-slate-300 text-orange-600 focus:ring-orange-500 cursor-pointer" />
                            <label htmlFor="remember" className="text-xs text-slate-600 cursor-pointer select-none">Keep me logged in</label>
                        </div>

                        {/* BUTTON — gradient, same as CreateAccount */}
                        <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all active:scale-[0.98] shadow-lg shadow-orange-200 group">
                            Sign In
                            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </button>

                        {/* Divider */}
                        <div className="relative my-3">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-slate-100"></span>
                            </div>
                            <div className="relative flex justify-center text-[9px] uppercase tracking-widest font-bold">
                                <span className="bg-white px-3 text-slate-400">Or continue with</span>
                            </div>
                        </div>

                        {/* GOOGLE LOGIN */}
                        <button onClick={handleGoogleLogin} type="button" className="w-full bg-white border border-slate-200 text-slate-700 py-2.5 rounded-xl font-bold text-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-2.5">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="Google" />
                            Continue with Google
                        </button>
                    </form>
                </div>

                {/* FOOTER */}
                <p className="text-center text-slate-500 text-xs mt-4">
                    Don't have an account?{" "}
                    <Link to="/createAccount" className="text-orange-600 font-bold hover:underline">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
}