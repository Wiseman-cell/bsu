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
  BookOpen,
  Microscope,
  Cpu,
  TrendingUp,
  Database,
  Users,
  FileText,
  Megaphone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Journals & Publications | Brooklyn State University",
  description:
    "Explore BSU’s peer-reviewed journals, institutional repository, editorial boards, and submission guidelines. Submit your research today.",
};

const journals = [
  {
    icon: Microscope,
    title: "BSU Journal of Health Sciences",
    scope:
      "Publishes original research, reviews, and case studies in public health, clinical medicine, epidemiology, nursing, and health policy.",
    issn: "ISSN: 2705-XXXX (Print) | 2705-YYYY (Online)",
    editor: "Prof. Grace Wanjiku, Editor-in-Chief",
    frequency: "Biannual",
  },
  {
    icon: Cpu,
    title: "BSU Journal of Computing & AI",
    scope:
      "Covers artificial intelligence, machine learning, software engineering, cybersecurity, data science, and ICT for development.",
    issn: "ISSN: 2710-XXXX (Print) | 2710-YYYY (Online)",
    editor: "Dr. Samuel Kimani, Editor-in-Chief",
    frequency: "Quarterly",
  },
  {
    icon: TrendingUp,
    title: "BSU Review of Business & Leadership",
    scope:
      "Features empirical and conceptual articles on management, entrepreneurship, finance, organisational behaviour, and ethical leadership.",
    issn: "ISSN: 2715-XXXX (Print) | 2715-YYYY (Online)",
    editor: "Prof. Amina Hassan, Editor-in-Chief",
    frequency: "Biannual",
  },
];

const editorialBoard = [
  {
    name: "Prof. Grace Wanjiku",
    role: "Editor-in-Chief, BSU Journal of Health Sciences",
    affiliation: "Brooklyn State University",
  },
  {
    name: "Dr. Samuel Kimani",
    role: "Editor-in-Chief, BSU Journal of Computing & AI",
    affiliation: "Brooklyn State University",
  },
  {
    name: "Prof. Amina Hassan",
    role: "Editor-in-Chief, BSU Review of Business & Leadership",
    affiliation: "Brooklyn State University",
  },
  {
    name: "Prof. John Okello",
    role: "Associate Editor, Health Sciences",
    affiliation: "University of Nairobi",
  },
  {
    name: "Dr. Lisa Müller",
    role: "Associate Editor, Computing & AI",
    affiliation: "Karolinska Institutet, Sweden",
  },
  {
    name: "Prof. Fatima Said",
    role: "Associate Editor, Business & Leadership",
    affiliation: "University of Rwanda",
  },
];

export default function JournalsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-slate-600 text-slate-300">
              Journals & Publications
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Publish With Us
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Brooklyn State University publishes peer-reviewed, open-access
              journals that advance knowledge in health sciences, computing,
              business, and leadership. Explore our titles, editorial boards, and
              submission pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Journals */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <BookOpen className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  BSU Journals
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {journals.map((j) => (
                  <Card
                    key={j.title}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                        <j.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{j.title}</CardTitle>
                      <CardDescription className="text-base">
                        {j.scope}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        {j.issn}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {j.editor}
                      </p>
                      <Badge variant="secondary" className="mt-1">
                        {j.frequency}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Institutional Repository */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Database className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Institutional Repository (BSU-IR)
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                BSU-IR is a digital archive of the University’s intellectual
                output. It houses theses, dissertations, working papers,
                conference proceedings, and datasets. All content is
                open-access and indexed in major scholarly databases.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="#">Visit BSU-IR</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#">Deposit Guidelines</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Editorial Board */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Editorial Board
                </h2>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {editorialBoard.map((member) => (
                  <Card
                    key={member.name}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {member.affiliation}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Submission Guidelines */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Submission Guidelines
                </h2>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Formatting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                      <li>Microsoft Word (.docx) or LaTeX (.tex)</li>
                      <li>A4 page size, 2.5 cm margins</li>
                      <li>Times New Roman 12 pt or equivalent</li>
                      <li>Double-spaced throughout</li>
                      <li>APA 7th edition referencing style</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Ethics & Policies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                      <li>Original work not under review elsewhere</li>
                      <li>Plagiarism screening via Turnitin</li>
                      <li>Ethical clearance for human-subject research</li>
                      <li>Conflict of interest disclosure required</li>
                      <li>Data availability statement encouraged</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link href="#">Full Author Guidelines (PDF)</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#">Manuscript Template</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Call for Papers CTA */}
          <ScrollReveal>
            <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <div className="mb-3 flex items-center gap-2">
                    <Megaphone className="h-6 w-6" />
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      Call for Papers
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Submit Your Research Today
                  </h2>
                  <p className="mt-3 text-slate-300">
                    All three journals are currently accepting submissions for
                    upcoming issues. Early-career researchers are especially
                    encouraged to submit. APC waivers available for authors
                    from low-income institutions.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="shrink-0 bg-white text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <Link href="/contact">
                    Submit Manuscript{" "}
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
