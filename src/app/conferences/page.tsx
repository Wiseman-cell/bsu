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
  CalendarDays,
  Microscope,
  Lightbulb,
  GraduationCap,
  History,
  FileText,
  Building2,
  BedDouble,
  ArrowRight,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conferences & Events | Brooklyn State University",
  description:
    "Discover upcoming and past conferences hosted by Brooklyn State University. Explore call for papers, venue hire, and delegate accommodation.",
};

const upcomingConferences = [
  {
    icon: Microscope,
    title: "International Research Conference on Lymphatic Medicine",
    date: "12–14 November 2025",
    location: "Main Campus, Nairobi",
    theme:
      "Emerging Frontiers in Lymphatic Filariasis Elimination and Morbidity Management",
    description:
      "Bringing together researchers, clinicians, and policymakers from Africa, Asia, and the Americas to share evidence on lymphatic disease control strategies.",
  },
  {
    icon: Lightbulb,
    title: "BSU Innovation Summit 2026",
    date: "18–20 February 2026",
    location: "Kigali Campus",
    theme: "Digital Transformation for Inclusive Development",
    description:
      "A multidisciplinary forum exploring AI, fintech, agritech, and health informatics with keynote speakers from industry and academia.",
  },
  {
    icon: GraduationCap,
    title: "East African Education Forum",
    date: "5–7 June 2026",
    location: "Lilongwe Campus",
    theme: "Reimagining Higher Education in a Changing Climate",
    description:
      "Vice-chancellors, regulators, and student leaders discuss curriculum reform, quality assurance, and sustainable campus operations.",
  },
];

const pastConferences = [
  {
    title: "BSU Health Sciences Symposium 2024",
    date: "September 2024",
    location: "Nairobi",
    outcome:
      "Published proceedings in the BSU Journal of Health Sciences; 3 policy briefs adopted by the Ministry of Health.",
  },
  {
    title: "Women in STEM Leadership Conference",
    date: "March 2024",
    location: "Kigali",
    outcome:
      "Launched the BSU Women in STEM mentorship programme now serving 200+ students.",
  },
  {
    title: "African Higher Education Data Governance Summit",
    date: "November 2023",
    location: "Nairobi",
    outcome:
      "Established the East African Institutional Repository Consortium (EA-IRC).",
  },
];

export default function ConferencesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-slate-600 text-slate-300">
              Conferences & Events
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Where Ideas Meet Action
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Brooklyn State University hosts and co-hosts international
              conferences that bridge research, policy, and practice. Explore
              upcoming events, past highlights, and opportunities to present.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Upcoming Conferences */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Upcoming Conferences
                </h2>
              </div>
              <div className="mt-8 grid gap-6">
                {upcomingConferences.map((conf) => (
                  <Card
                    key={conf.title}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                        <conf.icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{conf.date}</Badge>
                        <Badge variant="outline">
                          <MapPin className="mr-1 inline h-3 w-3" />
                          {conf.location}
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 text-xl">{conf.title}</CardTitle>
                      <CardDescription className="text-base">
                        {conf.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        Theme: {conf.theme}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Button size="sm" asChild>
                          <Link href="/contact">Register Interest</Link>
                        </Button>
                        <Button size="sm" variant="outline" asChild>
                          <Link href="#">Conference Website</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Past Conferences */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <History className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Past Conferences
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {pastConferences.map((pc) => (
                  <Card
                    key={pc.title}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{pc.date}</Badge>
                        <Badge variant="outline">{pc.location}</Badge>
                      </div>
                      <CardTitle className="mt-2 text-lg">{pc.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {pc.outcome}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Call for Papers / Abstracts */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <FileText className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Call for Papers / Abstracts
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                We invite researchers, practitioners, and policymakers to submit
                abstracts and full papers for presentation at upcoming BSU
                conferences. Selected papers will be considered for publication
                in BSU peer-reviewed journals or conference proceedings.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Abstract Submission</CardTitle>
                    <CardDescription>
                      300-word abstracts due 60 days before the conference.
                      Submit via the conference portal.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" asChild>
                      <Link href="/contact">Submit Abstract</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Full Paper Submission</CardTitle>
                    <CardDescription>
                      Full papers (5,000–7,000 words) undergo double-blind peer
                      review. Guidelines available on each conference site.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="#">Author Guidelines</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Conference Facilities & Venue Hire */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Conference Facilities & Venue Hire
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Our modern campuses offer versatile event spaces equipped with
                audiovisual technology, high-speed internet, breakout rooms,
                and catering services. Ideal for academic conferences,
                corporate retreats, and training workshops.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Main Auditorium</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Capacity: 800 | Theatre-style seating, stage, dual
                      projection, simultaneous translation booth.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Executive Boardrooms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Capacity: 20–40 | Video conferencing, whiteboards, and
                      private dining options.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Exhibition Halls</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Capacity: 200+ booth spaces | Ideal for poster sessions,
                      trade shows, and product launches.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link href="/contact">Request Venue Hire Quote</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Accommodation for Delegates */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <BedDouble className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Accommodation for Delegates
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Delegates attending BSU conferences benefit from negotiated
                rates at partner hotels and on-campus guest houses. Shuttle
                services between accommodation and venues are provided during
                major events.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">On-Campus Guest House</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      En-suite rooms with Wi-Fi, breakfast included, and
                      24-hour security. Walking distance to all conference
                      venues.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Partner Hotels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Three- to five-star hotels within 15 minutes of campus.
                      Special conference rates available upon registration.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Plan Your Conference With Us
                  </h2>
                  <p className="mt-3 text-slate-300">
                    From abstract submission to delegate logistics, our
                    Conferences Office supports every stage of event planning.
                    Get in touch to discuss your needs.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="shrink-0 bg-white text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <Link href="/contact">
                    Contact Conferences Office{" "}
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
