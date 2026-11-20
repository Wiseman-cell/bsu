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
  Newspaper,
  Phone,
  Mail,
  Palette,
  FileText,
  ExternalLink,
  Image,
  Video,
  CalendarDays,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Media Centre | Brooklyn State University",
  description:
    "Access BSU press releases, media contacts, brand guidelines, fact sheets, and photo resources for journalists and content creators.",
};

const pressReleases = [
  {
    title: "BSU Launches Regional Telemedicine Hub in Kigali",
    date: "12 May 2025",
    summary:
      "The new hub will connect rural clinics in East Africa with specialist consultations, reducing referral times by up to 60 percent.",
  },
  {
    title: "University Receives $2.5M Grant for Climate-Health Research",
    date: "3 April 2025",
    summary:
      "Funded by the European Union, the grant supports a five-year study on the intersection of climate change and disease prevalence.",
  },
  {
    title: "BSU Ranked Top 10 in East Africa for Health Sciences",
    date: "18 February 2025",
    summary:
      "The latest regional rankings recognise BSU’s excellence in teaching, research output, and graduate employability in health sciences.",
  },
  {
    title: "Innovation Summit 2025: Call for Abstracts Now Open",
    date: "10 January 2025",
    summary:
      "Researchers and practitioners are invited to submit abstracts for the annual Innovation Summit focusing on digital transformation.",
  },
];

const mediaContacts = [
  {
    name: "Catherine Muthoni",
    role: "Director of Communications",
    phone: "+254 700 123 456",
    email: "press@bsu.ac.ke",
  },
  {
    name: "Dr. Peter Ochieng",
    role: "Research Communications Lead",
    phone: "+254 711 234 567",
    email: "research.comms@bsu.ac.ke",
  },
];

const inTheNews = [
  {
    outlet: "The East African",
    headline: "How BSU is Training the Next Generation of Health Innovators",
    date: "28 April 2025",
  },
  {
    outlet: "Daily Nation",
    headline: "Brooklyn State University Expands Access to STEM Education",
    date: "15 March 2025",
  },
  {
    outlet: "University World News",
    headline: "East African Universities Tackle Climate-Health Nexus",
    date: "2 February 2025",
  },
];

export default function PressPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-slate-600 text-slate-300">
              Press & Media Centre
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              News, Resources, and Contacts
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Welcome to the official Brooklyn State University media centre.
              Find press releases, brand guidelines, fact sheets, and contacts
              for journalists and broadcasters.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Press Releases */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Newspaper className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Press Releases
                </h2>
              </div>
              <div className="mt-8 space-y-4">
                {pressReleases.map((pr) => (
                  <Card
                    key={pr.title}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary">
                          <CalendarDays className="mr-1 inline h-3 w-3" />
                          {pr.date}
                        </Badge>
                      </div>
                      <CardTitle className="mt-2 text-xl">{pr.title}</CardTitle>
                      <CardDescription className="mt-1 text-base">
                        {pr.summary}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Media Contacts */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Media Contacts
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {mediaContacts.map((c) => (
                  <Card
                    key={c.name}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg">{c.name}</CardTitle>
                      <CardDescription>{c.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {c.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          <a
                            href={`mailto:${c.email}`}
                            className="underline underline-offset-4"
                          >
                            {c.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Brand Guidelines + Fact Sheet */}
          <ScrollReveal>
            <div className="mb-16 grid gap-6 lg:grid-cols-2">
              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                    <Palette className="h-5 w-5" />
                  </div>
                  <CardTitle>Brand Guidelines</CardTitle>
                  <CardDescription>
                    Official logos, colour palettes, typography, and usage rules
                    for external partners and media.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      Download Guidelines (PDF){" "}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                    <FileText className="h-5 w-5" />
                  </div>
                  <CardTitle>Fact Sheet</CardTitle>
                  <CardDescription>
                    At-a-glance statistics and verified data about Brooklyn
                    State University.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li><strong>Founded:</strong> 2001</li>
                    <li><strong>Students:</strong> 8,500+ enrolled across all campuses</li>
                    <li><strong>Campuses:</strong> 4 (Nairobi, Kigali, Lilongwe, Mogadishu)</li>
                    <li><strong>Programmes:</strong> 45+ undergraduate and postgraduate</li>
                    <li><strong>Staff:</strong> 620 academic and administrative</li>
                    <li><strong>Alumni:</strong> 18,000+ across 40 countries</li>
                    <li><strong>Accreditation:</strong> CUE (Kenya) and partner-nation regulators</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* In the News */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Newspaper className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  In the News
                </h2>
              </div>
              <div className="mt-8 space-y-4">
                {inTheNews.map((n) => (
                  <Card
                    key={n.headline}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardContent className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {n.outlet}
                        </Badge>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">
                          {n.headline}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {n.date}
                        </p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="#">
                          Read Article{" "}
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Photo & Video Resources */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Image className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Photo & Video Resources
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Registered media outlets may request high-resolution photography,
                B-roll footage, and executive interviews through our Media
                Resource Portal. All assets are provided under embargo
                conditions where applicable.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link href="#">
                    <Image className="mr-2 h-4 w-4" />
                    Photo Gallery
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#">
                    <Video className="mr-2 h-4 w-4" />
                    Video Archive
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
