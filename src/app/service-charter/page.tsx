import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { FileText, Clock, MessageSquare, ClipboardCheck, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Service Charter | Brooklyn State University",
  description:
    "Read the Brooklyn State University Service Charter outlining our service standards and commitments.",
};

const serviceStandards = [
  {
    unit: "Admissions Office",
    commitment: "Process all complete applications within 14 working days of receipt.",
    icon: ClipboardCheck,
  },
  {
    unit: "Finance Directorate",
    commitment: "Respond to all student finance queries within 48 hours during business days.",
    icon: Clock,
  },
  {
    unit: "ICT Directorate",
    commitment: "Resolve all reported technical faults within 24 hours; escalate complex issues within 4 hours.",
    icon: TrendingUp,
  },
  {
    unit: "Academic Registry",
    commitment: "Issue academic certificates and transcripts within 30 days of formal request.",
    icon: FileText,
  },
];

const timelineRows = [
  { service: "Undergraduate Admission Decision", timeline: "14 days", responsible: "Admissions Office" },
  { service: "Postgraduate Admission Decision", timeline: "21 days", responsible: "School Graduate Committee" },
  { service: "Fee Statement Issuance", timeline: "Same day", responsible: "Finance Office" },
  { service: "Transcript Request", timeline: "7 days", responsible: "Academic Registry" },
  { service: "Certificate Collection", timeline: "30 days", responsible: "Academic Registry" },
  { service: "ICT Support Ticket", timeline: "24 hours", responsible: "ICT Helpdesk" },
  { service: "Student ID Replacement", timeline: "3 days", responsible: "Registry / ICT" },
  { service: "Complaint Acknowledgement", timeline: "5 days", responsible: "Dean of Students" },
];

export default function ServiceCharterPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <FileText className="h-3.5 w-3.5" />
              Service Charter
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Service Charter
            </h1>
            <p className="text-lg text-slate-300">
              Our pledge to deliver efficient, courteous, and transparent services to all members of the BSU community.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Our Commitment */}
          <ScrollReveal>
            <Card className="mb-12 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                    <FileText className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Our Commitment to Service</CardTitle>
                </div>
                <CardDescription>The principles that guide our service delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Brooklyn State University is committed to providing quality, timely, and professional services to all its stakeholders — students, staff, alumni, partners, and the general public. This Service Charter sets out the standards we strive to meet and the mechanisms through which we seek continuous improvement.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Courtesy</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">We treat every client with respect, dignity, and professionalism at all times.</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Transparency</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Our processes, requirements, and timelines are clearly communicated and publicly available.</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Responsiveness</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">We acknowledge enquiries promptly and resolve issues within the stated timeframes.</p>
                  </div>
                  <div className="rounded-lg border p-4">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">Accountability</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">We take ownership of our commitments and welcome feedback on our performance.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Service Standards */}
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Service Standards</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {serviceStandards.map((std) => {
                  const Icon = std.icon;
                  return (
                    <Card key={std.unit} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-3">
                        <div className="flex items-center gap-3 mb-1">
                          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                            <Icon className="h-5 w-5" />
                          </div>
                          <CardTitle className="text-base">{std.unit}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{std.commitment}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Service Delivery Timeline Table */}
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Service Delivery Timeline</h2>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 dark:bg-slate-900">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Service</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Timeline</th>
                      <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Responsible Unit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {timelineRows.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                        <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.service}</td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                            {row.timeline}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{row.responsible}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Client Feedback & Complaints */}
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Client Feedback Channels</CardTitle>
                  </div>
                  <CardDescription>We want to hear from you</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Online feedback form available on the Customer Feedback page.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Email: quality@bsu.ac.ke</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Suggestion boxes at all major service points across campuses.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Annual Stakeholder Satisfaction Survey conducted each May.</span>
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
                      <ClipboardCheck className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Complaints Handling Procedure</CardTitle>
                  </div>
                  <CardDescription>How we address service failures</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Step 1:</strong> Lodge your complaint in writing or via email to the relevant directorate head.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Step 2:</strong> An acknowledgement is issued within 5 working days.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Step 3:</strong> Investigation and resolution within 21 working days.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>Step 4:</strong> If dissatisfied, escalate to the Quality Assurance Directorate for review.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
