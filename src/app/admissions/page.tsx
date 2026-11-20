import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ClipboardList,
  Upload,
  FileCheck,
  GraduationCap,
  BookOpen,
  Award,
  ScrollText,
} from "lucide-react";

export const metadata = {
  title: "Admissions | Brooklyn State University Entry Requirements & How to Apply",
  description:
    "Join the next generation of leaders at BSU. Explore general entry requirements, our 4-step application guide, KUCCPS and self-sponsored pathways, and financial aid options.",
};

const requirements = [
  {
    level: "Undergraduate Degree Programmes",
    grade: "C+ (Plus)",
    detail: "Minimum KCSE Mean Grade of C+ (Plus) or its equivalent with relevant subject clusters.",
    icon: GraduationCap,
  },
  {
    level: "Diploma Programmes",
    grade: "C- (Minus)",
    detail: "Minimum KCSE Mean Grade of C- (Minus) or its equivalent.",
    icon: BookOpen,
  },
  {
    level: "Certificate Programmes",
    grade: "D+ (Plus)",
    detail: "Minimum KCSE Mean Grade of D+ (Plus) or its equivalent.",
    icon: ScrollText,
  },
  {
    level: "Postgraduate Programmes",
    grade: "Upper Second",
    detail: "Relevant Bachelor's degree (Upper Second-Class) for Master's; Relevant Master's degree for Doctorate.",
    icon: Award,
  },
];

const steps = [
  {
    step: 1,
    title: "Select Your Academic Programme",
    description:
      "Explore BSU Schools & Colleges to verify entry requirements and find the programme that aligns with your career goals.",
    icon: ClipboardList,
  },
  {
    step: 2,
    title: "Complete the Online Application",
    description:
      "Submit your details via the BSU Admissions Portal. Ensure all personal and academic information is accurate.",
    icon: Upload,
  },
  {
    step: 3,
    title: "Upload Required Documents",
    description:
      "Attach ID/Passport, Academic Certificates, and Payment Receipt. International applicants should include equivalence certificates.",
    icon: FileCheck,
  },
  {
    step: 4,
    title: "Receive Admission Letter",
    description:
      "Successful applicants receive an official Offer Letter and orientation schedule. Welcome to BSU!",
    icon: GraduationCap,
  },
];

const pathways = [
  {
    name: "KUCCPS Placed",
    description:
      "Students placed by the Kenya Universities and Colleges Central Placement Service (KUCCPS) receive government-subsidized tuition.",
    badge: "Government Sponsored",
    badgeColor:
      "bg-sky-100 text-sky-800 dark:bg-sky-950/30 dark:text-sky-400",
  },
  {
    name: "Self-Sponsored",
    description:
      "Direct admission for students who meet entry requirements and prefer flexible payment plans or private funding.",
    badge: "Private / Parallel",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400",
  },
];

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Admissions & Application Process
            </h1>
            <p className="text-lg text-slate-300">
              Join the Next Generation of Leaders at BSU. Whether you are a high
              school graduate, a transfer student, or a working professional seeking
              advanced postgraduate training, BSU offers clear pathways to help you
              achieve your academic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              General Entry Requirements
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Minimum academic qualifications for admission into BSU programmes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {requirements.map((req) => (
              <Card key={req.level} className="hover:shadow-sm transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-2">
                    <req.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-sm">{req.level}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {req.grade}
                  </Badge>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{req.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              4-Step Application Guide
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Your journey to BSU starts here.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <Card key={s.step} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white text-lg font-bold mb-4">
                      {s.step}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Admission Pathways
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Choose the route that best fits your academic background and financial
              needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {pathways.map((path) => (
              <Card key={path.name} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{path.name}</CardTitle>
                    <Badge className={path.badgeColor}>{path.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {path.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/academics">
              <Button variant="outline">
                Explore Academic Programmes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
