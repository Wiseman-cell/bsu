import type { Metadata } from "next";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Heart,
  Stethoscope,
  Leaf,
  School,
  HandHeart,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility | Brooklyn State University",
  description:
    "Discover how Brooklyn State University advances community health, environmental sustainability, education access, and staff volunteering across East Africa.",
};

const outreachStats = [
  { label: "Free health camps conducted", value: "120+" },
  { label: "Patients screened annually", value: "18,000" },
  { label: "Community health workers trained", value: "850" },
];

const sustainabilityInitiatives = [
  "Solar-powered water heating across all campuses",
  "Comprehensive waste segregation and composting programme",
  "Tree-planting drives with 12,000 indigenous trees planted to date",
  "Car-free campus days and cycling incentive schemes",
  "Paperless administration targets and digital record-keeping",
];

const educationAccess = [
  "Full scholarships for 150 students from underserved communities each year",
  "Digital literacy programmes for rural secondary schools",
  "Free preparatory classes for national university entrance exams",
  "Donated textbooks and laboratory equipment to 45 partner schools",
];

export default function CsrPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-slate-600 text-slate-300">
              Corporate Social Responsibility
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Responsibility Beyond the Classroom
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              At Brooklyn State University, we believe education is inseparable
              from social impact. Our CSR programmes channel institutional
              expertise into healthier communities, greener campuses, and brighter
              futures.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* CSR Philosophy */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Heart className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  CSR Philosophy
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Our CSR strategy rests on three pillars: health equity,
                environmental stewardship, and inclusive education. We do not
                treat these as side projects—they are embedded into curricula,
                research agendas, and daily operations. Every staff member and
                student is encouraged to participate.
              </p>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Community Health Outreach */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Community Health Outreach
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Our mobile health clinics bring screening, vaccination, and health
                education to remote and underserved communities. Staffed by BSU
                faculty and students, these outreach events provide invaluable
                real-world training while closing critical care gaps.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {outreachStats.map((s) => (
                  <Card
                    key={s.label}
                    className="border-slate-200 text-center dark:border-slate-800"
                  >
                    <CardHeader className="pb-2">
                      <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white">
                        {s.value}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {s.label}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Environmental Sustainability */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Leaf className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Environmental Sustainability
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                We are committed to becoming carbon-neutral by 2040. Our Green
                Campus Initiative integrates renewable energy, sustainable
                transport, biodiversity conservation, and green procurement into
                university policy.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sustainabilityInitiatives.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Education Access */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <School className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Education Access
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Talent is universal, but opportunity is not. Through scholarships,
                school partnerships, and digital outreach, we remove financial
                and geographic barriers to higher education.
              </p>
              <div className="mt-8 space-y-3">
                {educationAccess.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-lg border border-slate-200 p-4 dark:border-slate-800"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Staff Volunteer Programme */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <HandHeart className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Staff Volunteer Programme
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Every BSU staff member is entitled to five paid volunteer days
                annually. Staff mentor students in partner schools, participate
                in health camps, and lead environmental clean-up drives. In 2024,
                staff contributed over 4,500 volunteer hours.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link href="#">Volunteer Handbook</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Impact Reports */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Impact Reports
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Transparency matters. Our annual CSR Impact Reports detail
                programme outcomes, beneficiary demographics, and financial
                allocations. They are independently reviewed and published
                openly on our website.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link href="#">Download 2024 Impact Report</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#">Download 2023 Impact Report</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Partnership CTA */}
          <ScrollReveal>
            <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold sm:text-3xl">Partner With Us</h2>
                  <p className="mt-3 text-slate-300">
                    Corporations, foundations, and government agencies can amplify
                    their social impact by partnering with BSU on health,
                    education, and sustainability programmes.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="shrink-0 bg-white text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <Link href="/contact">
                    Become a Partner{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
