import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { HeartPulse, Clock, BookOpen } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Course Catalog | Brooklyn State University Schools & Programmes",
  description:
    "Browse the complete BSU academic catalog: 8 schools, departments, and programmes including the flagship B.Sc. in Lymphology and Lymphatic Medicine.",
};

export default async function SchoolsCatalogPage() {
  const schools = await prisma.school.findMany({
    include: {
      departments: {
        include: {
          programmes: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Schools & Programmes
            </h1>
            <p className="text-lg text-slate-300">
              Explore our complete academic catalog across 8 schools, featuring
              undergraduate, postgraduate, diploma, and doctoral programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {schools.map((school) => {
              const hasFlagship = school.departments.some((d) =>
                d.programmes.some((p) => p.isFlagship)
              );
              return (
                <div key={school.id}>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {school.name}
                    </h2>
                    {hasFlagship && (
                      <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400">
                        <HeartPulse className="h-3 w-3 mr-1" /> Flagship School
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 max-w-3xl">
                    {school.description}
                  </p>

                  <div className="space-y-6">
                    {school.departments.map((dept) => (
                      <div key={dept.id}>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                          {dept.name}
                        </h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {dept.programmes.map((prog) => (
                            <Card
                              key={prog.id}
                              className={`hover:shadow-sm transition-shadow ${prog.isFlagship ? "border-emerald-300 dark:border-emerald-800 ring-1 ring-emerald-100 dark:ring-emerald-900/30" : ""}`}
                            >
                              <CardHeader className="pb-2">
                                <div className="flex items-start justify-between gap-2">
                                  <CardTitle className="text-sm">
                                    {prog.title}
                                  </CardTitle>
                                  {prog.isFlagship && (
                                    <Badge
                                      variant="secondary"
                                      className="shrink-0 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400 text-[10px]"
                                    >
                                      Flagship
                                    </Badge>
                                  )}
                                </div>
                                <CardDescription className="flex items-center gap-3 text-xs mt-1">
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {prog.durationYears} year
                                    {prog.durationYears > 1 ? "s" : ""}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <BookOpen className="h-3 w-3" />
                                    {prog.level.toLowerCase().replace("_", " ")}
                                  </span>
                                </CardDescription>
                              </CardHeader>
                              <CardContent className="pt-0">
                                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                  {prog.requirements}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Separator className="mt-12" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
