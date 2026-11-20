import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  FileText,
  GraduationCap,
  BookOpen,
  Wallet,
  Users,
  Home,
  Landmark,
  ArrowLeft,
} from "lucide-react";

export const metadata = {
  title: "Forms and Downloads | Brooklyn State University",
  description:
    "Access important forms, documents, and downloadable resources from Brooklyn State University.",
};

export const dynamic = "force-dynamic";

const categoryConfig: Record<
  string,
  { label: string; icon: typeof FileText; color: string }
> = {
  Admissions: {
    label: "Admissions",
    icon: GraduationCap,
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
  },
  Academic: {
    label: "Academic",
    icon: BookOpen,
    color: "bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400",
  },
  Finance: {
    label: "Finance",
    icon: Wallet,
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
  },
  "Student Resources": {
    label: "Student Resources",
    icon: Users,
    color: "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400",
  },
  Accommodation: {
    label: "Accommodation",
    icon: Home,
    color: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400",
  },
  Governance: {
    label: "Governance",
    icon: Landmark,
    color: "bg-slate-50 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
  },
};

function formatFileSize(size?: string | null) {
  if (!size) return null;
  return size;
}

export default async function DownloadsPage() {
  const downloads = await prisma.download.findMany({
    orderBy: { createdAt: "desc" },
  });

  const grouped: Record<string, typeof downloads> = {};
  for (const d of downloads) {
    const cat = d.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(d);
  }

  const categories = Object.keys(grouped).sort(
    (a, b) =>
      Object.keys(categoryConfig).indexOf(a) -
      Object.keys(categoryConfig).indexOf(b)
  );

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-800/40 px-3 py-1 text-xs font-medium text-sky-200 mb-4">
              <Download className="h-3.5 w-3.5" />
              Forms and Downloads
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Forms and Downloads
            </h1>
            <p className="text-lg text-slate-300">
              Access important forms, documents, and downloadable resources for
              students and staff.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {downloads.length === 0 ? (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>No downloads available</CardTitle>
                <CardDescription>
                  Documents will appear here once they are uploaded.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-6 text-center">
                  <Link href="/">
                    <Button variant="outline">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Homepage
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-12">
              {categories.map((cat, idx) => {
                const config = categoryConfig[cat] ?? {
                  label: cat,
                  icon: FileText,
                  color: "bg-slate-50 text-slate-700 dark:bg-slate-900/40 dark:text-slate-300",
                };
                const Icon = config.icon;
                const items = grouped[cat];

                return (
                  <ScrollReveal key={cat} delay={idx * 100}>
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${config.color}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {config.label}
                        </h2>
                        <Badge variant="secondary" className="text-xs">
                          {items.length} file{items.length !== 1 ? "s" : ""}
                        </Badge>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item) => (
                          <Card
                            key={item.id}
                            className="hover:shadow-md transition-shadow flex flex-col"
                          >
                            <CardHeader className="pb-3">
                              <div className="flex items-start gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0">
                                  <FileText className="h-4 w-4" />
                                </div>
                                <div>
                                  <CardTitle className="text-base leading-snug">
                                    {item.title}
                                  </CardTitle>
                                  {item.description && (
                                    <CardDescription className="mt-1 text-xs">
                                      {item.description}
                                    </CardDescription>
                                  )}
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="mt-auto pt-0">
                              <div className="flex items-center justify-between">
                                {formatFileSize(item.fileSize) ? (
                                  <span className="text-xs text-slate-500 dark:text-slate-400">
                                    {formatFileSize(item.fileSize)}
                                  </span>
                                ) : (
                                  <span />
                                )}
                                <a
                                  href={item.fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors"
                                >
                                  <Download className="h-3.5 w-3.5" />
                                  Download
                                </a>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
