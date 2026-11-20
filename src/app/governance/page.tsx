import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  ArrowRight,
  Users,
  Crown,
  ShieldCheck,
  Landmark,
  Gavel,
  Target,
  BarChart3,
  ChevronRight,
} from "lucide-react";

const councilMembers = [
  { name: "Prof. Margaret A. Oduor", role: "Chair, Council of Governors", note: "Former Vice-Chancellor, Nairobi University" },
  { name: "Dr. James K. Mwangi", role: "Vice Chair", note: "Corporate governance expert" },
  { name: "Prof. John K. Njoroge", role: "Council Member", note: "Education policy specialist" },
  { name: "Mrs. Esther W. Mutua", role: "Council Member", note: "Legal and human rights advocate" },
  { name: "Dr. Richard Ochieng", role: "Council Member", note: "Health systems financier" },
  { name: "Ms. Angela K. Bett", role: "Council Member", note: "Private sector development" },
  { name: "Mr. Paul M. Korir", role: "Council Member", note: "Infrastructure and estates management" },
  { name: "Rev. Dr. Peter Kimani", role: "Council Member", note: "Community and faith-based liaison" },
];

const managementBoard = [
  { name: "Prof. David K. Musyoka", role: "Vice-Chancellor", icon: Crown, color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400" },
  { name: "Prof. Susan A. Wekesa", role: "Deputy Vice-Chancellor (Academic Affairs)", icon: Users, color: "bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400" },
  { name: "Prof. Michael N. Ouma", role: "Deputy Vice-Chancellor (Administration & Finance)", icon: Landmark, color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400" },
  { name: "Dr. Faith K. Wambui", role: "Deputy Vice-Chancellor (Research & Innovation)", icon: Target, color: "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400" },
  { name: "Mr. Peter K. Njoroge", role: "University Registrar (Academic)", icon: ShieldCheck, color: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400" },
  { name: "Ms. Grace M. Otieno", role: "University Registrar (Administration)", icon: Gavel, color: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300" },
];

const senateFunctions = [
  "Setting academic standards and approving curricula",
  "Regulating teaching, examinations, and admissions",
  "Awarding degrees, diplomas, certificates, and other academic distinctions",
  "Establishing faculties, schools, institutes, and departments",
  "Promoting and directing research within the University",
  "Appointing external examiners and academic auditors",
];

const committees = [
  { name: "Finance & Planning Committee", scope: "Budget oversight, strategic resource allocation, and financial risk management." },
  { name: "Audit & Risk Committee", scope: "Internal audit, compliance monitoring, and enterprise risk governance." },
  { name: "Human Resources Committee", scope: "Staff appointments, promotions, disciplinary processes, and remuneration policy." },
  { name: "Academic Standards Committee", scope: "Quality assurance, curriculum review, and accreditation readiness." },
  { name: "Infrastructure & Development Committee", scope: "Capital projects, estates maintenance, and sustainability planning." },
  { name: "Research & Innovation Committee", scope: "Research policy, IP oversight, and partnership due diligence." },
];

const strategicPillars = [
  {
    title: "Academic Excellence",
    description: "Attain full accreditation for all programmes and launch five new market-responsive degrees by 2030.",
    icon: Target,
    color: "bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400",
  },
  {
    title: "Research Impact",
    description: "Grow annual research funding by 150% and establish two additional Centres of Excellence.",
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
  },
  {
    title: "Digital Transformation",
    description: "Complete campus-wide digital infrastructure upgrade and launch an AI-powered virtual learning environment.",
    icon: Landmark,
    color: "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400",
  },
  {
    title: "Community Engagement",
    description: "Expand outreach clinics, public policy forums, and student volunteer programmes across East Africa.",
    icon: Users,
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
  },
];

export const metadata = {
  title: "Governance | Brooklyn State University",
  description:
    "Learn about the governance structure, leadership, and policies that guide Brooklyn State University.",
};

export default function GovernancePage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-800/40 px-3 py-1 text-xs font-medium text-sky-200 mb-4">
              <Landmark className="h-3.5 w-3.5" />
              University Governance
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Governance & Leadership
            </h1>
            <p className="text-lg text-slate-300">
              Transparent, accountable, and inclusive governance structures that steer Brooklyn State University toward its strategic vision.
            </p>
          </div>
        </div>
      </section>

      {/* Council of Governors */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <Crown className="h-5 w-5 text-amber-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Council of Governors
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                The supreme governing body responsible for setting institutional direction, appointing senior leadership, and safeguarding the University charter.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {councilMembers.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 80}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{member.note}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* University Management Board */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-sky-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  University Management Board
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                The executive team responsible for day-to-day administration, academic planning, and operational excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {managementBoard.map((member, idx) => (
              <ScrollReveal key={member.name} delay={idx * 80}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${member.color} shrink-0`}>
                        <member.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                          {member.name}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{member.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Senate */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <Gavel className="h-5 w-5 text-emerald-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Senate
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                The apex academic governance body responsible for regulating teaching, research, examinations, and the award of qualifications.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Core Functions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {senateFunctions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <ChevronRight className="mt-0.5 h-4 w-4 text-emerald-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Membership</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    The Senate comprises the Vice-Chancellor (Chair), all Deputy Vice-Chancellors, Deans of Schools, Directors of Institutes, Heads of Departments, the University Librarian, elected academic staff representatives, and student representatives.
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Senate meets at least once per semester and may convene extraordinary sessions as required by academic calendar demands or emergent policy matters.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Separator />

      {/* Committee Structure */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="h-5 w-5 text-rose-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Committee Structure
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Specialized committees that support the Council and Senate in oversight, policy formulation, and risk management.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((committee, idx) => (
              <ScrollReveal key={committee.name} delay={idx * 80}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">{committee.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {committee.scope}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Strategic Plan 2025-2030 */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-violet-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Strategic Plan 2025–2030
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Our five-year roadmap for transforming Brooklyn State University into a top-tier regional research and teaching institution.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {strategicPillars.map((pillar, idx) => (
              <ScrollReveal key={pillar.title} delay={idx * 100}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${pillar.color} shrink-0`}>
                        <pillar.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/downloads">
              <Button variant="outline">
                Download Full Strategic Plan (PDF)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
