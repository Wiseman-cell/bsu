"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Calendar,
  Globe,
  Award,
  LogOut,
  User,
  School,
  Activity,
  ShieldCheck,
} from "lucide-react";

const portalActions = [
  {
    title: "Course Registration",
    description: "Register units for the current semester and view your class timetable.",
    icon: BookOpen,
    color: "bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400",
    badge: "Open",
  },
  {
    title: "Fee Statements",
    description: "View balances, payment history, and download official fee statements.",
    icon: FileText,
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
    badge: "Open",
  },
  {
    title: "Exam Timetables",
    description: "Access provisional and final examination schedules per semester.",
    icon: Calendar,
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
    badge: "Upcoming",
  },
  {
    title: "ODeL E-Learning Gateway",
    description: "Distance learning portal for online coursework, lectures, and assessments.",
    icon: Globe,
    color: "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400",
    badge: "Open",
  },
  {
    title: "Transcript Requests",
    description: "Request official academic transcripts and academic verification letters.",
    icon: Award,
    color: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400",
    badge: "Open",
  },
];

const mockStudent = {
  admissionNumber: "BSU/2024/001234",
  fullName: "Wanjiku Mwangi",
  school: "College of Health & Specialized Medical Sciences",
  programme: "Bachelor of Science in Lymphology and Lymphatic Medicine",
  status: "Active",
  yearOfStudy: 2,
  semester: "Semester II",
  academicYear: "2024/2025",
  gpa: "3.72",
  unitsRegistered: 6,
  feeBalance: 42000,
};

export default function StudentPortalPage() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";

  const student = isAuthenticated
    ? {
        admissionNumber: (session?.user as Record<string, string>)?.id || mockStudent.admissionNumber,
        fullName: session?.user?.name || mockStudent.fullName,
        school: mockStudent.school,
        programme: mockStudent.programme,
        status: mockStudent.status,
        yearOfStudy: mockStudent.yearOfStudy,
        semester: mockStudent.semester,
        academicYear: mockStudent.academicYear,
        gpa: mockStudent.gpa,
        unitsRegistered: mockStudent.unitsRegistered,
        feeBalance: mockStudent.feeBalance,
      }
    : null;

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <GraduationCap className="h-3.5 w-3.5" />
              CampusConnect Student Portal
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Student Dashboard
            </h1>
            <p className="text-lg text-slate-300">
              Access your academic records, register courses, view fee statements,
              and manage your campus life from one place.
            </p>
          </div>
        </div>
      </section>

      {!isAuthenticated ? (
        <section className="py-20 bg-white dark:bg-slate-950">
          <div className="mx-auto max-w-md px-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 mx-auto mb-6">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
              Authentication Required
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Please sign in with your CampusConnect Student Portal credentials to
              access your dashboard.
            </p>
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => signIn("campusconnect-student")}
                className="bg-emerald-600 hover:bg-emerald-700 w-full"
              >
                Sign In to CampusConnect
              </Button>
              <p className="text-xs text-slate-500">
                Demo: Use Admission Number <code>BSU/2024/001234</code> and any
                password ≥6 characters.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Profile Summary */}
          <section className="py-8 bg-slate-50 dark:bg-slate-900/40 border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white text-xl font-bold">
                    {student!.fullName
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {student!.fullName}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {student!.admissionNumber}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400">
                        <Activity className="h-3 w-3 mr-1" />{student!.status}
                      </Badge>
                      <Badge variant="outline">
                        {student!.academicYear} · {student!.semester}
                      </Badge>
                      <Badge variant="outline">Year {student!.yearOfStudy}</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="text-center">
                    <p className="text-xs text-slate-500">GPA</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{student!.gpa}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500">Units</p>
                    <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{student!.unitsRegistered}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-slate-500">Fee Balance</p>
                    <p className="text-lg font-bold text-amber-700 dark:text-amber-400">
                      KES {student!.feeBalance.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => signOut()}
                  >
                    <LogOut className="h-3.5 w-3.5 mr-1" /> Sign Out
                  </Button>
                </div>
              </div>

              <div className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <School className="h-4 w-4 text-slate-400" />
                  {student!.school}
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <BookOpen className="h-4 w-4 text-slate-400" />
                  {student!.programme}
                </div>
              </div>
            </div>
          </section>

          {/* Portal Actions */}
          <section className="py-12 bg-white dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Portal Actions
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portalActions.map((action) => (
                  <Card
                    key={action.title}
                    className="hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}
                        >
                          <action.icon className="h-5 w-5" />
                        </div>
                        <Badge
                          variant="secondary"
                          className="text-[10px]"
                        >
                          {action.badge}
                        </Badge>
                      </div>
                      <CardTitle className="text-base">{action.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {action.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
