import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import {
  HelpCircle,
  GraduationCap,
  Wallet,
  BookOpen,
  Users,
  Monitor,
} from "lucide-react";

export const metadata = {
  title: "Frequently Asked Questions | Brooklyn State University",
  description:
    "Find answers to common questions about admissions, academics, student life, fees, and ICT at Brooklyn State University.",
};

const categories = [
  {
    id: "admissions",
    label: "Admissions",
    icon: GraduationCap,
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
    questions: [
      {
        q: "What are the minimum entry requirements for undergraduate programmes?",
        a: "Applicants must hold a Kenya Certificate of Secondary Education (KCSE) with a minimum mean grade of C+ (plus) or its equivalent. Specific programmes may have additional subject requirements. International qualifications are assessed on a case-by-case basis by the Admissions Office.",
      },
      {
        q: "When are the application deadlines for the upcoming intake?",
        a: "The main intake opens in January and the deadline is typically mid-December of the previous year. A second intake opens in September with applications closing in August. Deadlines are published on the admissions portal and may vary by programme.",
      },
      {
        q: "How do I submit an online application?",
        a: "Visit the BSU Admissions Portal, create an account, fill in the application form, upload scanned copies of your academic certificates, ID/passport, and passport photo, then pay the non-refundable application fee. You will receive a confirmation email once your application is submitted.",
      },
      {
        q: "Can I apply for more than one programme at a time?",
        a: "Yes. You may select up to two programme choices on a single application. Indicate your first and second preferences clearly. If you qualify for both, admission is offered based on availability and your priority ranking.",
      },
    ],
  },
  {
    id: "fees",
    label: "Fees & Finance",
    icon: Wallet,
    color: "bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400",
    questions: [
      {
        q: "Where can I find the current fee structure?",
        a: "The current fee structure is available on the Downloads page under the Finance category and is also posted on the student portal each semester. Fees vary by programme and level of study (certificate, diploma, undergraduate, or postgraduate).",
      },
      {
        q: "What payment methods are accepted by the university?",
        a: "BSU accepts payments via bank deposit/transfer to the official university account, mobile money (M-Pesa), and debit/credit card at the finance office. Always retain your receipt and upload proof of payment to the student portal.",
      },
      {
        q: "Does BSU offer scholarships or financial aid?",
        a: "Yes. Brooklyn State University offers merit-based scholarships, need-based bursaries, and work-study opportunities. Eligible students may also apply for government funding schemes such as HELB. Scholarship announcements are posted on the notices board and emailed to registered students.",
      },
    ],
  },
  {
    id: "academics",
    label: "Academics",
    icon: BookOpen,
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
    questions: [
      {
        q: "What academic programmes does BSU offer?",
        a: "BSU offers a wide range of programmes across schools including Health Sciences, Business & Economics, Education, Science & Technology, and Law. Programmes range from certificates and diplomas to undergraduate and postgraduate degrees. Visit the Academics page for the full catalogue.",
      },
      {
        q: "Can I transfer credits from another institution?",
        a: "Credit transfers are considered for students coming from recognised institutions with accredited programmes. You must submit official transcripts and course descriptions to the Academic Registrar for evaluation. A minimum grade requirement may apply for each transferred course.",
      },
      {
        q: "How do I defer my studies?",
        a: "Students may apply for deferment by filling out the Deferment Request Form available on the student portal. Applications must be submitted before the semester begins and require approval from the Academic Registrar. Deferment is typically granted for up to one academic year.",
      },
    ],
  },
  {
    id: "student-life",
    label: "Student Life",
    icon: Users,
    color: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400",
    questions: [
      {
        q: "Does BSU provide on-campus hostels?",
        a: "Yes. Brooklyn State University provides affordable on-campus hostel accommodation for both male and female students. Hostel rooms are allocated on a first-come, first-served basis at the beginning of each semester. Off-campus housing support is also available through the Directorate of Student Affairs.",
      },
      {
        q: "What clubs and societies can I join?",
        a: "BSU has over 30 active clubs and societies spanning academic, cultural, religious, and special-interest groups. Popular options include the Debate Club, Environmental Society, Christian Union, Muslim Students Association, and Rotaract Club. Registration happens during the Clubs Week at the start of each semester.",
      },
      {
        q: "Are there sports and recreational facilities?",
        a: "Yes. The university has a modern sports complex with a gym, basketball court, football pitch, volleyball nets, and a running track. Students can participate in intramural leagues, fitness classes, and varsity team trials. Annual sports days and inter-faculty tournaments are highlights of the calendar.",
      },
    ],
  },
  {
    id: "ict",
    label: "Portal & ICT",
    icon: Monitor,
    color: "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400",
    questions: [
      {
        q: "I cannot log in to the student portal. What should I do?",
        a: "Ensure you are using the correct registration number and password. Clear your browser cache or try a different browser. If the issue persists, use the 'Forgot Password' link or contact the ICT Support Desk via email or in person at the ICT office during working hours.",
      },
      {
        q: "How do I reset my portal password?",
        a: "Click 'Forgot Password' on the login page and enter your registered email address. A reset link will be sent to your email. If you no longer have access to your registered email, visit the ICT office with your student ID for manual verification and reset.",
      },
      {
        q: "How do I register for units online?",
        a: "Log in to the student portal, navigate to the 'Unit Registration' section, select the current semester, choose your recommended units, and confirm your selection. Always consult your academic adviser before finalising registration to ensure you meet programme requirements.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <HelpCircle className="h-3.5 w-3.5" />
              Frequently Asked Questions
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-300">
              Quick answers to the most common questions from prospective and
              current students about admissions, academics, fees, and campus life.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.id} delay={idx * 100}>
                  <Card className="hover:shadow-md transition-shadow h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${cat.color}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">
                            {cat.label}
                          </CardTitle>
                          <Badge variant="secondary" className="mt-1 text-xs">
                            {cat.questions.length} question
                            {cat.questions.length !== 1 ? "s" : ""}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="divide-y divide-slate-100 dark:divide-slate-800">
                        {cat.questions.map((item) => (
                          <details
                            key={item.q}
                            className="group py-3"
                          >
                            <summary className="flex cursor-pointer list-none items-start justify-between text-left font-medium text-slate-900 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                              <span className="pr-4">{item.q}</span>
                              <svg
                                className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </summary>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                              {item.a}
                            </p>
                          </details>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
