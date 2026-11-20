import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Shield, Database, Eye, Share2, UserCheck, Lock, Cookie, Mail } from "lucide-react";

export const metadata = {
  title: "Data Protection & Privacy | Brooklyn State University",
  description:
    "Learn how Brooklyn State University protects your personal data and complies with data protection regulations.",
};

export default function DataProtectionPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Shield className="h-3.5 w-3.5" />
              Data Protection & Privacy
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Data Protection & Privacy
            </h1>
            <p className="text-lg text-slate-300">
              Our commitment to safeguarding personal information and ensuring transparency in data handling practices.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid gap-8 md:grid-cols-2">
            {/* Data Protection Policy */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Shield className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Data Protection Policy</CardTitle>
                  </div>
                  <CardDescription>Framework for handling personal data</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Brooklyn State University is committed to complying with the Data Protection Act and all applicable privacy regulations. We collect, process, and store personal data lawfully, fairly, and transparently, ensuring that individuals' rights are respected at all times.
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Data is collected only for specified, explicit, and legitimate purposes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Personal data is kept accurate, up-to-date, and retained no longer than necessary.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Appropriate technical and organisational measures protect data against unauthorised access, loss, or destruction.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Student Data We Collect */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Database className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Student Data We Collect</CardTitle>
                  </div>
                  <CardDescription>Categories of information we hold</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Identity data:</strong> Full name, date of birth, national ID or passport number, photograph, and gender.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Contact data:</strong> Postal address, phone number, email address, and emergency contact details.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Academic data:</strong> Programme of study, course registrations, examination results, transcripts, and awards.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Financial data:</strong> Fee payment records, scholarship details, and bursary information.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Health data:</strong> Medical history and special needs information provided for support services.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* How We Use Your Data */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Eye className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">How We Use Your Data</CardTitle>
                  </div>
                  <CardDescription>Purposes of data processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Administration of admissions, registration, examinations, and graduation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Communication regarding academic schedules, fee deadlines, university events, and emergencies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Provision of student support services, including counselling, career guidance, and disability support.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Compilation of anonymised statistical reports for planning, accreditation, and government reporting.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Data Sharing & Third Parties */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Share2 className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Data Sharing & Third Parties</CardTitle>
                  </div>
                  <CardDescription>When and with whom we share information</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>We share academic records with the Commission for University Education (CUE) and the Ministry of Education for regulatory compliance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Verification of qualifications is provided to employers and institutions upon formal request, with student consent where required.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Service providers (e.g., ICT contractors, cloud storage providers) access data only under strict confidentiality agreements.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>We do not sell personal data to third parties for marketing purposes under any circumstances.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <Separator className="my-12" />

          {/* Your Rights, Data Security, Cookie Policy */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Your Rights */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <UserCheck className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Your Rights</CardTitle>
                  </div>
                  <CardDescription>How you can control your data</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Access:</strong> Request a copy of the personal data we hold about you.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Erasure:</strong> Request deletion of your data where there is no compelling reason for continued processing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Restriction:</strong> Request restriction of processing in specific circumstances.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Objection:</strong> Object to processing for direct marketing or legitimate interest grounds.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Data Security Measures */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Lock className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Data Security Measures</CardTitle>
                  </div>
                  <CardDescription>How we keep your information safe</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>End-to-end encryption for all data transmitted via the student portal and university website.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Role-based access controls ensure staff access only the data necessary for their duties.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Regular security audits and vulnerability assessments of university systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Mandatory data protection training for all staff handling personal information.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Incident response protocols and breach notification procedures are in place.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Cookie Policy */}
            <ScrollReveal delay={200}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Cookie className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Cookie Policy</CardTitle>
                  </div>
                  <CardDescription>How we use cookies and tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Essential cookies:</strong> Required for the website to function, such as login sessions and security tokens.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website to improve user experience.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Preference cookies:</strong> Remember your settings and choices, such as language or accessibility options.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>You can manage cookie preferences via your browser settings at any time.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <Separator className="my-12" />

          {/* Contact DPO */}
          <ScrollReveal>
            <div className="rounded-xl bg-slate-900 text-white p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-emerald-400" />
                    <h2 className="text-xl font-bold">Data Protection Officer</h2>
                  </div>
                  <p className="text-sm text-slate-300">
                    For questions, concerns, or to exercise your data protection rights, please contact the Data Protection Officer.
                  </p>
                </div>
                <div className="shrink-0 rounded-lg bg-emerald-700/30 px-5 py-3 text-center">
                  <p className="text-sm font-medium text-emerald-200">dpo@bsu.ac.ke</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
