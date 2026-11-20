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
import { prisma } from "@/lib/prisma";
import { ArrowLeft, Calendar, AlertTriangle, Megaphone } from "lucide-react";

export const metadata = {
  title: "Notices & Announcements | Brooklyn State University",
  description:
    "Official notices, announcements, and important communications for the BSU community.",
};

export const dynamic = "force-dynamic";

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default async function NoticesPage() {
  const notices = await prisma.notice.findMany({
    orderBy: [
      { isUrgent: "desc" },
      { createdAt: "desc" },
    ],
  });

  const urgentCount = notices.filter((n) => n.isUrgent).length;

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Notices & Announcements
            </h1>
            <p className="text-lg text-slate-300">
              Official communications, notices, and announcements for students,
              staff, and stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {notices.length === 0 ? (
            <ScrollReveal>
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                    <Megaphone className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                  </div>
                  <CardTitle>No Notices Yet</CardTitle>
                  <CardDescription>
                    There are no active notices at this time. Check back later for updates.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          ) : (
            <>
              {urgentCount > 0 && (
                <ScrollReveal>
                  <div className="mb-8 p-4 rounded-lg border border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
                    <div className="flex items-center gap-2 text-red-800 dark:text-red-300 font-semibold mb-1">
                      <AlertTriangle className="h-5 w-5" />
                      <span>Urgent Notices</span>
                    </div>
                    <p className="text-sm text-red-700 dark:text-red-400">
                      There {urgentCount === 1 ? "is" : "are"} {urgentCount} urgent
                      notice{urgentCount !== 1 ? "s" : ""} requiring your attention.
                    </p>
                  </div>
                </ScrollReveal>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                {notices.map((notice, index) => (
                  <ScrollReveal key={notice.id} delay={index * 100}>
                    <Card
                      className={`h-full hover:shadow-md transition-shadow ${
                        notice.isUrgent
                          ? "border-red-300 dark:border-red-800"
                          : ""
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{notice.category}</Badge>
                          {notice.isUrgent && (
                            <Badge
                              variant="destructive"
                              className="flex items-center gap-1"
                            >
                              <AlertTriangle className="h-3 w-3" />
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg leading-snug">
                          {notice.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2 mt-2">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(notice.createdAt)}
                          {notice.expiresAt && (
                            <>
                              <span className="mx-1">·</span>
                              <span>
                                Expires {formatDate(notice.expiresAt)}
                              </span>
                            </>
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 dark:text-slate-400 whitespace-pre-wrap">
                          {notice.content}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </>
          )}

          <div className="mt-10 text-center">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
