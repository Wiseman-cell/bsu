"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  GraduationCap,
  FlaskConical,
  Globe,
  HeartPulse,
  Users,
  Award,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Building2,
  Microscope,
  Laptop,
  Scale,
  BookOpen,
  HardHat,
  ScrollText,
  CalendarDays,
  Bell,
  Landmark,
  Handshake,
  Quote,
  Star,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Target,
  Sparkles,
  UserCheck,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                  */
/* ------------------------------------------------------------------ */
function useCounter(target: number, duration = 2000) {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const started = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            let start = 0;
            const step = Math.max(1, Math.floor(target / (duration / 16)));
            const timer = setInterval(() => {
              start += step;
              if (start >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(start);
              }
            }, 16);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function CounterStat({
  value,
  suffix,
  label,
  icon: Icon,
}: {
  value: number;
  suffix?: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3">
        <Icon className="h-6 w-6" />
      </div>
      <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">
        {count}
        {suffix || ""}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{label}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Slides                                                       */
/* ------------------------------------------------------------------ */
const slides = [
  {
    headline: "Welcome to Brooklyn State University",
    subtext:
      "A premier institution of higher learning in East Africa, dedicated to academic excellence, pioneering research, and transformative societal impact.",
    cta: "Explore BSU",
    href: "/about",
  },
  {
    headline: "Flagship Program: B.Sc. Lymphology",
    subtext:
      "Pioneering healthcare education with East Africa's first dedicated lymphology degree — addressing critical lymphatic disease challenges across the region.",
    cta: "View Programme",
    href: "/academics/schools",
  },
  {
    headline: "47 County Network + 3 Regional Campuses",
    subtext:
      "Multi-campus excellence spanning Kenya and beyond — Thika, Kigali, Lilongwe, and Mogadishu — bringing quality education closer to communities.",
    cta: "Our Campuses",
    href: "#",
  },
];

/* ------------------------------------------------------------------ */
/*  Academic Schools                                                  */
/* ------------------------------------------------------------------ */
const schools = [
  {
    name: "College of Health Sciences",
    icon: HeartPulse,
    desc: "Flagship lymphology, MBChB, nursing, pharmacy, and public health programmes.",
    flagship: true,
  },
  {
    name: "School of Business, Economics & Leadership",
    icon: Award,
    desc: "Commerce, finance, procurement, hospitality, and executive MBA programmes.",
  },
  {
    name: "School of Computing, Informatics & AI",
    icon: Laptop,
    desc: "Computer science, cybersecurity, data science, and software engineering.",
  },
  {
    name: "School of Law & Governance",
    icon: Scale,
    desc: "Bachelor of Laws (LLB) and legal studies diplomas.",
  },
  {
    name: "School of Education, Humanities & Social Sciences",
    icon: BookOpen,
    desc: "Teacher training, mass communication, and counselling psychology.",
  },
  {
    name: "School of Pure & Applied Sciences",
    icon: Microscope,
    desc: "Chemistry, biochemistry, biotechnology, and actuarial science.",
  },
  {
    name: "School of Engineering & Built Environment",
    icon: HardHat,
    desc: "Civil, electrical, and architectural engineering programmes.",
  },
  {
    name: "School of Postgraduate Studies & Global Research",
    icon: ScrollText,
    desc: "PhD programmes in health sciences, business, and education.",
  },
];

/* ------------------------------------------------------------------ */
/*  News                                                              */
/* ------------------------------------------------------------------ */
const newsItems = [
  {
    category: "Admissions",
    date: "15 Jan 2026",
    headline: "January 2026 Intake Now Open",
    excerpt:
      "Applications are invited for all undergraduate and postgraduate programmes across our 8 academic schools and regional campuses.",
  },
  {
    category: "Research",
    date: "10 Jan 2026",
    headline: "BSU Launches New AI Research Centre",
    excerpt:
      "The School of Computing, Informatics & AI opens a state-of-the-art research centre focused on ethical AI for African development.",
  },
  {
    category: "Global Health",
    date: "05 Jan 2026",
    headline: "Global Health Outreach Expands to Somalia",
    excerpt:
      "Our annual community care programme will now include Mogadishu Campus, bringing free screenings to underserved populations.",
  },
  {
    category: "Partnerships",
    date: "20 Dec 2025",
    headline: "BSU Partners with WHO on Lymphatic Disease Study",
    excerpt:
      "A landmark collaboration to advance lymphatic filariasis research and treatment protocols across East Africa.",
  },
];

/* ------------------------------------------------------------------ */
/*  Notices                                                           */
/* ------------------------------------------------------------------ */
const notices = [
  {
    date: "14 Jan 2026",
    title: "Revised Academic Calendar for 2025/2026 Academic Year",
  },
  {
    date: "12 Jan 2026",
    title: "Hostel Booking for Semester II Now Open",
  },
  {
    date: "08 Jan 2026",
    title: "Staff Professional Development Workshop — Registration Deadline Extended",
  },
  {
    date: "05 Jan 2026",
    title: "Invitation to Tender: Supply of Laboratory Equipment",
  },
];

/* ------------------------------------------------------------------ */
/*  Partners                                                          */
/* ------------------------------------------------------------------ */
const partners = [
  "CUE",
  "HELB",
  "KUCCPS",
  "KENET",
  "WHO",
  "UNESCO",
  "MOH Kenya",
  "Nurses Council",
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                    */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  /* Auto-advance hero */
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="flex flex-col">
      {/* ===================== HERO SLIDER ===================== */}
      <section
        className="relative overflow-hidden bg-slate-950 text-white"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? "opacity-100 relative" : "opacity-0 absolute inset-0"
            }`}
          >
            {/* Aurora animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-slate-900 to-indigo-950 animate-aurora" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-50" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/30 px-3 py-1 text-xs font-medium text-emerald-300 mb-6 border border-emerald-700/30">
                  <Star className="h-3.5 w-3.5" />
                  {idx === 0 && "Premier Institution in East Africa"}
                  {idx === 1 && "Pioneering Healthcare Education"}
                  {idx === 2 && "Multi-Campus Excellence"}
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                  {slide.headline}
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                  {slide.subtext}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href={slide.href}>
                    <Button
                      size="lg"
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/admissions">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentSlide
                  ? "w-8 bg-emerald-500"
                  : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===================== QUICK STATS ===================== */}
      <section className="border-b bg-slate-50 dark:bg-slate-950">
        <ScrollReveal>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <CounterStat value={8} label="Academic Schools" icon={Building2} />
            <CounterStat
              value={15000}
              suffix="+"
              label="Students"
              icon={Users}
            />
            <CounterStat value={47} label="County Hubs" icon={Globe} />
            <CounterStat
              value={4}
              label="Regional Campuses"
              icon={Landmark}
            />
            <CounterStat
              value={27}
              suffix="+"
              label="Degree Programmes"
              icon={GraduationCap}
            />
            <CounterStat
              value={5}
              label="Research Centres"
              icon={FlaskConical}
            />
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===================== WHY CHOOSE BSU ===================== */}
      <section className="py-16">
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <Sparkles className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Why Choose Brooklyn State University?
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A premier institution built on excellence, innovation, and transformative impact across East Africa
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: "Pioneering Medical Education",
                desc: "Home to East Africa's first B.Sc. in Lymphology and cutting-edge healthcare programmes.",
              },
              {
                icon: Target,
                title: "Industry-Aligned Curricula",
                desc: "Every degree is crafted with industry leaders to guarantee professional readiness.",
              },
              {
                icon: ShieldCheck,
                title: "Modern Infrastructure",
                desc: "Digitally-enabled lecture halls, advanced laboratories, and comprehensive libraries.",
              },
              {
                icon: UserCheck,
                title: "Holistic Student Experience",
                desc: "Sports, leadership academies, cultural clubs, and career development services.",
              },
            ].map((feature, idx) => (
              <div
                key={feature.title}
                className="group rounded-xl border bg-white dark:bg-slate-950 p-6 hover:shadow-lg transition-all hover:border-emerald-500/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===================== FLAGSHIP PROGRAM ===================== */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 mb-4">
                <HeartPulse className="h-3.5 w-3.5" />
                Flagship Specialty
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                B.Sc. in Lymphology and Lymphatic Medicine
              </h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                A pioneering undergraduate programme designed to address critical
                regional and global health challenges in lymphatic diseases,
                lymphedema care, and advanced diagnostic evaluation. Graduates are
                equipped for clinical leadership in oncology, rehabilitation, and
                specialized lymphatic surgery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/academics/schools">
                  <Button variant="outline">
                    View Programme Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Apply for This Programme
                  </Button>
                </Link>
              </div>
            </div>
            <Card className="border-emerald-200 dark:border-emerald-900 shadow-lg">
              <CardHeader>
                <CardTitle>Programme Highlights</CardTitle>
                <CardDescription>
                  What makes this degree unique in East Africa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "First dedicated lymphology degree in the region",
                  "Advanced clinical simulation laboratories",
                  "Integrated community health rotations",
                  "Research partnerships with global lymphatic medicine networks",
                  "4-year comprehensive curriculum",
                  "Direct pathway to postgraduate specialization",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===================== ACADEMIC SCHOOLS ===================== */}
      <section className="py-16">
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Academic Schools & Colleges
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Eight comprehensive academic entities driving innovation and excellence
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {schools.map((school) => (
              <Card
                key={school.name}
                className="hover:shadow-lg transition-shadow group relative overflow-hidden"
              >
                {school.flagship && (
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-bl-lg">
                    Flagship
                  </div>
                )}
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-2">
                    <school.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{school.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {school.desc}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                  >
                    Explore Programs
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===================== NEWS & UPDATES ===================== */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Latest News & Updates
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Stay informed about the latest happenings at Brooklyn State University
              </p>
            </div>
            <Link href="#">
              <Button variant="outline">
                Read More News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((news) => (
              <Card key={news.headline} className="hover:shadow-md transition-shadow flex flex-col">
                <CardHeader className="pb-3 flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"
                    >
                      {news.category}
                    </Badge>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {news.date}
                    </span>
                  </div>
                  <CardTitle className="text-base leading-snug">
                    {news.headline}
                  </CardTitle>
                  <CardDescription className="mt-2 line-clamp-3">
                    {news.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===================== NOTICE BOARD ===================== */}
      <section className="py-16">
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Notices & Announcements
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Important updates for students, staff, and stakeholders
              </p>
            </div>
            <Link href="#">
              <Button variant="outline">
                More Notices
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {notices.map((notice) => (
              <Card
                key={notice.title}
                className="hover:shadow-md transition-shadow border-l-4 border-l-emerald-500"
              >
                <CardContent className="flex items-start gap-4 py-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400">
                    <Bell className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {notice.date}
                    </p>
                    <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {notice.title}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===================== GLOBAL HEALTH SPOTLIGHT ===================== */}
      <section className="py-16 bg-emerald-900 text-white">
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4 border border-emerald-700/30">
                <Globe className="h-3.5 w-3.5" />
                Annual August–September Drive
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Global Health Outreach & Community Care
              </h2>
              <p className="text-emerald-100 leading-relaxed mb-6">
                Through our annual Global Health Outreach & Community Care Program,
                BSU provides free specialized medical screenings, early diagnostic
                services, and essential treatments to underserved populations across
                East Africa — from Thika to Kigali, Lilongwe to Mogadishu.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/global-health-outreach">
                  <Button className="bg-white text-emerald-900 hover:bg-emerald-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/admissions">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    Join as Volunteer
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Cervical & Breast Cancer Screening", count: "5,000+" },
                { label: "Lymphedema Patients Treated", count: "2,500+" },
                { label: "Counties Reached in Kenya", count: "47" },
                { label: "Regional Campuses Engaged", count: "4" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg bg-emerald-800/40 p-5 text-center border border-emerald-700/20"
                >
                  <p className="text-2xl font-bold">{item.count}</p>
                  <p className="text-xs text-emerald-200 mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===================== PARTNERSHIPS ===================== */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950">
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Handshake className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Partnerships & Collaborations
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Working with leading institutions to advance education and research
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-6 py-4 min-w-[140px] hover:border-emerald-500/50 hover:shadow-md transition-all"
              >
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wide uppercase">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-16">
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <UserCheck className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Voices from the BSU Community
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Hear from students, faculty, and partners who call Brooklyn State University home
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The B.Sc. Lymphology programme opened doors I never knew existed. Today, I'm leading lymphatic care initiatives across East Africa.",
                name: "Dr. Amina Ochieng",
                role: "Class of 2024, College of Health Sciences",
              },
              {
                quote: "BSU's industry-aligned MBA gave me the tools to launch my own consultancy. The faculty don't just teach — they mentor.",
                name: "James Mutua",
                role: "MBA Graduate, School of Business",
              },
              {
                quote: "As a research partner, BSU's commitment to ethical AI for African development is unmatched. Their facilities are world-class.",
                name: "Prof. Sarah Njoroge",
                role: "Visiting Research Fellow, School of Computing & AI",
              },
            ].map((t, idx) => (
              <Card key={idx} className="border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-emerald-600 mb-3 opacity-40" />
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4 italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="py-16 bg-slate-900 text-white">
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-10 w-10 text-emerald-500 mx-auto mb-6 opacity-60" />
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Our iLEAD Values
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            At Brooklyn State University, we are committed to <strong>Innovation</strong>,{" "}
            <strong>Leadership</strong>, <strong>Excellence</strong>, <strong>Accountability</strong>,
            and <strong>Dedication</strong> — the iLEAD framework that guides every aspect of our
            teaching, research, and community engagement. We believe in transforming lives through
            education and research, one student, one discovery, one community at a time.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["Innovation", "Leadership", "Excellence", "Accountability", "Dedication"].map(
              (value) => (
                <span
                  key={value}
                  className="inline-flex items-center rounded-full bg-emerald-900/40 px-4 py-2 text-sm font-semibold text-emerald-300 border border-emerald-800/50"
                >
                  <Star className="h-3.5 w-3.5 mr-1.5" />
                  {value}
                </span>
              )
            )}
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
