import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  HeartPulse,
  Briefcase,
  FlaskConical,
  Scale,
  GraduationCap,
  Atom,
  Hammer,
  Award,
} from "lucide-react";

export const metadata = {
  title: "Academics | Brooklyn State University Schools & Colleges",
  description:
    "Explore BSU's 8 academic schools and colleges — from the flagship College of Health Sciences to Business, Computing, Law, Education, Pure Sciences, Engineering, and Postgraduate Studies.",
};

const schools = [
  {
    name: "College of Health & Specialized Medical Sciences",
    slug: "college-of-health-sciences",
    code: "CHSMS",
    icon: HeartPulse,
    description:
      "Home to BSU's flagship healthcare and research programs, including the pioneering B.Sc. in Lymphology and Lymphatic Medicine.",
    flagship: true,
  },
  {
    name: "School of Business, Economics & Leadership",
    slug: "school-of-business-economics-leadership",
    code: "SBEL",
    icon: Briefcase,
    description:
      "Industry-aligned business, finance, and leadership programs designed for next-generation executives.",
    flagship: false,
  },
  {
    name: "School of Computing, Informatics & Artificial Intelligence",
    slug: "school-of-computing-informatics-ai",
    code: "SCIAI",
    icon: FlaskConical,
    description:
      "Cutting-edge computing, cybersecurity, data science, and artificial intelligence education.",
    flagship: false,
  },
  {
    name: "School of Law & Governance",
    slug: "school-of-law-governance",
    code: "SLG",
    icon: Scale,
    description:
      "Rigorous legal education and governance studies anchored on ethical leadership and policy excellence.",
    flagship: false,
  },
  {
    name: "School of Education, Humanities & Social Sciences",
    slug: "school-of-education-humanities-social-sciences",
    code: "SEHSS",
    icon: GraduationCap,
    description:
      "Comprehensive teacher training, humanities, and social sciences for community transformation.",
    flagship: false,
  },
  {
    name: "School of Pure & Applied Sciences",
    slug: "school-of-pure-applied-sciences",
    code: "SPAS",
    icon: Atom,
    description:
      "Research-intensive programs in chemistry, biochemistry, biotechnology, and actuarial science.",
    flagship: false,
  },
  {
    name: "School of Engineering & Built Environment",
    slug: "school-of-engineering-built-environment",
    code: "SEBE",
    icon: Hammer,
    description:
      "Modern engineering and architectural programs addressing infrastructure and spatial design needs.",
    flagship: false,
  },
  {
    name: "School of Postgraduate Studies & Global Research",
    slug: "school-of-postgraduate-studies-global-research",
    code: "SPGR",
    icon: Award,
    description:
      "Doctoral and advanced research programs driving innovation across health, business, and education.",
    flagship: false,
  },
];

export default function AcademicsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Academics
            </h1>
            <p className="text-lg text-slate-300">
              Eight comprehensive academic entities offering degrees, diplomas, and
              certificates aligned with industry demands and global standards.
            </p>
          </div>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schools.map((school) => (
              <Card
                key={school.slug}
                className={`hover:shadow-md transition-shadow ${school.flagship ? "border-emerald-300 dark:border-emerald-800" : ""}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                      <school.icon className="h-5 w-5" />
                    </div>
                    {school.flagship && (
                      <Badge variant="secondary" className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400">
                        Flagship
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-base">{school.name}</CardTitle>
                  <CardDescription>{school.code}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{school.description}</p>
                  <Link href="/academics/schools">
                    <Button variant="ghost" size="sm" className="text-emerald-700 dark:text-emerald-400">
                      Explore Programs
                      <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
