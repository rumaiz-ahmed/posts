'use client';

import { useState } from 'react';
import { handleWaitlist } from './actions';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  MessageSquare,
  Instagram,
  BellRing,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Zap,
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
      {/* TOP NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-black text-white px-2 py-0.5 text-[11px] font-black tracking-widest uppercase">
            Posts
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <span className="hidden md:block text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">
            Early Access Soon
          </span>
          <a
            href="#join"
            className="text-[10px] font-black tracking-[0.2em] uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition-all focus:ring-2 focus:ring-black focus:ring-offset-2 outline-none"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      <main className="relative pt-32 pb-20 px-6">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto mb-24 md:mb-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-emerald-700 uppercase">
                <BellRing size={12} className="text-emerald-600" />
                Never Forget a Follow-Up Again
              </div>

              <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-[0.9] text-black">
                The <span className="italic font-serif">only</span> CRM
                <span className="block text-5xl md:text-7xl text-slate-400 mt-4">
                  built for solo agents.
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-xl">
                <span className="font-semibold text-black">
                  Simple Follow Up
                </span>{' '}
                is live now.
                <br />
                <span className="text-slate-500">
                  Instant Replies and Content Engine are coming soon—join the
                  waitlist!
                </span>
              </p>

              <div className="bg-slate-50 border border-slate-200 p-6 space-y-4">
                <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Available Now
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <BellRing
                      size={20}
                      className="text-black mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <div className="font-semibold text-sm text-black">
                        Simple Follow Up
                      </div>
                      <div className="text-sm text-slate-500">
                        Automatic reminders on days 1, 3, 7, 14, 30, 90
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase pt-4">
                  Coming Soon
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 opacity-50">
                    <MessageSquare
                      size={20}
                      className="text-black mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <div className="font-semibold text-sm text-black">
                        Instant Replies
                      </div>
                      <div className="text-sm text-slate-500">
                        AI responds to leads in under 60 seconds, 24/7
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 opacity-50">
                    <Instagram
                      size={20}
                      className="text-black mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <div className="font-semibold text-sm text-black">
                        Content Engine
                      </div>
                      <div className="text-sm text-slate-500">
                        Just Listed, Open House, and Just Sold posts in seconds
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-black text-white p-6 space-y-2">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-light">$19</span>
                  <span className="text-slate-400 text-sm">/month</span>
                  <span className="ml-auto text-xs line-through text-slate-500">
                    $69/mo (competitors)
                  </span>
                </div>
                <div className="text-[10px] tracking-wider text-slate-400 uppercase">
                  14-day free trial • Cancel anytime
                </div>
              </div>
            </motion.div>

            {/* WAITLIST FORM */}
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
                          First 100 Agents Get Lifetime Discount
                        </span>
                      </div>
                      <h3 className="text-3xl font-serif italic text-black">
                        Join the waitlist
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                        Get early access to Simple Follow Up (available now) and
                        be the first to try Instant Replies and Content Engine
                        when they launch.
                      </p>
                    </div>

                    <form action={clientAction} className="space-y-4">
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="h-16 border-slate-200 rounded-none focus-visible:ring-black focus:border-black text-lg bg-slate-50/50 px-6 transition-all"
                      />
                      <Input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        required
                        className="h-16 border-slate-200 rounded-none focus-visible:ring-black focus:border-black text-lg bg-slate-50/50 px-6 transition-all"
                      />
                      <Input
                        name="brokerage"
                        type="text"
                        placeholder="Brokerage/Team (optional)"
                        className="h-16 border-slate-200 rounded-none focus-visible:ring-black focus:border-black text-lg bg-slate-50/50 px-6 transition-all"
                      />
                      <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full h-16 bg-black text-white rounded-none hover:bg-slate-800 transition-all uppercase tracking-[0.3em] font-black text-[11px] flex justify-between px-8 group"
                      >
                        {status === 'loading'
                          ? 'Joining...'
                          : 'Reserve My Spot'}
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Button>
                    </form>

                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                        What Happens Next:
                      </div>
                      <div className="space-y-2 text-xs text-slate-500">
                        <div className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-emerald-500 mt-0.5"
                          />
                          <span>Instant access to Simple Follow Up</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-emerald-500 mt-0.5"
                          />
                          <span>
                            Early access to Instant Replies and Content Engine
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2
                            size={14}
                            className="text-emerald-500 mt-0.5"
                          />
                          <span>Lifetime discount for early adopters</span>
                        </div>
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
                        You&apos;re on the list!
                      </h3>
                      <p className="text-sm text-slate-500 max-w-[280px] mx-auto">
                        Check your email for access to Simple Follow Up and
                        updates on Instant Replies and Content Engine.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* THE PROBLEM SECTION */}
        <section className="max-w-5xl mx-auto mb-32">
          <div className="bg-slate-50 border border-slate-200 p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-serif italic text-black">
                Solo agents lose $10,000+ every year
              </h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Here&apos;s what&apos;s costing you deals right now:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border border-slate-200 space-y-3">
                <div className="text-3xl font-light text-red-500">44%</div>
                <div className="text-sm font-semibold text-black">
                  Of agents quit after first "no"
                </div>
                <div className="text-xs text-slate-500">
                  Most deals close after 5+ touchpoints. You&apos;re leaving
                  money on the table.
                </div>
              </div>
              <div className="bg-white p-6 border border-slate-200 space-y-3">
                <div className="text-3xl font-light text-red-500">$69/mo</div>
                <div className="text-sm font-semibold text-black">
                  Average CRM cost
                </div>
                <div className="text-xs text-slate-500">
                  Simple Follow Up is just $19/month with no bloat.
                </div>
              </div>
              <div className="bg-white p-6 border border-slate-200 space-y-3">
                <div className="text-3xl font-light text-red-500">20 hrs</div>
                <div className="text-sm font-semibold text-black">
                  Wasted on manual follow-ups
                </div>
                <div className="text-xs text-slate-500">
                  Automate it and focus on closing deals.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (FOCUS ON CRM) */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl font-light tracking-tight text-black">
              How <span className="font-serif italic">Simple Follow Up</span>{' '}
              Works
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The only CRM built for solo agents who hate complex software
            </p>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center bg-white border border-slate-200 p-12"
            >
              <div className="order-2 md:order-1 bg-slate-50 p-8 border border-slate-200">
                <div className="space-y-3">
                  <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                    Automatic Follow-Up Timeline
                  </div>
                  {[
                    { day: 'Day 1', action: 'Initial contact', status: 'Sent' },
                    { day: 'Day 3', action: '1st follow-up', status: 'Sent' },
                    {
                      day: 'Day 7',
                      action: 'New listings shared',
                      status: 'Sent',
                    },
                    {
                      day: 'Day 14',
                      action: 'Check-in call',
                      status: 'Scheduled',
                    },
                    {
                      day: 'Day 30',
                      action: 'Long-term nurture',
                      status: 'Pending',
                    },
                    {
                      day: 'Day 90',
                      action: 'Re-engagement',
                      status: 'Pending',
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-white p-3 border border-slate-200"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${item.status === 'Sent' ? 'bg-emerald-500' : item.status === 'Scheduled' ? 'bg-blue-500' : 'bg-slate-300'}`}
                        />
                        <span className="text-sm font-semibold text-black">
                          {item.day}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">
                        {item.action}
                      </div>
                      <div
                        className={`text-[9px] uppercase tracking-wider font-bold ${item.status === 'Sent' ? 'text-emerald-600' : item.status === 'Scheduled' ? 'text-blue-600' : 'text-slate-400'}`}
                      >
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 px-3 py-1 text-[10px] font-bold tracking-widest text-purple-700 uppercase">
                  <BellRing size={12} /> Simple Follow Up
                </div>
                <h3 className="text-3xl font-serif italic text-black">
                  Stop forgetting to follow up
                </h3>
                <div className="space-y-4 text-slate-600">
                  <p>
                    50% of sales happen after the 5th contact. But most agents
                    quit after 2.
                  </p>
                  <p className="font-semibold text-black">
                    Simple Follow Up automatically:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500 mt-0.5"
                      />
                      <span>
                        Sends perfectly-timed follow-ups on days 1, 3, 7, 14,
                        30, 90
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500 mt-0.5"
                      />
                      <span>
                        Uses templates proven to convert (or customize your own)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500 mt-0.5"
                      />
                      <span>
                        Reminds you when it&apos;s time to call (not just text)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        className="text-emerald-500 mt-0.5"
                      />
                      <span>
                        Tracks every interaction so nothing slips through
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* UPCOMING FEATURES */}
        <section className="max-w-7xl mx-auto mb-32">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-slate-500 uppercase">
              <Zap size={12} /> Coming Soon
            </div>
            <h2 className="text-5xl font-light tracking-tight text-black">
              More features{' '}
              <span className="italic font-serif">launching soon</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Join the waitlist to be the first to access these powerful tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Instant Replies */}
            <div className="bg-white border border-slate-200 p-8 space-y-6 opacity-70">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 py-1 text-[10px] font-bold tracking-widest text-blue-700 uppercase">
                <MessageSquare size={12} /> Instant Replies
              </div>
              <h3 className="text-2xl font-serif italic text-black">
                AI responds to leads in 60 seconds
              </h3>
              <p className="text-sm text-slate-500">
                Never lose a lead to slow response times. Our AI qualifies
                leads, answers questions, and schedules showings—so you get warm
                leads, not cold calls.
              </p>
              <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                Launching Soon
              </div>
            </div>

            {/* Content Engine */}
            <div className="bg-white border border-slate-200 p-8 space-y-6 opacity-70">
              <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 px-3 py-1 text-[10px] font-bold tracking-widest text-pink-700 uppercase">
                <Instagram size={12} /> Content Engine
              </div>
              <h3 className="text-2xl font-serif italic text-black">
                Professional posts in 30 seconds
              </h3>
              <p className="text-sm text-slate-500">
                Upload a photo, enter a few details, and get a ready-to-post
                social media asset with captions, hashtags, and optimal
                timing—all in seconds.
              </p>
              <div className="text-[9px] uppercase tracking-widest font-bold text-slate-400">
                Launching Soon
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="max-w-5xl mx-auto mb-32">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-5xl font-light tracking-tight text-black">
              Simple <span className="italic font-serif">pricing</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              No contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Simple Follow Up */}
            <div className="bg-black text-white p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-emerald-500 text-black px-3 py-1 text-[9px] font-black uppercase tracking-widest rotate-3">
                Available Now
              </div>
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">
                  Simple Follow Up
                </div>
                <div className="text-3xl font-light">$19/month</div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-slate-300">Automatic follow-ups</span>
                  <span className="font-semibold text-emerald-400">✓</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-slate-300">Custom templates</span>
                  <span className="font-semibold text-emerald-400">✓</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-slate-300">Call reminders</span>
                  <span className="font-semibold text-emerald-400">✓</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                  <span className="text-slate-300">Unlimited leads</span>
                  <span className="font-semibold text-emerald-400">✓</span>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-slate-700">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">
                    Total Monthly Cost
                  </span>
                  <div className="text-right">
                    <div className="text-4xl font-light">$19</div>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-500 text-black -mx-8 -mb-8 p-6 text-center">
                <div className="text-2xl font-bold">90% cheaper</div>
                <div className="text-sm">
                  than competitors like Follow Up Boss
                </div>
              </div>
            </div>

            {/* Bundle (teaser) */}
            <div className="bg-slate-50 border-2 border-slate-200 p-8 space-y-6 relative opacity-70">
              <div className="absolute top-4 right-4 bg-slate-200 text-slate-500 px-3 py-1 text-[9px] font-black uppercase tracking-widest rotate-3">
                Coming Soon
              </div>
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">
                  All Three Tools
                </div>
                <div className="text-3xl font-light">$79/month</div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Instant Replies</span>
                  <span className="font-semibold text-slate-400">✓</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Simple Follow Up</span>
                  <span className="font-semibold text-slate-400">✓</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Content Engine</span>
                  <span className="font-semibold text-slate-400">✓</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                  <span className="text-slate-500">Save $1,500+/month</span>
                  <span className="font-semibold text-slate-400">✓</span>
                </div>
              </div>
              <div className="pt-4 border-t-2 border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-slate-500">
                    Total Monthly Cost
                  </span>
                  <div className="text-right">
                    <div className="text-4xl font-light text-slate-500">
                      $79
                    </div>
                    <div className="text-xs line-through text-slate-400">
                      $1,594
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-200 text-slate-500 -mx-8 -mb-8 p-6 text-center">
                <div className="text-xl font-bold">Launching Soon</div>
                <div className="text-sm">
                  Join the waitlist for early access
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-3xl mx-auto text-center space-y-8 bg-slate-50 border border-slate-200 p-16">
          <h2 className="text-5xl font-serif italic text-black">
            Join the first 100 agents
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Get instant access to Simple Follow Up and early access to Instant
            Replies and Content Engine.
            <span className="block mt-2 text-black font-semibold">
              Lifetime discount for early adopters.
            </span>
          </p>
          <a
            href="#join"
            className="inline-block bg-black text-white px-12 py-5 text-sm font-black tracking-[0.3em] uppercase hover:bg-slate-800 transition-all"
          >
            Join Waitlist →
          </a>
          <div className="text-xs text-slate-400 uppercase tracking-wider">
            No credit card required • Early access guaranteed
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 mt-40 py-20 px-6 text-slate-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="bg-black text-white px-2 py-0.5 text-[9px] font-black tracking-widest uppercase inline-block">
                Posts
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[9px] uppercase tracking-widest font-bold">
                Available Now
              </div>
              <div className="space-y-2 text-sm">
                <div>Simple Follow Up</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[9px] uppercase tracking-widest font-bold">
                Coming Soon
              </div>
              <div className="space-y-2 text-sm">
                <div>Instant Replies</div>
                <div>Content Engine</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[9px] uppercase tracking-widest font-bold">
                Legal
              </div>
              <div className="space-y-2 text-sm">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Contact</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-slate-200">
            <div className="text-[9px] uppercase tracking-[0.4em] font-bold">
              © {new Date().getFullYear()} Posts / All Rights Reserved
            </div>
            <div className="text-[9px] uppercase tracking-[0.4em] font-bold">
              Made for real estate agents who want to win
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
