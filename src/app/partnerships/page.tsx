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
  GraduationCap,
  Factory,
  Landmark,
  Microscope,
  Handshake,
  ArrowRight,
  Globe,
  BookOpen,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partnerships & Collaborations | Brooklyn State University",
  description:
    "Explore BSU's academic, industry, government, and research partnerships. Learn how to collaborate with us for mutual impact.",
};

const academicPartners = [
  "University of Nairobi, Kenya",
  "Makerere University, Uganda",
  "University of Rwanda",
  "University of Cape Town, South Africa",
  "University of Manchester, UK",
  "Karolinska Institutet, Sweden",
];

const industryPartners = [
  "Safaricom Health",
  "AstraZeneca East Africa",
  "Andela",
  "Kenya Power",
  "PharmAccess Foundation",
  "Cisco Networking Academy",
];

const governmentNgo = [
  { name: "CUE", label: "Commission for University Education" },
  { name: "HELB", label: "Higher Education Loans Board" },
  { name: "KUCCPS", label: "Kenya Universities and Colleges Central Placement Service" },
  { name: "KENET", label: "Kenya Education Network" },
  { name: "WHO", label: "World Health Organization" },
  { name: "UNESCO", label: "United Nations Educational, Scientific and Cultural Organization" },
  { name: "MOH Kenya", label: "Ministry of Health, Kenya" },
];

const researchCollabs = [
  {
    title: "East African Health Informatics Network",
    description:
      "A multi-institution consortium building interoperable health data systems across Kenya, Rwanda, Uganda, and Tanzania.",
  },
  {
    title: "Climate Resilience in Higher Education",
    description:
      "Joint research with Manchester University on adapting curricula and campus infrastructure to climate change.",
  },
  {
    title: "Digital Skills for Youth Employment",
    description:
      "Partnership with Cisco and Andela to deliver industry-aligned ICT training and certification programmes.",
  },
];

const partnershipBenefits = [
  {
    icon: BookOpen,
    title: "Joint Programmes",
    description:
      "Develop dual-degree and exchange pathways that expand academic offerings and student mobility.",
  },
  {
    icon: Microscope,
    title: "Shared Research Infrastructure",
    description:
      "Access laboratories, field sites, datasets, and funding streams through collaborative grant applications.",
  },
  {
    icon: Users,
    title: "Talent Pipeline",
    description:
      "Recruit from a pool of work-ready graduates through internships, capstone projects, and direct placements.",
  },
];

export default function PartnershipsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-slate-600 text-slate-300">
              Partnerships & Collaborations
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Stronger Together
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              We believe progress is collective. Our partnerships span
              continents, sectors, and disciplines—uniting academia, industry,
              government, and civil society to solve complex challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Academic Partners */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Academic Partners
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                We maintain formal exchange, dual-degree, and research agreements
                with leading universities worldwide. These partnerships enrich
                our curricula, open student mobility pathways, and strengthen
                faculty development.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {academicPartners.map((p) => (
                  <Badge
                    key={p}
                    variant="outline"
                    className="px-4 py-2 text-base dark:border-slate-700"
                  >
                    {p}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Industry Partners */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Factory className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Industry Partners
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Industry collaborations ensure our programmes remain relevant,
                our students graduate work-ready, and our research addresses
                real market needs.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {industryPartners.map((p) => (
                  <Badge
                    key={p}
                    variant="secondary"
                    className="px-4 py-2 text-base"
                  >
                    {p}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Government & NGO Partners */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Landmark className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Government & NGO Partners
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Strategic alliances with regulators, funding bodies, and multilateral
                agencies enable policy alignment, resource mobilisation, and
                large-scale programme implementation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {governmentNgo.map((p) => (
                  <Badge
                    key={p.name}
                    variant="outline"
                    className="px-4 py-2 text-base dark:border-slate-700"
                    title={p.label}
                  >
                    {p.name}
                  </Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Research Collaborations */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Microscope className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Research Collaborations
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {researchCollabs.map((r) => (
                  <Card
                    key={r.title}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{r.title}</CardTitle>
                      <CardDescription className="text-base">
                        {r.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Partnership Benefits */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Handshake className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Partnership Benefits
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {partnershipBenefits.map((b) => (
                  <Card
                    key={b.title}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                        <b.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{b.title}</CardTitle>
                      <CardDescription className="text-base">
                        {b.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* How to Partner CTA */}
          <ScrollReveal>
            <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    How to Partner With BSU
                  </h2>
                  <p className="mt-3 text-slate-300">
                    Whether you represent a university, corporation, government
                    agency, or NGO, we welcome conversations on collaboration.
                    Our Partnerships Office will guide you from initial inquiry
                    to signed agreement.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="shrink-0 bg-white text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <Link href="/contact">
                    Start a Conversation{" "}
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
