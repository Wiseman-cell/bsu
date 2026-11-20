import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  ArrowRight,
  GraduationCap,
  Building2,
  UserCircle,
  MonitorSmartphone,
  Megaphone,
  Users,
  ClipboardCheck,
  Scale,
  Package,
  Home,
} from "lucide-react";

const directorates = [
  {
    name: "Directorate of Academic Affairs",
    icon: GraduationCap,
    color: "bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400",
    description:
      "Oversees curriculum development, academic scheduling, faculty affairs, student records, and quality assurance across all schools and departments.",
  },
  {
    name: "Directorate of Administration & Finance",
    icon: Building2,
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
    description:
      "Manages institutional budgeting, financial reporting, payroll, procurement oversight, and general administrative services.",
  },
  {
    name: "Directorate of Student Affairs",
    icon: UserCircle,
    color: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400",
    description:
      "Coordinates student welfare, counselling, accommodation, career services, extracurricular programmes, and student governance support.",
  },
  {
    name: "Directorate of ICT & Digital Services",
    icon: MonitorSmartphone,
    color: "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400",
    description:
      "Provides campus-wide technology infrastructure, learning management systems, cybersecurity, data management, and digital innovation support.",
  },
  {
    name: "Directorate of Marketing & Communications",
    icon: Megaphone,
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
    description:
      "Leads brand management, public relations, digital marketing, media engagement, alumni communications, and institutional events.",
  },
  {
    name: "Directorate of Human Resource Management",
    icon: Users,
    color: "bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400",
    description:
      "Handles recruitment, staff development, performance management, labour relations, succession planning, and employee wellness programmes.",
  },
  {
    name: "Directorate of Quality Assurance",
    icon: ClipboardCheck,
    color: "bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
    description:
      "Ensures compliance with national accreditation standards, coordinates institutional audits, and drives continuous improvement across academic and administrative units.",
  },
  {
    name: "Directorate of Legal Services",
    icon: Scale,
    color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400",
    description:
      "Provides legal counsel on contracts, regulatory compliance, intellectual property, dispute resolution, and policy drafting.",
  },
  {
    name: "Directorate of Procurement & Logistics",
    icon: Package,
    color: "bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400",
    description:
      "Manages end-to-end procurement processes, vendor relationships, supply chain logistics, asset management, and inventory control.",
  },
  {
    name: "Directorate of Estates & Facilities",
    icon: Home,
    color: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-400",
    description:
      "Oversees campus infrastructure, building maintenance, groundskeeping, utilities, security, and sustainable environmental management.",
  },
];

export const metadata = {
  title: "Directorates & Administrative Units | Brooklyn State University",
  description:
    "Explore the directorates and administrative units that drive operations at Brooklyn State University.",
};

export default function DirectoratesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-800/40 px-3 py-1 text-xs font-medium text-cyan-200 mb-4">
              <Building2 className="h-3.5 w-3.5" />
              Administrative Units
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Directorates & Administrative Units
            </h1>
            <p className="text-lg text-slate-300">
              The operational backbone of Brooklyn State University — dedicated teams ensuring excellence in service delivery, infrastructure, and institutional support.
            </p>
          </div>
        </div>
      </section>

      {/* Directorates Grid */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Our Directorates
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Ten specialized directorates working together to advance the University's mission and serve our students, staff, and partners.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directorates.map((directorate, idx) => (
              <ScrollReveal key={directorate.name} delay={idx * 80}>
                <Card className="hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg ${directorate.color} shrink-0`}
                      >
                        <directorate.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                          {directorate.name}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {directorate.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
