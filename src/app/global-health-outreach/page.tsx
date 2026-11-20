import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Globe,
  MapPin,
  Calendar,
  Users,
  HeartPulse,
  Activity,
  Baby,
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Global Health Outreach | Brooklyn State University August–September Program",
  description:
    "BSU's annual Global Health Outreach & Community Care Program provides free specialized medical screenings, cancer screenings, lymphedema care, and maternal health across 47 Kenyan counties and regional campuses.",
};

const services = [
  {
    title: "Specialized Cervical & Breast Cancer Screening",
    description:
      "VIA/VILI, HPV DNA testing, digital colposcopy, and immediate cryotherapy/thermal ablation.",
    icon: HeartPulse,
  },
  {
    title: "Lymphology & Lymphedema Care",
    description:
      "Diagnostic evaluation, complex decongestive therapy (CDT), and patient management education.",
    icon: Activity,
  },
  {
    title: "General Medical & Chronic Disease Management",
    description:
      "Screening and management for hypertension, diabetes, and infectious diseases.",
    icon: Activity,
  },
  {
    title: "Maternal, Child & Reproductive Health",
    description:
      "Antenatal checkups, nutritional assessments, and pediatric care.",
    icon: Baby,
  },
];

const campuses = [
  { name: "Kenya (47 Counties)", detail: "Thika Main Campus & County Satellite Hubs", icon: MapPin },
  { name: "Rwanda", detail: "Kigali Campus Outreach Center", icon: Globe },
  { name: "Malawi", detail: "Lilongwe Campus Health Unit", icon: Globe },
  { name: "Somalia", detail: "Mogadishu Campus Community Outreach", icon: Globe },
];

export default async function GlobalHealthOutreachPage() {
  const outreachRecords = await prisma.globalHealthOutreach.findMany({
    where: { campaignYear: 2026 },
    orderBy: { startDate: "asc" },
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Calendar className="h-3.5 w-3.5" />
              Annual August–September Drive
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Global Health Outreach & Community Care Program
            </h1>
            <p className="text-lg text-emerald-100">
              At Brooklyn State University (BSU), our commitment to health goes
              beyond classrooms and laboratories. Through our annual Global Health
              Outreach & Community Care Program held throughout August and
              September, BSU provides free specialized medical screenings, early
              diagnostic services, and essential treatments to underserved
              populations across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Core Medical & Surgical Services Provided
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-sm transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-2">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-sm">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach Footprint */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Multi-Campus Regional Outreach Footprint
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {campuses.map((campus) => (
              <Card key={campus.name} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 shrink-0">
                      <campus.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-slate-100 text-sm">{campus.name}</p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{campus.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Active 2026 Campaigns */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Active 2026 Campaigns
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Planned outreach activities for the August–September 2026 cycle.
            </p>
          </div>

          <div className="space-y-4">
            {outreachRecords.map((record) => (
              <Card key={record.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          variant="secondary"
                          className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400 text-[10px]"
                        >
                          {record.location.replace("_", " ")}
                        </Badge>
                        <span className="text-xs text-slate-500">
                          {record.campaignYear}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">{record.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{record.description}</p>
                    </div>
                    <div className="flex items-center gap-6 shrink-0">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-slate-400" />
                        <div className="text-xs">
                          <p className="text-slate-500">Start</p>
                          <p className="font-medium text-slate-900 dark:text-slate-100">
                            {record.startDate.toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-slate-400" />
                        <div className="text-xs">
                          <p className="text-slate-500">Target</p>
                          <p className="font-medium text-slate-900 dark:text-slate-100">{record.targetCases.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
