import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { CalendarDays, BookOpen, Clock, PartyPopper, Download } from "lucide-react";

export const metadata = {
  title: "Academic Calendars | Brooklyn State University",
  description:
    "View academic calendars, semester dates, registration deadlines, and key academic events.",
};

const semesterOverview = [
  {
    name: "Semester I",
    period: "September – December 2025",
    weeks: "15 weeks",
    highlight: "Opening, orientation, and first-semester examinations",
  },
  {
    name: "Semester II",
    period: "January – May 2026",
    weeks: "16 weeks",
    highlight: "Main academic semester with mid-term break in March",
  },
  {
    name: "Semester III",
    period: "June – August 2026",
    weeks: "12 weeks",
    highlight: "Short semester for selected courses and attachments",
  },
];

const keyDates = [
  { event: "Opening / Reporting", semester: "I", date: "1 September 2025" },
  { event: "Orientation Week", semester: "I", date: "1 – 5 September 2025" },
  { event: "Registration Deadline", semester: "I", date: "12 September 2025" },
  { event: "Lectures Begin", semester: "I", date: "8 September 2025" },
  { event: "Add/Drop Deadline", semester: "I", date: "26 September 2025" },
  { event: "Mid-Semester Break", semester: "I", date: "20 – 24 October 2025" },
  { event: "Continuous Assessment Week", semester: "I", date: "10 – 14 November 2025" },
  { event: "Last Day of Lectures", semester: "I", date: "21 November 2025" },
  { event: "Revision Week", semester: "I", date: "24 – 28 November 2025" },
  { event: "End of Semester Exams", semester: "I", date: "1 – 19 December 2025" },
  { event: "Semester Break", semester: "–", date: "20 December 2025 – 11 January 2026" },
  { event: "Opening / Reporting", semester: "II", date: "12 January 2026" },
  { event: "Lectures Begin", semester: "II", date: "13 January 2026" },
  { event: "Registration Deadline", semester: "II", date: "23 January 2026" },
  { event: "Mid-Semester Break", semester: "II", date: "9 – 13 March 2026" },
  { event: "Graduation Ceremony", semester: "II", date: "14 March 2026" },
  { event: "Continuous Assessment Week", semester: "II", date: "6 – 10 April 2026" },
  { event: "Last Day of Lectures", semester: "II", date: "1 May 2026" },
  { event: "Revision Week", semester: "II", date: "4 – 8 May 2026" },
  { event: "End of Semester Exams", semester: "II", date: "11 – 29 May 2026" },
  { event: "Semester III Begins", semester: "III", date: "1 June 2026" },
  { event: "Semester III Ends", semester: "III", date: "21 August 2026" },
];

const holidays = [
  { date: "20 October 2025", occasion: "Mashujaa Day" },
  { date: "20 December 2025 – 1 January 2026", occasion: "Christmas & New Year Break" },
  { date: "1 May 2026", occasion: "Labour Day" },
  { date: "1 June 2026", occasion: "Madaraka Day" },
  { date: "20 October 2026", occasion: "Mashujaa Day" },
];

const events = [
  { date: "15 – 19 September 2025", event: "Freshers' Week", type: "Student Life" },
  { date: "5 November 2025", event: "Career Fair", type: "Careers" },
  { date: "10 – 14 February 2026", event: "Research Week", type: "Research" },
  { date: "14 March 2026", event: "Graduation & Congregation", type: "Ceremony" },
  { date: "22 – 26 June 2026", event: "Cultural Festival", type: "Student Life" },
];

export default function CalendarPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <CalendarDays className="h-3.5 w-3.5" />
              Academic Calendar
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Academic Calendar
            </h1>
            <p className="text-lg text-slate-300">
              View academic calendars, semester dates, registration deadlines, and key academic events.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Academic Year at a Glance */}
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
                2025/2026 Academic Year at a Glance
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {semesterOverview.map((sem) => (
                  <Card key={sem.name} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-base">{sem.name}</CardTitle>
                      </div>
                      <CardDescription>{sem.period}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <strong>Duration:</strong> {sem.weeks}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{sem.highlight}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Key Dates Table */}
          <ScrollReveal>
            <Card className="mb-12 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                    <Clock className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Key Dates</CardTitle>
                </div>
                <CardDescription>Important dates for the 2025/2026 academic year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-slate-50 dark:bg-slate-900">
                      <tr>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Event</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Semester</th>
                        <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {keyDates.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.event}</td>
                          <td className="px-4 py-3">
                            {row.semester !== "–" ? (
                              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                                Sem {row.semester}
                              </span>
                            ) : (
                              <span className="text-xs text-slate-500 dark:text-slate-500">—</span>
                            )}
                          </td>
                          <td className="px-4 py-3 text-slate-600 dark:text-slate-400 whitespace-nowrap">{row.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Holiday Calendar */}
            <ScrollReveal>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <PartyPopper className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Holiday Calendar</CardTitle>
                  </div>
                  <CardDescription>Public holidays and university breaks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 dark:bg-slate-900">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Date</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Occasion</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {holidays.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                            <td className="px-4 py-3 text-slate-600 dark:text-slate-400 whitespace-nowrap">{row.date}</td>
                            <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.occasion}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Events Calendar */}
            <ScrollReveal delay={100}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                      <CalendarDays className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">Events Calendar</CardTitle>
                  </div>
                  <CardDescription>Major university events and activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-50 dark:bg-slate-900">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Date</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Event</th>
                          <th className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-white">Type</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {events.map((row, i) => (
                          <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50">
                            <td className="px-4 py-3 text-slate-600 dark:text-slate-400 whitespace-nowrap">{row.date}</td>
                            <td className="px-4 py-3 text-slate-700 dark:text-slate-300">{row.event}</td>
                            <td className="px-4 py-3">
                              <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                                {row.type}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <Separator className="my-12" />

          {/* Download CTA */}
          <ScrollReveal>
            <div className="rounded-xl bg-slate-900 text-white p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Download className="h-5 w-5 text-emerald-400" />
                    <h2 className="text-xl font-bold">Download the Academic Calendar</h2>
                  </div>
                  <p className="text-sm text-slate-300">
                    Get the full 2025/2026 Academic Calendar in PDF format for easy reference, printing, and sharing with your peers.
                  </p>
                </div>
                <Button variant="secondary" size="lg" className="shrink-0" asChild>
                  <Link href="/downloads">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
