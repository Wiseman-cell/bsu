import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Gavel, FileText, UserPlus, ListChecks, Award, Bell, Archive, Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Active Tenders & Bids | Brooklyn State University",
  description:
    "View current tender opportunities and bidding information for suppliers and contractors at Brooklyn State University.",
};

export default function TendersPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Gavel className="h-3.5 w-3.5" />
              Active Tenders & Bids
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Procurement & Tenders
            </h1>
            <p className="text-lg text-slate-300">
              Explore current procurement opportunities and submit bids for goods, services, and works.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Procurement Policy + Active Tenders Banner */}
          <ScrollReveal>
            <Card className="mb-12 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                    <FileText className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Procurement Policy</CardTitle>
                </div>
                <CardDescription>Principles guiding our purchasing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Brooklyn State University is committed to transparent, competitive, and ethical procurement practices. All procurement is governed by the Public Procurement and Asset Disposal Act and the university's internal Procurement Policy. We seek to obtain value for money while promoting local industry, environmental sustainability, and fair treatment of all bidders.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Transparency</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Competitiveness</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Value for Money</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Fairness</span>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Accountability</span>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Active Tenders Banner */}
          <ScrollReveal>
            <div className="mb-12 rounded-xl bg-emerald-700 text-white p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold mb-1">Active Tenders</h2>
                  <p className="text-emerald-100">View and apply for current procurement opportunities.</p>
                </div>
                <Link href="/procurement/eoi-2026">
                  <Button variant="secondary" className="shrink-0">
                    View EOI 2026
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Supplier Registration */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <UserPlus className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Supplier Registration</CardTitle>
                  </div>
                  <CardDescription>How to become an approved vendor</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Complete the Supplier Registration Form available on the Procurement Portal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Submit certified copies of business registration, tax compliance, and bank details.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Suppliers are vetted for financial capability, past performance, and ethical standing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Registration is valid for two years and must be renewed to remain eligible.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Tendering Process */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <ListChecks className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Tendering Process</CardTitle>
                  </div>
                  <CardDescription>Six steps from advertisement to contract</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-sm text-slate-600 dark:text-slate-400 list-decimal list-inside">
                    <li><strong>Advertisement:</strong> Tenders are advertised on the university website, public notice boards, and national dailies.</li>
                    <li><strong>Pre-bid Meeting:</strong> Optional site visits or clarifications are held at least seven days before the submission deadline.</li>
                    <li><strong>Submission:</strong> Bids are submitted in sealed envelopes to the Procurement Office by the stated deadline.</li>
                    <li><strong>Opening:</strong> Tenders are opened publicly in the presence of bidders' representatives who choose to attend.</li>
                    <li><strong>Evaluation:</strong> The Evaluation Committee assesses bids against published criteria; due diligence is conducted on preferred bidders.</li>
                    <li><strong>Award:</strong> The successful bidder is notified, and the contract is signed after any required internal approvals.</li>
                  </ol>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Evaluation Criteria */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Award className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Evaluation Criteria</CardTitle>
                  </div>
                  <CardDescription>How bids are assessed</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Technical compliance:</strong> Responsiveness to specifications, qualifications, and experience.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Financial proposal:</strong> Reasonableness and competitiveness of quoted prices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Past performance:</strong> References, delivery track record, and quality of prior work.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Social criteria:</strong> Preference for local suppliers, youth- and women-owned enterprises, and environmentally responsible practices.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Award & Notification */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Bell className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Award & Notification</CardTitle>
                  </div>
                  <CardDescription>What happens after evaluation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>The successful bidder receives a Letter of Notification of Intent to Award.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>A standstill period of 14 days allows unsuccessful bidders to seek clarification or lodge an appeal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Contracts are signed and performance bonds lodged where required.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>All tender awards are published on the university website in accordance with transparency requirements.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <Separator className="my-12" />

          {/* Past Tenders & Contact */}
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Archive className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Past Tenders Archive</CardTitle>
                  </div>
                  <CardDescription>Historical procurement records</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Completed tender notices and award details are retained for a minimum of seven years as required by law. Researchers, auditors, and the public may request access to tender registers subject to any legally protected commercial confidentiality.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    To request archival tender information, contact the Procurement Directorate with the tender reference number and purpose of your inquiry.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Phone className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Contact Procurement Directorate</CardTitle>
                  </div>
                  <CardDescription>Get in touch with our team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <p className="flex items-start gap-2">
                      <span className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"><Mail className="h-4 w-4" /></span>
                      <span><strong>Email:</strong> procurement@bsu.ac.ke</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span><strong>Phone:</strong> +254 20 123 4575</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"><MapPin className="h-4 w-4" /></span>
                      <span><strong>Office:</strong> Procurement Directorate, Administration Block, Main Campus</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span><strong>Hours:</strong> Monday – Friday, 08:00 AM – 04:00 PM</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
