import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GraduationCap, ClipboardCheck, Banknote, CalendarDays, Users, FileCheck, Mic } from "lucide-react";

export const metadata = {
  title: "Graduation & Congregation | Brooklyn State University",
  description:
    "Information about graduation ceremonies, requirements, and celebrations at Brooklyn State University.",
};

export default function GraduationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <GraduationCap className="h-3.5 w-3.5" />
              Graduation & Congregation
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Graduation & Congregation
            </h1>
            <p className="text-lg text-slate-300">
              Celebrate your achievement. Everything you need to know about graduation requirements, ceremonies, and life beyond BSU.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* 2026 Ceremony Banner */}
          <ScrollReveal>
            <div className="mb-12 rounded-xl bg-emerald-700 text-white p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold mb-1">Next Graduation Ceremony</h2>
                  <p className="text-emerald-100">Saturday, 14 March 2026 — Main Campus Graduation Grounds</p>
                </div>
                <Link href="#ceremony-schedule">
                  <Button variant="secondary" className="shrink-0">
                    View Schedule
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Graduation Requirements */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <ClipboardCheck className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Graduation Requirements</CardTitle>
                  </div>
                  <CardDescription>What you need to qualify</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Completion of all prescribed programme courses with a minimum cumulative GPA of 2.0 (undergraduate) or 3.0 (postgraduate).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Settlement of all financial obligations to the university, including tuition, library fines, and hostel fees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Submission of the final research project or dissertation, where applicable, and clearance from the School Graduate Committee.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Library clearance confirming return of all borrowed materials and settlement of any outstanding dues.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Application for Graduation */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Application for Graduation</CardTitle>
                  </div>
                  <CardDescription>How to apply and key deadlines</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Eligible students must submit the online Graduation Application Form via the student portal by 31 January 2026.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>A non-refundable graduation application fee of KES 3,000 must be paid and the receipt uploaded with the application.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>The Graduation List is published on the university website and notice boards by 15 February 2026.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Students whose names are omitted must appeal to the Registrar within seven days of publication.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Graduation Fees & Gown Hire */}
            <ScrollReveal delay={200}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Banknote className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Graduation Fees & Gown Hire</CardTitle>
                  </div>
                  <CardDescription>Costs and gown collection</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>The graduation fee covers the ceremony, certificate, and official transcript. Details are communicated upon application.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Academic gowns are hired through the official vendor and must be collected from the Gown Hire Centre between 9 and 13 March 2026.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>A refundable gown deposit of KES 5,000 is required; gowns must be returned within 48 hours of the ceremony.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Additional guest tickets may be purchased at KES 500 per person, subject to venue capacity limits.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Ceremony Schedule */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow" id="ceremony-schedule">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Ceremony Schedule</CardTitle>
                  </div>
                  <CardDescription>Annual March ceremony programme</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>08:00 AM</strong> — Graduands assemble at the Graduation Tent for final verification and gown inspection.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>09:30 AM</strong> — Academic Procession enters the pavilion, led by the University Marshal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>10:00 AM</strong> — Congregation is declared open by the Vice Chancellor, followed by the National Anthem.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>11:30 AM</strong> — Presentation of graduands by Deans; conferment of degrees by the Chancellor.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>01:00 PM</strong> — Convocation address by the Guest Speaker, followed by the closing procession.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Alumni Transition */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Users className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Alumni Transition</CardTitle>
                  </div>
                  <CardDescription>From student to alumnus</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Upon graduation, students are automatically enrolled as lifetime members of the BSU Alumni Association.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>The Alumni Office hosts an annual Transition Workshop in February to prepare finalists for career and professional life.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Alumni enjoy continued access to the university library, career services, and exclusive networking events.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Update your contact details via the Alumni Portal to stay connected with classmates and receive university updates.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Transcript & Certificate Collection */}
            <ScrollReveal delay={200}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <FileCheck className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Transcript & Certificate Collection</CardTitle>
                  </div>
                  <CardDescription>Official documents after graduation</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Official transcripts are available for collection from the Examinations Office within 30 days of the ceremony.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Graduation certificates are issued in person at the ceremony; replacements require a formal application and affidavit.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Certified academic transcripts for employment or further study can be requested via the student portal at no charge for the first three copies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Verification services for employers and institutions are handled directly by the Academic Registrar.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Convocation Speakers */}
          <Separator className="my-12" />

          <ScrollReveal>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                    <Mic className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Convocation Speakers</CardTitle>
                </div>
                <CardDescription>Distinguished guests who have addressed our graduands</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">2026 Speaker</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">To be announced</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">14 March 2026</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Prof. Amina Ochieng</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Former Cabinet Secretary, Ministry of Education</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">15 March 2025</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Dr. James Muriuki</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">CEO, Kenya Industrial Estates</p>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">16 March 2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link href="/contacts">
                <Button variant="outline" size="lg">
                  Contact the Graduation Office
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
