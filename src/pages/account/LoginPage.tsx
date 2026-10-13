import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/account/orders');
  };

  const handleDemoLogin = () => {
    navigate('/account/orders');
  };

  return (
    <div className="pt-32 pb-24 bg-mesh-subtle min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-4">
        
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-surface-border shadow-soft-xl space-y-6">
          
          <div className="text-center">
            <div className="w-14 h-14 rounded-2xl bg-brand-navy text-brand-gold flex items-center justify-center mx-auto mb-3">
              <User className="w-7 h-7" />
            </div>
            <h1 className="text-2xl font-extrabold text-brand-navy">Client Portal Login</h1>
            <p className="text-xs text-brand-navy/70 mt-1 font-normal">
              Access your active meal plans, follow-up calendar, and downloadable PDF guides.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@example.com"
                className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 text-sm text-brand-navy focus:border-brand-mint focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-brand-navy uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-brand-navy/15 text-sm text-brand-navy focus:border-brand-mint focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-dark shadow-soft transition-all"
            >
              Log In to Portal
            </button>
          </form>

          {/* 1-Click Demo Client Access */}
          <div className="pt-3 border-t border-brand-navy/10 text-center">
            <button
              type="button"
              onClick={handleDemoLogin}
              className="w-full py-3 px-4 rounded-xl text-xs font-bold text-brand-navy bg-brand-mint/20 hover:bg-brand-mint/30 border border-brand-mint/40 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-brand-mint-dark" />
              <span>Instant 1-Click Client Access</span>
            </button>
          </div>

          <div className="text-center text-xs text-brand-navy/60">
            <span>New client? </span>
            <Link to="/packages" className="text-brand-coral font-bold hover:underline">
              Choose a package
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
