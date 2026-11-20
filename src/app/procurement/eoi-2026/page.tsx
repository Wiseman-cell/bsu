import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  FileText,
  Download,
  Upload,
  Clock,
  Hash,
  Tag,
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Procurement & EOI | BSU/EOI/FRM/08/2026",
  description:
    "Expression of Interest: Consultancy Services for Sustainable Fundraising Models and Capital Development Strategy. Submission deadline: September 17, 2026.",
};

export default async function Eoi2026Page() {
  const tender = await prisma.tender.findUnique({
    where: { refNumber: "BSU/EOI/FRM/08/2026" },
  });

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-700/40 px-3 py-1 text-xs font-medium text-amber-200 mb-4">
              <FileText className="h-3.5 w-3.5" />
              Procurement & Tenders
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Request for Expression of Interest (EOI)
            </h1>
            <p className="text-lg text-slate-300">
              Active procurement notices and downloadable tender documents for
              suppliers, consultants, and institutional partners.
            </p>
          </div>
        </div>
      </section>

      {/* Tender Detail */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {tender ? (
            <div className="max-w-4xl">
              <Card className="border-amber-200 dark:border-amber-800">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400">
                      Active
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-slate-600 dark:text-slate-400"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tender.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{tender.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <Hash className="h-3.5 w-3.5" />
                    Ref: {tender.refNumber}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 p-4">
                      <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                      <div>
                        <p className="text-xs text-slate-500">Submission Deadline</p>
                        <p className="font-semibold text-slate-900 dark:text-slate-100">
                          {tender.closingDate.toLocaleString("en-GB", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                            timeZoneName: "short",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 p-4">
                      <FileText className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      <div>
                        <p className="text-xs text-slate-500">Document Status</p>
                        <p className="font-semibold text-slate-900 dark:text-slate-100">Available for Download</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Background & Objective
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Brooklyn State University seeks to partner with experienced
                      consultancy firms and institutional advisors to design a 5-Year
                      Capital Campaign Strategy targeting international donors,
                      philanthropic foundations, and corporate partners. This
                      framework will support BSU's multi-county expansion and
                      international campuses in Kigali, Lilongwe, and Mogadishu.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      Submission Instructions
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Submissions must be uploaded via the BSU Supplier Portal or
                      delivered in hard copy to the Procurement Directorate, Thika
                      Main Campus.
                    </p>
                  </div>

                  <Separator />

                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Download Full EOI Document (PDF)
                    </Button>
                    <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                      <Upload className="h-4 w-4" />
                      Submit Digital Proposal Online
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <FileText className="mx-auto h-10 w-10 text-slate-400 mb-3" />
                <p className="text-slate-600 dark:text-slate-400">
                  No active tender found for this reference.
                </p>
              </CardContent>
            </Card>
          )}

          <div className="mt-10">
            <Link href="/">
              <Button variant="ghost">
                <ArrowRight className="mr-2 h-4 w-4 rotate-180" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
