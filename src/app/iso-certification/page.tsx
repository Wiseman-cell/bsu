import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Award, MapPin, FileText, RefreshCw, Search, Building2, Globe, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "ISO 9001:2015 Certification | Brooklyn State University",
  description:
    "Learn about Brooklyn State University's ISO 9001:2015 quality management certification and commitment to excellence.",
};

export default function IsoCertificationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Award className="h-3.5 w-3.5" />
              ISO 9001:2015 Certification
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              ISO Certification & Quality
            </h1>
            <p className="text-lg text-slate-300">
              Our commitment to quality management and continuous improvement across all university operations.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* ISO 9001 Overview */}
          <ScrollReveal>
            <Card className="mb-12 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                    <Award className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">ISO 9001:2015 Quality Management</CardTitle>
                </div>
                <CardDescription>International standard for quality management systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  Brooklyn State University is certified under ISO 9001:2015, the world's most widely recognised quality management standard. This certification demonstrates our ability to consistently provide services that meet customer and regulatory requirements, while driving continuous improvement in every aspect of university life.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2019</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Year of Initial Certification</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">2025</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Latest Recertification</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Annual</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Surveillance Audits</p>
                  </div>
                  <div className="rounded-lg border p-4 text-center">
                    <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">100%</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Staff Covered by QMS</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Certification Journey */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Certification Journey</CardTitle>
                  </div>
                  <CardDescription>Milestones on our path to quality excellence</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>2018:</strong> Decision by Senate to pursue ISO 9001:2015 certification to formalise quality management across all operations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>2019:</strong> Initial certification achieved following a comprehensive audit by an accredited international certification body.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>2020–2024:</strong> Successful completion of five annual surveillance audits with zero major non-conformities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span><strong>2025:</strong> Recertification audit completed, extending our certification for a further three-year cycle.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Quality Policy Statement */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <FileText className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Quality Policy Statement</CardTitle>
                  </div>
                  <CardDescription>Our formal commitment to quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    Brooklyn State University is committed to providing quality higher education, research, and community service that meet national and international standards. We achieve this through:
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Recruiting and retaining qualified academic and support staff.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Investing in modern teaching, learning, and research infrastructure.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Monitoring and reviewing programmes to ensure relevance and excellence.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Complying with all statutory and regulatory requirements, including those of the Commission for University Education.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Continuous Improvement */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <RefreshCw className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Continuous Improvement</CardTitle>
                  </div>
                  <CardDescription>Kaizen in action at BSU</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>All directorates undertake quarterly performance reviews using the Plan-Do-Check-Act cycle.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Student and staff feedback is systematically collected, analysed, and used to inform service enhancements.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Management review meetings are held bi-annually to assess quality objectives, audit results, and improvement opportunities.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Best practices identified in one department are shared across the university through the Quality Bulletin.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Internal Audit Process */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Search className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Internal Audit Process</CardTitle>
                  </div>
                  <CardDescription>Verifying compliance and effectiveness</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>An annual internal audit schedule covers all academic and administrative units in rotation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Trained internal auditors assess compliance with documented procedures and the effectiveness of processes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Audit findings are reported to unit heads and the Quality Assurance Directorate; corrective actions are tracked to closure.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Results feed into the annual Management Review and inform strategic planning priorities.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <Separator className="my-12" />

          {/* Bottom row: Quality Assurance & Accreditation */}
          <div className="grid gap-8 md:grid-cols-2">
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Quality Assurance Directorate</CardTitle>
                  </div>
                  <CardDescription>The team behind our quality management system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    The Quality Assurance Directorate is the central coordinating body for all quality initiatives at BSU. Led by the Director of Quality Assurance, the directorate:
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Develops and maintains the university's Quality Manual and standard operating procedures.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Coordinates internal and external audits and tracks implementation of corrective actions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Facilitates curriculum review, programme evaluation, and institutional benchmarking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span>Organises quality awareness training for staff at all levels.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Accreditation & International Standards</CardTitle>
                  </div>
                  <CardDescription>Beyond ISO 9001:2015</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <Globe className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span><strong>CUE Accreditation:</strong> Brooklyn State University is fully accredited by the Commission for University Education (CUE) and all academic programmes are approved.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span><strong>Professional Bodies:</strong> Individual programmes hold accreditation from relevant professional bodies, including the Law Society, Engineering Board, and Nursing Council.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span><strong>International Standards:</strong> The university benchmarks its quality practices against the INQAAHE Guidelines and the African Standards and Guidelines for Quality Assurance in Higher Education.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Globe className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      <span><strong>Partnerships:</strong> Collaboration with international universities on joint quality assurance initiatives and student exchange programmes.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
