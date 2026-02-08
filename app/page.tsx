'use client';

import { useState } from 'react';
import { handleWaitlist } from './actions';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BellRing, CheckCircle2, Sparkles, X, ArrowRight } from 'lucide-react';

export default function LandingPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  async function clientAction(formData: FormData) {
    setStatus('loading');
    const result = await handleWaitlist(formData);
    if (result?.success) {
      setEmail(formData.get('email') as string);
      setStatus('success');
    } else {
      setStatus('idle');
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* Simple Header */}
      <header className="border-b border-slate-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Simple Follow Up</div>
          <a
            href="#join"
            className="text-sm font-semibold bg-slate-900 text-white px-6 py-2 rounded-full hover:bg-slate-800 transition"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-sm font-medium text-emerald-700">
                <Sparkles size={16} />
                Launching March 2026 • Join Waitlist
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
                Stop forgetting to follow up with leads
              </h1>

              <p className="text-xl text-slate-600 leading-relaxed">
                The dead-simple CRM that reminds you exactly when to follow up.
                No complex features. No team bloat. Just you and your leads.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#join"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition text-lg"
                >
                  Join Waitlist
                  <ArrowRight size={20} />
                </a>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  First 50 get 50% off for life
                </div>
              </div>

              <div className="pt-8 border-t border-slate-200">
                <div className="text-sm text-slate-500 mb-3">The problem:</div>
                <div className="space-y-2 text-slate-700">
                  <div className="flex items-start gap-3">
                    <X
                      size={20}
                      className="text-red-500 flex-shrink-0 mt-0.5"
                    />
                    <span>You forget to follow up and lose deals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X
                      size={20}
                      className="text-red-500 flex-shrink-0 mt-0.5"
                    />
                    <span>Phone reminders get lost in notifications</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <X
                      size={20}
                      className="text-red-500 flex-shrink-0 mt-0.5"
                    />
                    <span>
                      CRMs like Follow Up Boss are $69/mo and too complex
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Signup Form */}
            <motion.div
              id="join"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 md:p-10 shadow-xl"
            >
              <AnimatePresence mode="wait">
                {status !== 'success' ? (
                  <motion.div
                    key="form"
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900">
                        Join the Waitlist
                      </h3>
                      <p className="text-slate-600">
                        Get early access when we launch in March 2026. First 50
                        get lifetime 50% off ($9.50/month forever).
                      </p>
                    </div>

                    <form action={clientAction} className="space-y-4">
                      <div>
                        <Input
                          name="name"
                          type="text"
                          placeholder="Your name"
                          required
                          className="h-12 text-base border-slate-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="h-12 text-base border-slate-300 rounded-lg"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full h-12 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-semibold text-base"
                      >
                        {status === 'loading'
                          ? 'Joining...'
                          : 'Reserve My Spot'}
                      </Button>
                    </form>

                    <div className="space-y-3 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        <span>Early access before public launch</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        <span>Lifetime 50% discount (first 50 only)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-500" />
                        <span>Personal onboarding call when we launch</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100">
                      <CheckCircle2 size={32} className="text-emerald-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-slate-900">
                        You're on the list!
                      </h3>
                      <p className="text-slate-600">
                        Check <strong>{email}</strong> for confirmation.
                      </p>
                      <p className="text-sm text-slate-500 pt-4">
                        You'll get early access when we launch in March +
                        lifetime 50% discount.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">
              Ridiculously simple
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three steps. That's it. No setup. No complexity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-bold text-xl mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Add a lead
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Name, phone, email. Takes 10 seconds. That's all we need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-bold text-xl mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                We remind you
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Automatic reminders on days 1, 3, 7, 14, 30, 90. Never miss a
                follow-up.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-sm border border-slate-200"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white font-bold text-xl mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Text or call them
              </h3>
              <p className="text-slate-600 leading-relaxed">
                One tap to text. One tap to call. Pre-written templates or write
                your own.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Follow-Up Timeline Visual */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">
              The proven follow-up schedule
            </h2>
            <p className="text-xl text-slate-600">
              50% of sales happen after the 5th contact. Most agents quit after
              2.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                day: 'Day 1',
                action: 'Initial contact',
                status: 'You reach out first time',
              },
              {
                day: 'Day 3',
                action: '1st follow-up',
                status: 'Check if they got your message',
              },
              {
                day: 'Day 7',
                action: 'Share new listings',
                status: 'Provide value, stay top of mind',
              },
              {
                day: 'Day 14',
                action: 'Check-in call',
                status: 'Time for a phone conversation',
              },
              {
                day: 'Day 30',
                action: 'Long-term nurture',
                status: 'Still looking? How can I help?',
              },
              {
                day: 'Day 90',
                action: 'Re-engagement',
                status: 'Last touchpoint before moving on',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 bg-white border-2 border-slate-200 rounded-xl p-6"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 text-white font-bold">
                  {item.day.replace('Day ', '')}
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-lg text-slate-900">
                    {item.action}
                  </div>
                  <div className="text-slate-600">{item.status}</div>
                </div>
                <BellRing className="flex-shrink-0 text-slate-400" size={24} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-600 mb-6">
              <strong className="text-slate-900">Simple Follow Up</strong> sends
              these reminders automatically.
              <br />
              Join the waitlist to get early access when we launch.
            </p>
            <a
              href="#join"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition"
            >
              Join Waitlist
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="px-6 py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-3">44%</div>
              <div className="text-slate-300">
                of agents quit following up after the first "no"
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">50%</div>
              <div className="text-slate-300">
                of sales happen after the 5th contact
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">$10k+</div>
              <div className="text-slate-300">
                lost annually by agents with poor follow-up
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-xl text-slate-600">
              Built specifically for solo agents who hate complex software.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                <CheckCircle2 className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Automatic follow-up reminders
                </h3>
                <p className="text-slate-600">
                  Days 1, 3, 7, 14, 30, 90. Set it once, never think about it
                  again.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                <CheckCircle2 className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Pre-written text templates
                </h3>
                <p className="text-slate-600">
                  Proven messages that get responses. Or write your own.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                <CheckCircle2 className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  One-tap to text or call
                </h3>
                <p className="text-slate-600">
                  Click the reminder, send the text. No copy-pasting. No
                  friction.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                <CheckCircle2 className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Mobile app (iOS & Android)
                </h3>
                <p className="text-slate-600">
                  You're always on the go. So is Simple Follow Up.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                <CheckCircle2 className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Lead status tracking
                </h3>
                <p className="text-slate-600">
                  New, Contacted, Showing Scheduled, Offer Made, Closed. Simple.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100">
                <CheckCircle2 className="text-emerald-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Personal onboarding
                </h3>
                <p className="text-slate-600">
                  15-minute call to set you up. I'll import your leads if you
                  want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">
              Simple pricing
            </h2>
            <p className="text-xl text-slate-600">
              First 50 waitlist members get lifetime 50% off
            </p>
          </div>

          <div className="bg-white border-2 border-slate-900 rounded-2xl p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              50% OFF LIFETIME
            </div>

            <div className="flex items-baseline gap-3 mb-2">
              <div className="text-6xl font-bold text-slate-900">$9.50</div>
              <div className="text-slate-600 text-lg">/month</div>
            </div>
            <div className="text-slate-500 mb-6">
              <span className="line-through">$19/month</span> for first 50
              waitlist members
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-emerald-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-slate-700">Unlimited leads</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-emerald-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-slate-700">
                  Automatic follow-up reminders
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-emerald-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-slate-700">Text & email templates</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-emerald-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-slate-700">
                  Mobile app (iOS & Android)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-emerald-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-slate-700">Personal onboarding call</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-emerald-500 flex-shrink-0 mt-1"
                  size={20}
                />
                <span className="text-slate-700">Email support</span>
              </div>
            </div>

            <a
              href="#join"
              className="block w-full text-center bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-800 transition text-lg"
            >
              Join Waitlist - Get 50% Off
            </a>

            <p className="text-center text-sm text-slate-500 mt-4">
              Launching March 2026. First 50 get lifetime discount.
            </p>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between text-sm">
                <div className="text-slate-600">
                  Regular price after launch:
                </div>
                <div className="text-slate-900 font-semibold">$19/month</div>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <div className="text-slate-600">Competitors charge:</div>
                <div className="text-slate-900 font-semibold">$69/month</div>
              </div>
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold text-sm">
                  Save $714/year as a waitlist member
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                When does Simple Follow Up launch?
              </h3>
              <p className="text-slate-600">
                March 2026. Waitlist members get early access 2 weeks before
                public launch.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                What does "lifetime 50% off" mean?
              </h3>
              <p className="text-slate-600">
                First 50 waitlist members pay $9.50/month forever instead of
                $19/month. Even if we raise prices later, you keep your
                discount.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Can I import my existing leads?
              </h3>
              <p className="text-slate-600">
                Yes! I'll personally help you import them during your onboarding
                call. CSV, Excel, or manual entry.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Does it integrate with my current CRM?
              </h3>
              <p className="text-slate-600">
                Not yet. Simple Follow Up is designed to be your only CRM. If
                you're using something else, this might not be for you.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                What if I need help?
              </h3>
              <p className="text-slate-600">
                Email me directly. I respond within 24 hours (usually way
                faster). You're not just getting software, you're getting me.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Is this for teams or just solo agents?
              </h3>
              <p className="text-slate-600">
                Just solo agents. No team features, no user management, no
                complexity. If you're a team of 5+, use Follow Up Boss instead.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                What happens to my data if I cancel?
              </h3>
              <p className="text-slate-600">
                You can export it anytime as a CSV. After you cancel, your data
                is deleted after 30 days. No lock-in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Stop losing deals to forgotten follow-ups
          </h2>
          <p className="text-xl text-slate-300">
            Join the waitlist. Get 50% off for life. Launch is March 2026.
          </p>
          <a
            href="#join"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-slate-100 transition text-lg"
          >
            Join Waitlist
            <ArrowRight size={20} />
          </a>
          <p className="text-sm text-slate-400">
            First 50 get lifetime 50% discount ($9.50/month forever)
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="font-bold text-lg mb-4">Simple Follow Up</div>
              <p className="text-sm text-slate-600">
                The dead-simple CRM for solo real estate agents.
              </p>
            </div>
            <div>
              <div className="font-semibold mb-4 text-sm">Product</div>
              <div className="space-y-2 text-sm text-slate-600">
                <div>
                  <a href="#" className="hover:text-slate-900">
                    Features
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-slate-900">
                    Pricing
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-slate-900">
                    FAQ
                  </a>
                </div>
              </div>
            </div>

            <div>
              <div className="font-semibold mb-4 text-sm">Legal</div>
              <div className="space-y-2 text-sm text-slate-600">
                <div>
                  <a href="#" className="hover:text-slate-900">
                    Privacy
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-slate-900">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <div>© 2026 Simple Follow Up. All rights reserved.</div>
            <div>Built for real estate agents who hate complex software.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
