import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Scale, BookOpen, ClipboardList, GraduationCap, ShieldAlert, Gavel, Repeat, ArrowRightLeft } from "lucide-react";

export const metadata = {
  title: "Academic Regulations | Brooklyn State University",
  description:
    "View the academic regulations, policies, and guidelines that govern programmes at Brooklyn State University.",
};

const regulations = [
  {
    icon: Scale,
    title: "General Academic Regulations",
    description: "Framework governing all academic activity",
    content: [
      "All students are bound by the academic regulations in force at the time of their initial registration.",
      "The Senate reserves the right to amend academic regulations as necessary; students will be given reasonable notice of any material changes.",
      "Programmes are offered on a semester basis, with three semesters in each academic year.",
      "Each course carries a specific number of credit hours determined by lecture, tutorial, and practical contact hours per week.",
      "Students must maintain a minimum cumulative GPA as specified by their respective schools to remain in good academic standing.",
      "The university reserves the right to cancel or postpone any course where enrolment falls below the required threshold.",
    ],
  },
  {
    icon: BookOpen,
    title: "Student Registration & Enrollment",
    description: "Procedures for course registration and enrollment",
    content: [
      "Registration for each semester must be completed within the first two weeks of the semester.",
      "Students must consult their academic advisors before finalising course selections to ensure programme requirements are met.",
      "Late registration is permitted up to the end of the third week, subject to a penalty fee as approved by the Finance Committee.",
      "Students are responsible for verifying the accuracy of their registration records via the student portal.",
      "Deregistration from a course must be completed before the end of the fourth week; withdrawals after this point attract a 'W' grade.",
      "Full-time undergraduate students must register for a minimum of 15 and a maximum of 21 credit hours per semester.",
    ],
  },
  {
    icon: ClipboardList,
    title: "Examination Regulations",
    description: "Rules governing examinations and assessments",
    content: [
      "All students must present a valid university identification card before entering any examination room.",
      "Mobile phones, smart watches, and unauthorised electronic devices are strictly prohibited in examination venues.",
      "Students must be seated at least 15 minutes before the scheduled start time; late arrivals beyond 30 minutes will not be admitted.",
      "No student may leave the examination room during the first 30 minutes or the final 15 minutes of an examination.",
      "Any form of academic dishonesty during examinations, including copying, impersonation, or unauthorised material, will result in disciplinary action.",
      "Special examination arrangements for students with disabilities must be requested through the Disability Services Office at least four weeks in advance.",
    ],
  },
  {
    icon: GraduationCap,
    title: "Grading System",
    description: "Marks, grades, and grade point averages",
    content: [
      "The university operates a 4.0 grade point scale. Grades are assigned as follows: A (80-100%, 4.0), A- (75-79%, 3.7), B+ (70-74%, 3.3), B (65-69%, 3.0), B- (60-64%, 2.7), C+ (55-59%, 2.3), C (50-54%, 2.0), C- (45-49%, 1.7), D+ (40-44%, 1.3), D (35-39%, 1.0), and F (0-34%, 0.0).",
      "The cumulative Grade Point Average (CGPA) is computed by dividing the total quality points earned by the total credit hours attempted.",
      "A minimum CGPA of 2.0 is required for graduation at the undergraduate level; postgraduate programmes require a minimum of 3.0.",
      "Courses may be retaken to improve a grade; only the higher grade contributes to the CGPA, though both attempts appear on the transcript.",
      "Incomplete ('I') grades must be resolved within four weeks of the start of the following semester or they automatically convert to 'F'.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Academic Integrity & Plagiarism",
    description: "Upholding honesty in all academic work",
    content: [
      "Academic integrity is the foundation of scholarly work at BSU. All students are expected to submit original work and properly attribute sources.",
      "Plagiarism includes presenting another person's ideas, text, or data as one's own without proper citation, whether intentional or accidental.",
      "The university employs plagiarism detection software to screen submitted assignments, theses, and dissertations.",
      "First-time plagiarism offences may result in a formal warning, grade penalty, or requirement to resubmit work.",
      "Repeat or egregious offences may lead to suspension, expulsion, or revocation of an awarded qualification.",
      "All students must complete the online Academic Integrity Module during their first semester of enrolment.",
    ],
  },
  {
    icon: Gavel,
    title: "Student Disciplinary Procedures",
    description: "Processes for handling academic misconduct",
    content: [
      "Allegations of academic misconduct are referred to the Chair of the relevant Department for preliminary investigation.",
      "If warranted, the case is escalated to the School Academic Disciplinary Committee, which must convene within ten working days.",
      "The student has the right to be informed of the allegations in writing at least five working days before the hearing.",
      "Students may be accompanied by a fellow student or staff member of their choice during disciplinary hearings.",
      "The Committee's decision, including any sanctions, is communicated in writing within five working days of the hearing.",
      "Records of disciplinary proceedings are maintained confidentially by the Office of the Dean of Students.",
    ],
  },
  {
    icon: ArrowRightLeft,
    title: "Appeals Process",
    description: "Challenging academic and disciplinary decisions",
    content: [
      "Students may appeal against examination results, disciplinary decisions, or academic standing determinations.",
      "Appeals must be lodged in writing with the Registrar within 21 days of the decision being communicated.",
      "Grounds for appeal include procedural irregularity, new evidence not previously available, or demonstrable bias.",
      "The Senate Appeals Committee hears all academic appeals and its decision is final and binding.",
      "Pending the outcome of an appeal, any sanctions or exclusions remain in force unless otherwise directed by the Vice Chancellor.",
      "Students are advised to consult the Students' Guild representative or academic advisor before submitting an appeal.",
    ],
  },
  {
    icon: Repeat,
    title: "Credit Transfer Policy",
    description: "Recognition of prior learning and external credits",
    content: [
      "Credit transfer is granted for courses completed at recognised institutions where the content and learning outcomes are substantially equivalent.",
      "A maximum of 50% of the total credits required for a BSU qualification may be transferred from external institutions.",
      "Transfer credits are not counted towards the calculation of the CGPA; they are recorded as 'CR' on the transcript.",
      "Students seeking credit transfer must submit official transcripts, detailed course syllabi, and a written application to the Admissions Office.",
      "The Departmental Credit Transfer Committee evaluates each application and makes a recommendation to the Senate.",
      "Recognition of Prior Learning (RPL) may also be granted for relevant work experience, subject to portfolio assessment and interview.",
    ],
  },
];

export default function AcademicRegulationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Scale className="h-3.5 w-3.5" />
              Academic Regulations
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Academic Regulations
            </h1>
            <p className="text-lg text-slate-300">
              View the academic regulations, policies, and guidelines that govern programmes at Brooklyn State University.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {regulations.map((reg, index) => {
              const Icon = reg.icon;
              return (
                <ScrollReveal key={reg.title} delay={index % 2 === 0 ? 0 : 100}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{reg.title}</CardTitle>
                        </div>
                      </div>
                      <CardDescription>{reg.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {reg.content.map((item, i) => (
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
            <div className="rounded-xl bg-slate-50 dark:bg-slate-900 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Need clarification?
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                For questions or clarifications regarding academic regulations, please contact the Office of the Registrar or your Departmental Academic Advisor.
              </p>
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                registrar@bsu.ac.ke
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
