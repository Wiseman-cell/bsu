import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Users,
  Lightbulb,
  Globe,
  Briefcase,
  Church,
  UserCheck,
  GraduationCap,
  Target,
  HeartPulse,
  HeartHandshake,
  MessageCircleHeart,
  UtensilsCrossed,
  Coffee,
  Bus,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Campus Life & Student Experience | Brooklyn State University",
  description:
    "Experience vibrant campus life at BSU — student governance, clubs & societies, career services, health & wellness, dining, transport, and more.",
};

export default function StudentLifePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Users className="h-3.5 w-3.5" />
              Campus Life & Student Experience
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Campus Life & Student Experience
            </h1>
            <p className="text-lg text-slate-300">
              A thriving community where learning extends beyond the classroom through
              clubs, events, peer engagement, and holistic support services.
            </p>
          </div>
        </div>
      </section>

      {/* Student Governance & Clubs */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Student Governance & Clubs
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                BSU empowers students to lead, collaborate, and shape campus culture
                through representative bodies and vibrant clubs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3">
                    <UserCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Student Governance (BSUSA)</CardTitle>
                  <CardDescription>Elected representation for all students</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The Brooklyn State University Students&apos; Association (BSUSA) is the official
                    student governing body that advocates for student rights, organises forums,
                    and liaises with university administration on policy matters affecting campus life.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400 mb-3">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Innovation Clubs</CardTitle>
                  <CardDescription>Entrepreneurship, tech & research</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    From hackathons to startup incubators, innovation clubs provide hands-on
                    experience in coding, robotics, product design, and venture creation with
                    mentorship from industry experts.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 mb-3">
                    <Globe className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Cultural Societies</CardTitle>
                  <CardDescription>Celebrating diversity & heritage</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Cultural clubs celebrate the rich tapestry of Kenyan and international
                    heritage through music, dance, drama, fashion shows, and cultural exchange
                    weeks that foster mutual respect and understanding.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 mb-3">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Professional Societies</CardTitle>
                  <CardDescription>Career-focused networks</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Faculty-based professional societies connect students with alumni,
                    industry bodies, and certification pathways in fields such as healthcare,
                    law, engineering, business, and education.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400 mb-3">
                    <Church className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Religious Fellowships</CardTitle>
                  <CardDescription>Faith-based student groups</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Christian Union, Catholic Action, Muslim Student Association, and other
                    faith groups provide spiritual nourishment, peer fellowship, and community
                    service opportunities for students of all denominations.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400 mb-3">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Leadership & Mentorship</CardTitle>
                  <CardDescription>Building tomorrow&apos;s leaders</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Structured mentorship programmes pair junior students with senior peers
                    and faculty, while leadership academies offer training in public speaking,
                    governance, conflict resolution, and project management.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Separator />

      {/* Support Services */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Student Support Services
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                Comprehensive services designed to support your academic success, personal
                growth, and overall well-being throughout your BSU journey.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 shrink-0">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Career Services
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        The Career Services Centre offers CV workshops, mock interviews,
                        employer networking events, internship placement support, and graduate
                        job fairs to prepare students for competitive local and global markets.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 shrink-0">
                      <HeartPulse className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Health & Wellness Centre
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Our on-campus health facility provides primary medical care, wellness
                        screenings, first-aid response, and health education programmes to keep
                        the student community healthy and resilient.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-50 text-pink-700 dark:bg-pink-950/30 dark:text-pink-400 shrink-0">
                      <MessageCircleHeart className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Counselling Services
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Licensed counsellors offer confidential individual and group sessions
                        addressing stress management, academic anxiety, relationship issues,
                        trauma support, and personal development in a safe, judgement-free space.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400 shrink-0">
                      <UtensilsCrossed className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Dining & Cafeterias
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        Multiple campus cafeterias serve nutritious, affordable meals with
                        diverse menus catering to various dietary preferences. Hygienic food
                        preparation and comfortable dining spaces make meal times a social highlight.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={100}>
            <div className="mt-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-400 shrink-0">
                      <Bus className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Transport Services
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        BSU operates scheduled shuttle services connecting the main campus to
                        key hostels, town centres, and transport hubs. Safe, reliable, and
                        cost-effective, these services ensure students commute with ease and punctuality.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <HeartHandshake className="h-8 w-8 mx-auto text-emerald-600 mb-4" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Be Part of the BSU Community
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
                Whether you are passionate about student governance, cultural expression,
                professional networking, or community service, there is a place for you at BSU.
              </p>
              <Link href="/contacts">
                <Button variant="outline">
                  Contact Student Affairs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
