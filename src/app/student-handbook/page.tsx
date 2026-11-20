import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BookOpen, Landmark, Scale, ShieldCheck, Coins, Home, HeartPulse, HelpCircle, Phone, Download } from "lucide-react";

export const metadata = {
  title: "Student Handbook | Brooklyn State University",
  description:
    "Access the Brooklyn State University Student Handbook for policies, procedures, and guidelines.",
};

const sections = [
  {
    icon: BookOpen,
    title: "Welcome & University History",
    content: [
      "Brooklyn State University was founded with a vision to provide transformative, accessible higher education to students from all backgrounds.",
      "From a small college with five programmes and two hundred students, BSU has grown into a comprehensive university serving thousands across multiple campuses.",
      "Our motto, 'Knowledge for Service,' reflects our commitment to producing graduates who contribute meaningfully to society.",
      "The university is governed by a Council, with the Vice Chancellor as the Chief Executive Officer responsible for academic and administrative leadership.",
    ],
  },
  {
    icon: Landmark,
    title: "University Structure",
    content: [
      "BSU is organised into Schools, each headed by a Dean. Current schools include Business, Science & Technology, Education, Law, and Health Sciences.",
      "The Senate is the highest academic authority, responsible for setting academic standards, approving curricula, and regulating examinations.",
      "Support directorates include Finance, Human Resources, ICT, Library Services, Student Affairs, and Quality Assurance.",
      "The Students' Guild is the official representative body for all students, advocating for student welfare and organising co-curricular activities.",
    ],
  },
  {
    icon: Scale,
    title: "Student Rights & Responsibilities",
    content: [
      "Every student has the right to quality instruction, fair assessment, access to university facilities, and respectful treatment by staff.",
      "Students are entitled to form and join student organisations, subject to registration with the Office of the Dean of Students.",
      "Students are responsible for knowing and complying with all university regulations, maintaining academic honesty, and respecting the rights of others.",
      "Students must carry valid university identification at all times and produce it when requested by authorised personnel.",
      "Freedom of expression is protected within the bounds of the law and university policy; hate speech, incitement, and defamation are prohibited.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Code of Conduct",
    content: [
      "The BSU Code of Conduct applies to all students both on and off campus when engaged in university-related activities.",
      "Prohibited conduct includes: plagiarism and academic fraud, destruction of university property, harassment or bullying, and possession of illegal substances or weapons.",
      "Dress code: Students are expected to dress decently and in a manner befitting a university environment. Specific programmes may have additional requirements.",
      "Alcohol and substance abuse: The university maintains a zero-tolerance policy for drug trafficking and operates an awareness and rehabilitation programme.",
      "Grievous misconduct may result in suspension, expulsion, or legal prosecution depending on severity.",
    ],
  },
  {
    icon: BookOpen,
    title: "Academic Policies",
    content: [
      "Attendance: Students are expected to attend all scheduled classes. Programmes may enforce a minimum attendance requirement for examination eligibility.",
      "Registration: Course registration is done online via the student portal within the first two weeks of each semester.",
      "Examinations: All university examination regulations apply; misconduct during exams attracts severe penalties.",
      "Deferment: Students may apply for academic leave for up to two academic years, subject to Senate approval.",
      "Academic advising: Each student is assigned an academic advisor to guide programme planning and career development.",
    ],
  },
  {
    icon: Coins,
    title: "Financial Policies",
    content: [
      "Tuition and fees are published annually by the Finance Directorate and are payable per semester or in instalments as approved.",
      "Students must clear at least 60% of semester fees before registering for examinations.",
      "Scholarships and bursaries are available based on academic merit, financial need, and special talent; applications close on 30 June each year.",
      "Refund policy: Students who withdraw within the first four weeks may receive a partial refund as detailed in the Fees Policy.",
      "All financial queries should be directed to the Finance Office or via studentfinance@bsu.ac.ke.",
    ],
  },
  {
    icon: Home,
    title: "Accommodation Rules",
    content: [
      "University halls of residence are available on a first-come, first-served basis; priority is given to first-year and international students.",
      "Residents must sign the Hostel Agreement, which governs conduct, visitors, quiet hours (10:00 PM – 6:00 AM), and room maintenance.",
      "Cooking in rooms is prohibited except in designated areas; electrical appliances must be inspected and approved.",
      "Damage to hostel property will be charged to the responsible student(s); communal damage is shared equally among residents of the affected area.",
      "Off-campus students are encouraged to secure accommodation in safe, well-lit areas and to register their local address with the Student Affairs Office.",
    ],
  },
  {
    icon: HeartPulse,
    title: "Health & Safety",
    content: [
      "The University Health Centre provides primary medical care, counselling, and referral services to all registered students.",
      "All students must complete a medical examination and submit the Health Form before commencing their studies.",
      "The university maintains an ambulance for emergency medical transport; emergency contacts are posted across all campuses.",
      "Fire safety drills are conducted each semester; students must familiarise themselves with evacuation routes and assembly points.",
      "Personal safety: Students are advised to avoid isolated areas after dark, travel in groups where possible, and report suspicious activity to campus security immediately.",
    ],
  },
  {
    icon: HelpCircle,
    title: "Complaints & Grievances",
    content: [
      "BSU is committed to resolving complaints fairly, promptly, and confidentially.",
      "Informal resolution is encouraged: students should first raise concerns with the relevant lecturer, supervisor, or head of department.",
      "If informal resolution fails, a formal written complaint may be submitted to the Dean of Students or the Registrar.",
      "The university will acknowledge receipt within five working days and issue a response within 21 working days.",
      "Students have the right to appeal decisions through the Senate Appeals Committee where provided for in university statutes.",
    ],
  },
  {
    icon: Phone,
    title: "Useful Contacts",
    content: [
      "Office of the Registrar: registrar@bsu.ac.ke | +254 20 123 4567",
      "Dean of Students: dean.students@bsu.ac.ke | +254 20 123 4568",
      "Finance Office: studentfinance@bsu.ac.ke | +254 20 123 4569",
      "ICT Helpdesk: ict@bsu.ac.ke | +254 20 123 4570",
      "University Health Centre: health@bsu.ac.ke | +254 20 123 4571",
      "Campus Security (24/7): +254 20 123 4599",
      "Library Services: library@bsu.ac.ke | +254 20 123 4572",
      "Career Services: careers@bsu.ac.ke | +254 20 123 4573",
    ],
  },
];

export default function StudentHandbookPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              Student Handbook
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Student Handbook
            </h1>
            <p className="text-lg text-slate-300">
              Your comprehensive guide to university policies, student rights, and campus procedures.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <ScrollReveal key={section.title} delay={index % 2 === 0 ? 0 : 100}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">{section.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {section.content.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

          <Separator className="my-12" />

          <ScrollReveal>
            <div className="rounded-xl bg-slate-900 text-white p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="max-w-xl">
                  <h2 className="text-xl font-bold mb-2">Download the Full Handbook</h2>
                  <p className="text-sm text-slate-300">
                    Get the complete Student Handbook in PDF format for offline reading, printing, or quick reference whenever you need it.
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
