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
  Globe,
  ClipboardList,
  Plane,
  Home,
  Coins,
  PartyPopper,
  HeartHandshake,
  MapPin,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "International Students | Brooklyn State University",
  description:
    "Join a global community at BSU. Discover application guidance, visa support, accommodation, tuition details, and regional campuses for international students.",
};

const whyBSU = [
  "Internationally accredited programmes aligned with global standards",
  "English-medium instruction with academic language support",
  "Affordable tuition compared to Western institutions without compromising quality",
  "Diverse student body representing over 35 countries",
  "Strong focus on health sciences, computing, and business leadership",
  "Regional campuses providing localised support and cultural familiarity",
];

const applicationSteps = [
  "Submit online application with certified academic transcripts",
  "Provide proof of English proficiency (IELTS, TOEFL, or equivalent)",
  "Receive provisional offer letter within 10 working days",
  "Pay acceptance fee and confirm enrollment",
  "Receive official admission letter for visa processing",
  "Apply for student pass/visa through the University sponsor letter",
];

const supportServices = [
  {
    icon: HeartHandshake,
    title: "International Student Advisers",
    description:
      "Dedicated advisers for immigration, academic, and personal wellbeing support throughout your studies.",
  },
  {
    icon: ClipboardList,
    title: "Academic Writing Centre",
    description:
      "Free workshops and one-to-one sessions on academic writing, referencing, and research methodology.",
  },
  {
    icon: PartyPopper,
    title: "Buddy Programme",
    description:
      "Be paired with a current student mentor who helps you navigate campus life and settle into your new city.",
  },
];

const campuses = [
  {
    city: "Kigali",
    country: "Rwanda",
    programmes: "Public Health, ICT, Business Administration",
    note: "East Africa hub with access to regional health networks",
  },
  {
    city: "Lilongwe",
    country: "Malawi",
    programmes: "Health Sciences, Education, Agriculture",
    note: "Strong partnerships with Ministry of Health and local NGOs",
  },
  {
    city: "Mogadishu",
    country: "Somalia",
    programmes: "Nursing, Public Health, Computer Science",
    note: "Rebuilding focus with community-centred research programmes",
  },
];

export default function InternationalStudentsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 border-slate-600 text-slate-300">
              International Students Office
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Your Global Journey Starts Here
            </h1>
            <p className="mt-6 text-lg text-slate-300">
              Brooklyn State University welcomes students from across the world.
              We offer dedicated support, regional campuses, and programmes that
              prepare you for an international career.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Why Study at BSU */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Why Study at BSU
                </h2>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {whyBSU.map((item) => (
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

          {/* Application Process */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Application Process for International Students
                </h2>
              </div>
              <div className="mt-8 space-y-4">
                {applicationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-lg border border-slate-200 p-4 dark:border-slate-800"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <p className="pt-0.5 text-slate-700 dark:text-slate-300">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/contact">Start Your Application</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#">Download Guide (PDF)</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Visa & Immigration */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Plane className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Visa & Immigration Guidance
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Our International Office assists you from initial visa advice to
                post-arrival compliance. We provide official sponsorship letters,
                guide you through student pass requirements, and maintain
                relationships with immigration authorities to ensure a smooth
                transition.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Document Checklist</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-400">
                      <li>Valid passport (minimum 6 months)</li>
                      <li>Official admission letter</li>
                      <li>Proof of tuition payment or scholarship</li>
                      <li>Medical examination certificate</li>
                      <li>Police clearance certificate</li>
                      <li>Passport-size photographs</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Pre-Arrival Briefing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      All admitted international students are invited to a virtual
                      pre-arrival briefing covering immigration procedures,
                      airport pickup, accommodation check-in, and cultural
                      orientation. Briefings are held monthly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Accommodation */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Home className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Accommodation for International Students
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                We offer safe, affordable housing options both on and off campus.
                All residences are within walking distance or a short shuttle ride
                to academic buildings, libraries, and dining facilities.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">On-Campus Halls</CardTitle>
                    <CardDescription>
                      Furnished single and shared rooms with Wi-Fi, laundry, and
                      24/7 security.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Off-Campus Residences</CardTitle>
                    <CardDescription>
                      Vetted private apartments and homestays arranged through the
                      University housing office.
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Family Housing</CardTitle>
                    <CardDescription>
                      Limited two-bedroom units available for postgraduate
                      students with dependents.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Tuition & Living Costs */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <Coins className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Tuition & Living Costs
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Undergraduate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      $2,800 – $3,500
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Per academic year depending on programme
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Postgraduate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      $3,200 – $4,500
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Per academic year depending on programme
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-slate-200 dark:border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg">Estimated Living</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      $400 – $600
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Per month including accommodation, meals, and transport
                    </p>
                  </CardContent>
                </Card>
              </div>
              <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                Scholarships and instalment plans are available for eligible
                international applicants. Contact the International Office for a
                personalised cost estimate.
              </p>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Orientation Programme */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <PartyPopper className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Orientation Programme
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Our comprehensive two-week orientation introduces you to academic
                life, campus facilities, local culture, and essential services.
                Activities include campus tours, library inductions, registration
                support, social events, and sessions on staying healthy and safe.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link href="#">Orientation Schedule</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Student Support Services */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Student Support Services
                </h2>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {supportServices.map((s) => (
                  <Card
                    key={s.title}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-xl">{s.title}</CardTitle>
                      <CardDescription className="text-base">
                        {s.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <Separator className="my-12" />

          {/* Regional Campus Options */}
          <ScrollReveal>
            <div className="mb-16">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Regional Campus Options
                </h2>
              </div>
              <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">
                Study closer to home while earning a BSU degree. Our regional
                campuses offer the same academic rigour with culturally attuned
                support.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {campuses.map((c) => (
                  <Card
                    key={c.city}
                    className="border-slate-200 dark:border-slate-800"
                  >
                    <CardHeader>
                      <Badge variant="outline" className="mb-2 w-fit">
                        {c.country}
                      </Badge>
                      <CardTitle className="text-xl">{c.city} Campus</CardTitle>
                      <CardDescription>{c.programmes}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {c.note}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="rounded-2xl bg-slate-900 p-8 text-white sm:p-12">
              <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Ready to Apply?
                  </h2>
                  <p className="mt-3 text-slate-300">
                    Our International Office is here to guide you every step of
                    the way. Reach out with your questions or begin your
                    application today.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="shrink-0 bg-white text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
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
