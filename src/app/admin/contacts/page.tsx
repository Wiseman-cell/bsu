import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, CalendarDays, Eye, EyeOff } from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact Submissions | BSU Admin",
  description: "Manage incoming contact form submissions.",
};

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
}

export default async function AdminContactsPage() {
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  const unreadCount = submissions.filter((s) => !s.isRead).length;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Contact Submissions
              </h1>
              <p className="mt-2 text-lg text-slate-300">
                Manage incoming messages from the public contact form.
              </p>
            </div>
            {unreadCount > 0 && (
              <Badge className="bg-emerald-600 text-white text-sm px-3 py-1">
                {unreadCount} unread
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {submissions.length === 0 ? (
            <Card>
              <CardHeader className="text-center py-12">
                <Mail className="h-10 w-10 text-slate-300 mx-auto mb-4" />
                <CardTitle>No submissions yet</CardTitle>
                <CardDescription>
                  Contact form submissions will appear here once received.
                </CardDescription>
              </CardHeader>
            </Card>
          ) : (
            <div className="space-y-4">
              {submissions.map((sub) => (
                <Card
                  key={sub.id}
                  className={`transition-shadow hover:shadow-md ${
                    !sub.isRead ? "border-l-4 border-l-emerald-500" : ""
                  }`}
                >
                  <CardContent className="p-5">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                            {sub.name}
                          </h3>
                          {!sub.isRead && (
                            <Badge
                              variant="secondary"
                              className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 text-[10px]"
                            >
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Mail className="h-3.5 w-3.5" />
                            {sub.email}
                          </span>
                          <span className="flex items-center gap-1">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {formatDate(sub.createdAt)}
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {sub.subject}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-wrap">
                          {sub.message}
                        </p>
                      </div>

                      <form
                        action={`/api/admin/contacts?id=${sub.id}`}
                        method="POST"
                        className="shrink-0"
                      >
                        <input
                          type="hidden"
                          name="isRead"
                          value={String(!sub.isRead)}
                        />
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-slate-50 dark:hover:bg-slate-900"
                        >
                          {sub.isRead ? (
                            <>
                              <EyeOff className="h-3.5 w-3.5" />
                              Mark unread
                            </>
                          ) : (
                            <>
                              <Eye className="h-3.5 w-3.5" />
                              Mark read
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
