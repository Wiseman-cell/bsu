import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Stethoscope,
  Briefcase,
  Building2,
  HeartHandshake,
} from "lucide-react";

export const metadata = {
  title: "About Brooklyn State University | BSU Profile & History",
  description:
    "Learn about Brooklyn State University — our history, mission, and commitment to academic excellence, pioneering research, and transformative societal impact across East Africa.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              About Brooklyn State University
            </h1>
            <p className="text-lg text-slate-300">
              Our story, our mission, and our commitment to shaping the future
              of higher education in Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:mx-0">
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              Brooklyn State University (BSU) is a premier institution of higher
              learning dedicated to academic excellence, pioneering research, and
              transformative societal impact. Situated as a hub of modern educational
              innovation, BSU provides a student-centered environment designed to
              foster intellectual growth, professional competency, and ethical
              leadership.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
              Founded to bridge the gap between academic theory and industry
              demands, BSU combines rigorous curricula with practical,
              market-driven training. The university hosts state-of-the-art
              facilities—including advanced clinical simulation laboratories,
              digital learning infrastructure, and specialized research centers—to
              ensure students are equipped to thrive in a rapidly evolving global
              economy.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              Through strategic international alliances, interdisciplinary research,
              and a commitment to community development, Brooklyn State University
              empowers graduates to become leaders, innovators, and problem-solvers
              across Africa and worldwide.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* Why Choose BSU */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Why Choose Brooklyn State University?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 shrink-0">
                    <Stethoscope className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Pioneering Medical & Specialized Education
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Home to flagship healthcare and research programs designed
                      to address critical regional and global health challenges.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400 shrink-0">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Industry-Aligned Curricula
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Every degree, diploma, and certificate program is crafted in
                      consultation with industry leaders to guarantee professional
                      readiness.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Modern Infrastructure
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Featuring digitally enabled lecture halls, comprehensive
                      physical and e-libraries, and specialized science and
                      technological laboratories.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 shrink-0">
                    <HeartHandshake className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Holistic Student Experience
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Beyond academics, BSU fosters vibrant campus life through
                      sports, leadership academies, cultural clubs, and career
                      development services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Link href="/about/vision-mission">
              <Button variant="outline">
                Read Our Vision & Mission
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
