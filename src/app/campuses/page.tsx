import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  GraduationCap,
  HeartPulse,
  BookOpen,
  Bus,
  Wifi,
  Landmark,
  Users,
  ArrowRight,
} from "lucide-react";

const campuses = [
  {
    name: "Thika Main Campus",
    location: "Thika, Kiambu County, Kenya",
    type: "Main Campus",
    badgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400",
    description:
      "The flagship campus of Brooklyn State University, hosting the College of Health Sciences, administrative headquarters, and the main teaching hospital complex.",
    facilities: [
      "Advanced Clinical Simulation Laboratories",
      "BSU Teaching Hospital & Referral Centre",
      "Central Library & 24-Hour Reading Rooms",
      "Olympic-Standard Sports Complex",
      "Student Hostels & Dining Halls",
      "Research & Innovation Hub",
    ],
    operations: [
      { label: "Reception", value: "+254 700 000 000" },
      { label: "Admissions", value: "+254 700 000 001" },
      { label: "Email", value: "thika@bsu.ac.ke" },
      { label: "Office Hours", value: "Mon–Fri, 08:00–17:00 EAT" },
    ],
    stats: [
      { label: "Students", value: "8,500+" },
      { label: "Schools", value: "8" },
      { label: "Departments", value: "9" },
      { label: "Programmes", value: "27+" },
    ],
  },
  {
    name: "47 County Satellite Hubs",
    location: "Across all 47 Counties, Kenya",
    type: "County Network",
    badgeColor:
      "bg-sky-100 text-sky-800 dark:bg-sky-950/30 dark:text-sky-400",
    description:
      "A distributed network of distance learning centres, community health outreach stations, and ODeL (Open Distance & E-Learning) satellite campuses ensuring BSU education reaches every corner of Kenya.",
    facilities: [
      "Digital Learning Centres with Video Conferencing",
      "Mobile Health Clinics & Screening Units",
      "Community Library Access Points",
      "ODeL Study Centres with High-Speed Internet",
      "County Examination Administration Offices",
    ],
    operations: [
      { label: "National Coordinator", value: "+254 700 555 555" },
      { label: "ODeL Support", value: "+254 700 666 666" },
      { label: "Email", value: "county-hubs@bsu.ac.ke" },
      { label: "Office Hours", value: "Mon–Sat, 08:00–16:00 EAT" },
    ],
    stats: [
      { label: "Counties", value: "47" },
      { label: "Hubs", value: "120+" },
      { label: "ODeL Students", value: "4,500+" },
      { label: "Health Outreach", value: "Annual" },
    ],
  },
  {
    name: "Kigali Campus",
    location: "Kigali, Rwanda",
    type: "Regional Campus",
    badgeColor:
      "bg-violet-100 text-violet-800 dark:bg-violet-950/30 dark:text-violet-400",
    description:
      "BSU's East African regional hub in Rwanda's capital, specialising in health sciences, business leadership, and governance studies. The campus serves as the primary coordination centre for BSU's Global Health Outreach in the Great Lakes region.",
    facilities: [
      "Regional Centre for Lymphology & Cancer Screening",
      "Executive MBA Lecture Theatres",
      "Governance & Policy Simulation Labs",
      "Student Residences & Cultural Centre",
      "ICT Innovation Lab",
    ],
    operations: [
      { label: "Campus Director", value: "+250 788 000 000" },
      { label: "Admissions", value: "+250 788 000 001" },
      { label: "Email", value: "kigali@bsu.ac.ke" },
      { label: "Office Hours", value: "Mon–Fri, 08:00–17:00 CAT" },
    ],
    stats: [
      { label: "Students", value: "1,200+" },
      { label: "Programmes", value: "12" },
      { label: "Faculty", value: "45" },
      { label: "Research Labs", value: "3" },
    ],
  },
  {
    name: "Lilongwe Campus",
    location: "Lilongwe, Malawi",
    type: "Regional Campus",
    badgeColor:
      "bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400",
    description:
      "Located in Malawi's administrative capital, the Lilongwe Campus focuses on maternal health, education, and community development programmes. It serves as a training ground for health workers deployed across Southern Africa.",
    facilities: [
      "Maternal & Child Health Training Centre",
      "School of Education Satellite Campus",
      "Community Development Field Station",
      "Agricultural Innovation Demonstration Farm",
      "Student Accommodation & Welfare Centre",
    ],
    operations: [
      { label: "Campus Director", value: "+265 888 000 000" },
      { label: "Admissions", value: "+265 888 000 001" },
      { label: "Email", value: "lilongwe@bsu.ac.ke" },
      { label: "Office Hours", value: "Mon–Fri, 08:00–16:00 CAT" },
    ],
    stats: [
      { label: "Students", value: "800+" },
      { label: "Programmes", value: "8" },
      { label: "Faculty", value: "32" },
      { label: "Community Partners", value: "15" },
    ],
  },
  {
    name: "Mogadishu Campus",
    location: "Mogadishu, Somalia",
    type: "Regional Campus",
    badgeColor:
      "bg-rose-100 text-rose-800 dark:bg-rose-950/30 dark:text-rose-400",
    description:
      "BSU's newest regional campus, established to support post-conflict reconstruction through education in health, governance, and engineering. The campus prioritises trauma-informed care training and infrastructure development programmes.",
    facilities: [
      "Trauma & Reconstructive Surgery Training Unit",
      "Governance & Peacebuilding Institute",
      "Civil Engineering & Construction Labs",
      "Community Outreach Coordination Centre",
      "Secure Student Residences",
    ],
    operations: [
      { label: "Campus Director", value: "+252 61 000 0000" },
      { label: "Admissions", value: "+252 61 000 0001" },
      { label: "Email", value: "mogadishu@bsu.ac.ke" },
      { label: "Office Hours", value: "Sun–Thu, 08:00–16:00 EAT" },
    ],
    stats: [
      { label: "Students", value: "600+" },
      { label: "Programmes", value: "6" },
      { label: "Faculty", value: "28" },
      { label: "NGO Partners", value: "10" },
    ],
  },
];

const campusIcons: Record<string, typeof Building2> = {
  "Thika Main Campus": Building2,
  "47 County Satellite Hubs": Bus,
  "Kigali Campus": Landmark,
  "Lilongwe Campus": HeartPulse,
  "Mogadishu Campus": GraduationCap,
};

export const metadata = {
  title: "Multi-Campus Network | Brooklyn State University Campuses",
  description:
    "Explore BSU's multi-campus network: Thika Main Campus, 47 Kenyan County Hubs, Kigali (Rwanda), Lilongwe (Malawi), and Mogadishu (Somalia).",
};

export default function CampusesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <MapPin className="h-3.5 w-3.5" />
              Multi-Campus Network
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Our Campuses & Regional Hubs
            </h1>
            <p className="text-lg text-slate-300">
              From Thika to Kigali, Lilongwe to Mogadishu — Brooklyn State
              University spans East Africa with a mission to bring world-class
              education and health services to every community.
            </p>
          </div>
        </div>
      </section>

      {/* Campuses */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {campuses.map((campus, index) => {
              const Icon = campusIcons[campus.name] || Building2;
              const isEven = index % 2 === 0;
              return (
                <div key={campus.name}>
                  <Card className="overflow-hidden">
                    <div className="grid lg:grid-cols-3">
                      {/* Info */}
                      <div
                        className={`p-6 lg:p-8 ${isEven ? "lg:col-span-2" : "lg:col-span-2 lg:order-2"}`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                              {campus.name}
                            </h2>
                            <div className="flex items-center gap-2 mt-1">
                              <MapPin className="h-3.5 w-3.5 text-slate-400" />
                              <span className="text-sm text-slate-500">{campus.location}</span>
                            </div>
                          </div>
                          <Badge className={campus.badgeColor}>{campus.type}</Badge>
                        </div>

                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                          {campus.description}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                              Key Facilities
                            </h3>
                            <ul className="space-y-2">
                              {campus.facilities.map((f) => (
                                <li
                                  key={f}
                                  className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                                >
                                  <Building2 className="mt-0.5 h-3.5 w-3.5 text-emerald-500 shrink-0" />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                              Contact & Operations
                            </h3>
                            <ul className="space-y-2">
                              {campus.operations.map((op) => (
                                <li
                                  key={op.label}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  {op.label === "Reception" || op.label === "Campus Director" || op.label === "National Coordinator" ? (
                                    <Phone className="mt-0.5 h-3.5 w-3.5 text-slate-400 shrink-0" />
                                  ) : op.label === "Email" ? (
                                    <Mail className="mt-0.5 h-3.5 w-3.5 text-slate-400 shrink-0" />
                                  ) : (
                                    <Clock className="mt-0.5 h-3.5 w-3.5 text-slate-400 shrink-0" />
                                  )}
                                  <div>
                                    <span className="text-slate-500">{op.label}: </span>
                                    <span className="text-slate-900 dark:text-slate-100 font-medium">{op.value}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div
                        className={`bg-slate-50 dark:bg-slate-900/40 p-6 lg:p-8 ${isEven ? "" : "lg:order-1"}`}
                      >
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4">
                          Campus at a Glance
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          {campus.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="rounded-lg bg-white dark:bg-slate-800 p-4 text-center"
                            >
                              <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                              <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 space-y-2">
                          <Button variant="outline" size="sm" className="w-full">
                            <Phone className="mr-2 h-3.5 w-3.5" /> Contact Campus
                          </Button>
                          <Button variant="ghost" size="sm" className="w-full">
                            <ArrowRight className="mr-2 h-3.5 w-3.5" /> Virtual Tour
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {index < campuses.length - 1 && <Separator className="my-8" />}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
