import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Building2,
  Wifi,
  Bus,
  Coffee,
  HeartPulse,
  ShieldCheck,
  BookOpen,
  Printer,
  Briefcase,
  Globe,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "University Services | Brooklyn State University",
  description:
    "Discover the comprehensive services and support systems available to the BSU community — from ICT and health to transport and career services.",
};

const services = [
  {
    icon: Wifi,
    title: "ICT & Digital Services",
    desc: "High-speed campus Wi-Fi, computer labs, software licensing, email accounts, and technical support for all students and staff.",
    highlights: [
      "Campus-wide Wi-Fi coverage",
      "24/7 IT Helpdesk",
      "Microsoft 365 & Google Workspace",
      "Computer labs & printing services",
    ],
    cta: { label: "Visit ICT Helpdesk", href: "/contacts" },
  },
  {
    icon: HeartPulse,
    title: "Health & Wellness Centre",
    desc: "On-campus medical clinic offering outpatient services, first aid, counselling referrals, and wellness programmes.",
    highlights: [
      "Outpatient consultations",
      "Mental health counselling",
      "First aid & emergency response",
      "Wellness & fitness programmes",
    ],
    cta: { label: "Book Appointment", href: "/contacts" },
  },
  {
    icon: Bus,
    title: "Transport Services",
    desc: "Scheduled shuttle services connecting Thika Main Campus to key town centres, hostels, and transport hubs.",
    highlights: [
      "Thika town shuttle routes",
      "Nairobi express service",
      "Airport transfer arrangements",
      "Safe & punctual fleet",
    ],
    cta: { label: "View Timetable", href: "/contacts" },
  },
  {
    icon: Coffee,
    title: "Dining & Catering",
    desc: "Modern cafeterias and food courts offering nutritious, affordable meals with diverse menu options for all dietary preferences.",
    highlights: [
      "Multiple cafeteria outlets",
      "Vegetarian & special diet options",
      "Affordable meal plans",
      "Clean & hygienic facilities",
    ],
    cta: { label: "Explore Dining", href: "/student-life" },
  },
  {
    icon: ShieldCheck,
    title: "Security & Safety",
    desc: "24-hour campus security with CCTV surveillance, access control, emergency response, and safety awareness training.",
    highlights: [
      "24/7 manned security posts",
      "CCTV surveillance network",
      "Emergency hotline (+254 712 345 999)",
      "Safety awareness workshops",
    ],
    cta: { label: "Emergency Contacts", href: "/contacts" },
  },
  {
    icon: BookOpen,
    title: "Library & Learning Support",
    desc: "Physical and digital library resources, research assistance, study spaces, and information literacy training.",
    highlights: [
      "50,000+ physical book collection",
      "E-journals & databases",
      "Quiet study zones & group rooms",
      "Research & citation support",
    ],
    cta: { label: "Visit E-Library", href: "/library" },
  },
  {
    icon: Printer,
    title: "Registry & Academic Records",
    desc: "Student registration, transcript requests, certificate verification, academic letters, and records management.",
    highlights: [
      "Student ID processing",
      "Transcript & letter requests",
      "Certificate verification",
      "Academic calendar queries",
    ],
    cta: { label: "Request Document", href: "/downloads" },
  },
  {
    icon: Briefcase,
    title: "Career & Placement Services",
    desc: "Career counselling, CV clinics, interview coaching, job placement, and employer networking events.",
    highlights: [
      "One-on-one career counselling",
      "CV & cover letter reviews",
      "Mock interview sessions",
      "Annual career fair",
    ],
    cta: { label: "Explore Careers", href: "/jobs" },
  },
  {
    icon: Globe,
    title: "International Student Services",
    desc: "Dedicated support for international students including visa guidance, accommodation, orientation, and cultural integration.",
    highlights: [
      "Visa & immigration guidance",
      "Airport pick-up arrangements",
      "Cultural orientation programmes",
      "Buddy system & mentorship",
    ],
    cta: { label: "International Office", href: "/international-students" },
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Building2 className="h-3.5 w-3.5" />
              University Services
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              University Services
            </h1>
            <p className="text-lg text-slate-300">
              Discover the comprehensive services and support systems available to
              the BSU community — designed to help you thrive academically,
              professionally, and personally.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <ScrollReveal delay={100}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="hover:shadow-lg transition-all group flex flex-col"
                >
                  <CardHeader className="pb-3 flex-1">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3 group-hover:scale-110 transition-transform">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-base">{service.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {service.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={service.cta.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                    >
                      {service.cta.label}
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Quick Info Bar */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/40 border-t">
        <ScrollReveal delay={100}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">9</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Service Departments</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">24/7</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Security & ICT Support</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">5</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Campuses Served</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
