import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  UserCog,
  HeartHandshake,
  ShieldCheck,
  Vote,
  Banknote,
  Accessibility,
  Umbrella,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Dean of Student Affairs | Brooklyn State University",
  description:
    "Learn about the BSU Dean of Students Affairs office — student welfare, discipline, governance, financial aid, special needs support, and contact information.",
};

export default function DsaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <UserCog className="h-3.5 w-3.5" />
              Dean of Student Affairs
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Dean of Student Affairs
            </h1>
            <p className="text-lg text-slate-300">
              Dedicated to student welfare, discipline, co-curricular activities, and
              holistic development.
            </p>
          </div>
        </div>
      </section>

      {/* Office of the Dean */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Office of the Dean
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The Office of the Dean of Students Affairs (DSA) is the central hub for all
                non-academic student matters at Brooklyn State University. The Dean serves as
                the chief advocate for student welfare, ensuring that every learner enjoys a
                safe, inclusive, and enriching campus experience.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                The office oversees student governance, residences, counselling, health services,
                disciplinary procedures, financial aid, and special needs support. By collaborating
                with academic faculties, administrative departments, and external stakeholders,
                the DSA fosters an environment where students thrive intellectually, socially,
                and emotionally.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Student Welfare & Support</CardTitle>
                  <CardDescription>Comprehensive care for all students</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The welfare desk addresses accommodation concerns, food services, transport
                    issues, and personal emergencies. Students facing hardship can access
                    emergency assistance and referrals to appropriate support channels.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400 mb-3">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Discipline & Conflict Resolution</CardTitle>
                  <CardDescription>Fair, restorative processes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The DSA administers the student code of conduct with fairness and transparency.
                    Minor infractions are addressed through peer mediation and counselling, while
                    serious cases follow due process with representation and appeal rights.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 mb-3">
                    <Vote className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Student Governance & Elections</CardTitle>
                  <CardDescription>Democratic student representation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The DSA supervises BSUSA elections, verifies candidate eligibility, and ensures
                    free and fair voting. The office also mentors student leaders and facilitates
                    regular forums between student representatives and university management.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400 mb-3">
                    <Banknote className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Financial Aid & Bursaries</CardTitle>
                  <CardDescription>Making education accessible</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Need-based bursaries, work-study placements, and emergency tuition support
                    are administered through the DSA. Applications are assessed confidentially,
                    and recipients receive ongoing mentorship to ensure academic success.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400 mb-3">
                    <Accessibility className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Special Needs Support</CardTitle>
                  <CardDescription>Inclusive, barrier-free campus</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Students with disabilities receive personalised support including assistive
                    technology, note-taking services, accessible transport, and liaison with
                    academic staff for reasonable accommodation in examinations and coursework.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 mb-3">
                    <Umbrella className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Student Insurance</CardTitle>
                  <CardDescription>Health & accident cover</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    All registered students are covered by a group medical and accident insurance
                    policy. The DSA handles claims, coordinates with providers, and educates
                    students on coverage benefits and claim procedures.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Separator />

      {/* Contact */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Contact the Dean&apos;s Office
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                Reach out for appointments, inquiries, or support requests. Walk-ins are welcome
                during office hours, though booking ahead is recommended.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Location</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Administration Block, Ground Floor<br />
                        Thika Main Campus
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Office Hours</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Monday – Friday<br />
                        8:00 AM – 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Phone</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        +254 700 123 456<br />
                        +254 733 987 654
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">Email</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        dean.students@bsu.ac.ke<br />
                        welfare@bsu.ac.ke
                      </p>
                    </div>
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
