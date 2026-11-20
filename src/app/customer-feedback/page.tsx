import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MessageSquare, Mail, Inbox, ThumbsUp, Send } from "lucide-react";
import FeedbackForm from "./feedback-form";

export const metadata = {
  title: "Customer Feedback | Brooklyn State University",
  description:
    "Share your feedback, suggestions, and compliments with Brooklyn State University.",
};

export default function CustomerFeedbackPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <MessageSquare className="h-3.5 w-3.5" />
              Customer Feedback
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Customer Feedback
            </h1>
            <p className="text-lg text-slate-300">
              We value your input. Help us improve by sharing your thoughts and experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left column: info cards */}
            <div className="lg:col-span-2 space-y-8">
              {/* Feedback Channels */}
              <ScrollReveal>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">Feedback Channels</CardTitle>
                    </div>
                    <CardDescription>Multiple ways to reach us with your feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-lg border p-4">
                        <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mb-2" />
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">quality@bsu.ac.ke</p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <Inbox className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mb-2" />
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Suggestion Box</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Available at all major service points and libraries.</p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mb-2" />
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">Online Form</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Use the form on this page for quick, structured feedback.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Complaints, Compliments, Service Improvement */}
              <div className="grid gap-8 md:grid-cols-2">
                <ScrollReveal>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                          <MessageSquare className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">Complaints Procedure</CardTitle>
                      </div>
                      <CardDescription>How we handle concerns</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>Submit your complaint via email, suggestion box, or the online form.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>You will receive an acknowledgement within 5 working days.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>A thorough investigation is conducted and a formal response issued within 21 working days.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>If you remain dissatisfied, you may escalate to the Quality Assurance Directorate.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                          <ThumbsUp className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">Compliments & Recognition</CardTitle>
                      </div>
                      <CardDescription>Celebrate excellence</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>We welcome compliments about staff and services that exceeded your expectations.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>Compliments are shared with the individual and their supervisor and recorded in staff performance files.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                          <span>Outstanding service is recognised at the annual Staff Excellence Awards.</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>

              {/* Service Improvement Pledge */}
              <ScrollReveal>
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                        <ThumbsUp className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">Service Improvement Pledge</CardTitle>
                    </div>
                    <CardDescription>What we promise to do with your feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                      Every piece of feedback received is logged, reviewed, and used to inform service improvements. We pledge to:
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="rounded-lg border p-4">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Acknowledge</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Respond to every submission within 5 working days.</p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Analyse</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Review trends and root causes through quarterly reports.</p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Act</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Implement corrective and preventive actions.</p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Report</p>
                        <p className="text-xs text-slate-600 dark:text-slate-400">Publish service improvements on the website annually.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Right column: Feedback Form */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <Card className="hover:shadow-md transition-shadow sticky top-8">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                        <Send className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-lg">Feedback Form</CardTitle>
                    </div>
                    <CardDescription>Send us your thoughts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <FeedbackForm />
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
