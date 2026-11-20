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
  Building2,
  Briefcase,
  Clock,
  CalendarClock,
  MapPin,
  HeartPulse,
  Landmark,
  GraduationCap,
  ArrowRight,
  Send,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers & Vacancies | Brooklyn State University",
  description:
    "Explore current job openings at Brooklyn State University. Join a vibrant academic community with competitive benefits and professional development opportunities.",
};

const openings = [
  {
    title: "Senior Lecturer – Public Health",
    department: "School of Health Sciences",
    type: "Full-time",
    deadline: "30 June 2025",
    location: "Main Campus, Nairobi",
    description:
      "Lead postgraduate teaching and research in epidemiology and health policy. PhD in Public Health and 5+ years of university teaching required.",
  },
  {
    title: "Registrar – Academic Affairs",
    department: "Registry",
    type: "Full-time",
    deadline: "15 July 2025",
    location: "Main Campus, Nairobi",
    description:
      "Oversee student records, examination scheduling, and academic policy implementation. Master’s degree and 7+ years in higher education administration.",
  },
  {
    title: "Systems Administrator (ICT)",
    department: "Information Technology Services",
    type: "Full-time",
    deadline: "10 July 2025",
    location: "Main Campus, Nairobi",
    description:
      "Manage campus network infrastructure, cloud services, and cybersecurity protocols. Bachelor’s in Computer Science or related field with relevant certifications.",
  },
  {
    title: "Research Assistant – Climate & Health",
    department: "Research & Innovation Directorate",
    type: "Part-time",
    deadline: "5 July 2025",
    location: "Kigali Campus",
    description:
      "Support data collection, analysis, and manuscript preparation for an EU-funded climate-health research project. Master’s student or recent graduate preferred.",
  },
];

const benefits = [
  {
    icon: HeartPulse,
    title: "Medical Cover",
    description:
      "Comprehensive health insurance for employees and eligible dependents, including inpatient, outpatient, and optical cover.",
  },
  {
    icon: Landmark,
    title: "Pension Scheme",
    description:
      "Mandatory employer-matched pension contributions ensuring long-term financial security for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description:
      "Annual study leave, conference attendance allowances, and tuition waivers for staff pursuing further qualifications at BSU.",
  },
];

export default function JobsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-slate-600 text-slate-300">
              Careers & Vacancies
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Work at Brooklyn State University
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Join a mission-driven institution shaping the next generation of
              leaders in health, technology, and business. We value excellence,
              equity, and continuous growth.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Working at BSU */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Working at BSU
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Brooklyn State University is more than a workplace—it is a
                community of scholars, professionals, and changemakers. Our staff
                and faculty enjoy a collaborative environment, modern facilities,
                and the satisfaction of contributing to societal transformation
                through education and research.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Mission-Driven Culture</CardTitle>
                    <CardDescription>
                      Every role supports our commitment to accessible, quality
                      higher education.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Diverse Workforce</CardTitle>
                    <CardDescription>
                      We recruit from across the globe and celebrate varied
                      perspectives and backgrounds.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Work–Life Balance</CardTitle>
                    <CardDescription>
                      Flexible arrangements, generous leave, and family-friendly
                      policies for all staff categories.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Current Openings */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Current Openings
                </h2>
              </div>
              <div className="mt-8 grid gap-6">
                {openings.map((job) => (
                  <Card
                    key={job.title}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{job.type}</Badge>
                        <Badge variant="outline">{job.department}</Badge>
                      </div>
                      <CardTitle className="mt-2 text-xl">{job.title}</CardTitle>
                      <CardDescription className="mt-1 text-base">
                        {job.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarClock className="h-4 w-4" />
                          Deadline: {job.deadline}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Application Process */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Application Process
                </h2>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      1
                    </div>
                    <CardTitle className="text-lg">Review</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Read the job description and person specification
                      carefully before applying.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      2
                    </div>
                    <CardTitle className="text-lg">Prepare</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Update your CV, write a tailored cover letter, and gather
                      certified academic certificates.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      3
                    </div>
                    <CardTitle className="text-lg">Submit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Send your complete application to careers@bsu.ac.ke with
                      the job title as the subject line.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-2">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      4
                    </div>
                    <CardTitle className="text-lg">Interview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Shortlisted candidates are invited for panel interviews,
                      presentations, or skills assessments.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Employee Benefits */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Employee Benefits
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((b) => (
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

          {/* How to Apply CTA */}
          <ScrollReveal>
            <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold sm:text-3xl">How to Apply</h2>
                  <p className="mt-3 text-slate-300">
                    Submit your application via email or through our online
                    portal. Only shortlisted candidates will be contacted. Ensure
                    your documents are complete and submitted before the stated
                    deadline.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="shrink-0 bg-white text-slate-900 hover:bg-slate-100"
                    asChild
                  >
                    <Link href="/contact">
                      Apply Now <Send className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="shrink-0 border-slate-600 text-white hover:bg-slate-800"
                    asChild
                  >
                    <Link href="#">
                      Download Forms <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
