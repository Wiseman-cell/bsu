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
  Users,
  Heart,
  Globe,
  CalendarDays,
  Mail,
  ArrowRight,
  MapPin,
  BookOpen,
  Briefcase,
  Network,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Alumni Relations | Brooklyn State University",
  description:
    "Stay connected with Brooklyn State University. Explore alumni benefits, chapters, events, giving opportunities, and distinguished alumni profiles.",
};

const benefits = [
  {
    icon: Briefcase,
    title: "Career Support",
    description:
      "Access lifelong career counselling, job boards, CV reviews, and mentorship programmes exclusive to BSU graduates.",
  },
  {
    icon: Network,
    title: "Networking Events",
    description:
      "Join regional meetups, industry-specific roundtables, and the annual Alumni Homecoming Gala.",
  },
  {
    icon: BookOpen,
    title: "Library Access",
    description:
      "Retain borrowing rights at the main campus library and remote access to subscribed journals and e-resources.",
  },
];

const chapters = [
  { region: "Nairobi Chapter", location: "Nairobi, Kenya" },
  { region: "Kigali Chapter", location: "Kigali, Rwanda" },
  { region: "Lilongwe Chapter", location: "Lilongwe, Malawi" },
  { region: "Mogadishu Chapter", location: "Mogadishu, Somalia" },
  { region: "Diaspora Chapter", location: "North America & Europe" },
];

const distinguishedAlumni = [
  {
    initials: "DM",
    name: "Dr. Diana Mwangi",
    cohort: "Class of 2012",
    achievement:
      "Director of Public Health Policy at the Ministry of Health, leading national immunisation strategy.",
  },
  {
    initials: "JK",
    name: "James Kipchirchir",
    cohort: "Class of 2009",
    achievement:
      "Founder of HealthTech Africa, a digital health startup serving 2 million patients across East Africa.",
  },
  {
    initials: "AN",
    name: "Prof. Amina Nasser",
    cohort: "Class of 2005",
    achievement:
      "Renowned epidemiologist and WHO consultant specialising in tropical disease control.",
  },
  {
    initials: "EO",
    name: "Eng. Omar Farah",
    cohort: "Class of 2015",
    achievement:
      "Chief ICT Officer at a leading East African university consortium, driving EdTech transformation.",
  },
];

const events = [
  {
    title: "Annual Alumni Homecoming Gala",
    date: "15 November 2025",
    location: "Main Campus, Nairobi",
  },
  {
    title: "Global Health Leadership Forum",
    date: "3–5 March 2026",
    location: "Kigali Campus",
  },
  {
    title: "Diaspora Virtual Networking Night",
    date: "22 July 2025",
    location: "Online",
  },
];

export default function AlumniPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="mb-4 border-slate-600 text-slate-300"
            >
              Alumni Relations
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Once a BSU Eagle, Always a BSU Eagle
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Our alumni network spans continents, professions, and generations.
              Reconnect, grow, and give back through the Brooklyn State
              University Alumni Association.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Alumni Association */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Alumni Association
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                The BSU Alumni Association is the official body representing over
                18,000 graduates across 40 countries. Membership is free and
                automatic upon graduation. The Association advocates for alumni
                interests, organises professional development, and strengthens
                bonds between graduates and the University.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">Join the Network</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#">Alumni Portal</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Benefits & Services */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Benefits & Services
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

          {/* Giving & Philanthropy */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Heart className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Giving & Philanthropy
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Your generosity funds scholarships, research, and infrastructure.
                Whether through one-time gifts, recurring donations, or legacy
                giving, every contribution transforms lives. Last year, alumni
                giving supported 340 need-based scholarships and equipped two new
                science laboratories.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">Make a Gift</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#">Giving FAQ</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Alumni Chapters */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Alumni Chapters
                </h2>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {chapters.map((c) => (
                  <Card
                    key={c.region}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardContent className="flex items-start gap-4 pt-6">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                      <div>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {c.region}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {c.location}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Distinguished Alumni */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Distinguished Alumni
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {distinguishedAlumni.map((a) => (
                  <Card
                    key={a.initials}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader className="items-center text-center">
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-xl font-bold text-white">
                        {a.initials}
                      </div>
                      <CardTitle className="text-lg">{a.name}</CardTitle>
                      <CardDescription>{a.cohort}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                        {a.achievement}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Alumni Events */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Alumni Events
                </h2>
              </div>
              <div className="mt-8 space-y-4">
                {events.map((e) => (
                  <Card
                    key={e.title}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardContent className="flex flex-col justify-between gap-4 py-6 sm:flex-row sm:items-center">
                      <div>
                        <p className="text-lg font-semibold text-slate-900 dark:text-white">
                          {e.title}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400">
                          {e.location}
                        </p>
                      </div>
                      <Badge variant="secondary">{e.date}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Update Your Details CTA */}
          <ScrollReveal>
            <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Keep Your Details Updated
                  </h2>
                  <p className="mt-3 text-slate-300">
                    Moved? Changed jobs? We want to stay in touch. Updating your
                    contact information ensures you never miss an event, job
                    opportunity, or alumni magazine.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="shrink-0 bg-white text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <Link href="/contact">
                    Update Details <ArrowRight className="ml-2 h-4 w-4" />
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
