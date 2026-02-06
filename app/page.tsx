'use client';

import { useState } from 'react';
import { handleWaitlist } from './actions';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Camera,
  Instagram,
  Layout,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Home,
  BarChart3,
  ShieldCheck,
} from 'lucide-react';

export default function LandingPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  async function clientAction(formData: FormData) {
    setStatus('loading');
    const result = await handleWaitlist(formData);
    if (result?.success) setStatus('success');
    else setStatus('idle');
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] antialiased selection:bg-black selection:text-white overflow-x-hidden font-sans">
      {/* 1. TOP NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white px-2 py-0.5 text-[11px] font-black tracking-widest uppercase">
            Posts
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="hidden md:block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
            v1.0 / 2026
          </span>
          <a
            href="#join"
            className="text-[10px] font-black tracking-[0.2em] uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-all focus:ring-2 focus:ring-black focus:ring-offset-2 outline-none"
          >
            Get Access
          </a>
        </div>
      </nav>

      <main className="relative pt-32 pb-20 px-6">
        {/* 2. HERO SECTION */}
        <section className="max-w-7xl mx-auto mb-24 md:mb-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-slate-600 uppercase">
                <Sparkles size={12} className="text-black" /> The New Content
                Standard
              </div>

              <h1 className="text-7xl md:text-9xl font-light tracking-tighter leading-[0.85] text-black">
                Posts.
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-xl">
                The automated marketing engine for{' '}
                <span className="text-black font-medium underline decoration-slate-300 underline-offset-8">
                  modern real estate
                </span>
                . Built for agents who need high-end visual presence without the
                manual grind.
              </p>

              <div className="flex flex-wrap gap-6 pt-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                <span className="flex items-center gap-2">
                  <Home size={14} strokeWidth={1.5} /> Residential
                </span>
                <span className="flex items-center gap-2">
                  <Building2 size={14} strokeWidth={1.5} /> Commercial
                </span>
                <span className="flex items-center gap-2">
                  <BarChart3 size={14} strokeWidth={1.5} /> Industrial
                </span>
              </div>
            </motion.div>

            <motion.div
              id="join"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="bg-white border border-slate-200 p-8 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-black" />

              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.div
                    key="form"
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-8"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">
                          Enrolling Founder Cohort
                        </span>
                      </div>
                      <h3 className="text-3xl font-serif italic text-black">
                        Reserve your spot
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                        Joining the first 50 agents to automate their authority
                        for the 2026 market.
                      </p>
                    </div>

                    <form action={clientAction} className="space-y-4">
                      <Input
                        name="email"
                        type="email"
                        placeholder="Work Email"
                        required
                        className="h-16 border-slate-200 rounded-none focus-visible:ring-black focus:border-black text-lg bg-slate-50/50 px-6 transition-all"
                      />
                      <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full h-16 bg-black text-white rounded-none hover:bg-slate-800 transition-all uppercase tracking-[0.3em] font-black text-[11px] flex justify-between px-8 group"
                      >
                        {status === 'loading'
                          ? 'Processing...'
                          : 'Request Access'}
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Button>
                    </form>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold text-slate-400">
                        <ShieldCheck size={12} /> Secure Verification
                      </div>
                      <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                        Limited Slots Remaining
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                      <CheckCircle2
                        size={32}
                        className="text-emerald-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-serif italic">
                        Application Received
                      </h3>
                      <p className="text-sm text-slate-500 max-w-[240px] mx-auto">
                        Verification in progress. We&apos;ll be in touch
                        shortly.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* 3. CAPABILITIES */}
        <section className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera />,
                title: 'Visual Authority',
                desc: 'Clean, high-end post layouts that make any listing look like a destination.',
              },
              {
                icon: <Instagram />,
                title: 'Market Timing',
                desc: 'Strategic automated posting to hit your audience when engagement is highest.',
              },
              {
                icon: <Layout />,
                title: 'Agent Workflow',
                desc: 'Generate Just Listed, Open House, and Just Sold updates in seconds.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-white border border-slate-200 p-10 space-y-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-slate-50 w-12 h-12 flex items-center justify-center text-slate-400 group-hover:text-black transition-colors">
                  {feature.icon}
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-black">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* 4. FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-40 py-20 px-6 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="bg-black text-white px-2 py-0.5 text-[9px] font-black tracking-widest uppercase">
            Posts
          </div>
          <div className="text-[9px] uppercase tracking-[0.4em] font-bold">
            © 2026 / All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
