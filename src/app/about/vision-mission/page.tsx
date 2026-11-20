import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Target, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Vision, Mission & Core Values | Brooklyn State University",
  description:
    "Discover BSU's vision to be a premier global center of academic excellence, and the iLEAD core values that drive our institutional culture: Innovation, Leadership, Excellence, Accountability, Diversity & Service.",
};

const coreValues = [
  {
    letter: "I",
    title: "Innovation",
    description:
      "We encourage curiosity, critical thinking, and groundbreaking research that solves real-world challenges through technology and modern pedagogy.",
    color: "bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400",
  },
  {
    letter: "L",
    title: "Leadership",
    description:
      "We mentor vision-driven, ethical leaders who lead with integrity, accountability, and professional competence in their respective fields.",
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
  },
  {
    letter: "E",
    title: "Excellence",
    description:
      "We adhere to the highest standards of academic quality, clinical practice, teaching, and administrative efficiency.",
    color: "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400",
  },
  {
    letter: "A",
    title: "Accountability",
    description:
      "We foster transparency, institutional governance, and responsible stewardship of resources entrusted to us by our students, partners, and community.",
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
  },
  {
    letter: "D",
    title: "Diversity & Service",
    description:
      "We celebrate diverse perspectives, promote equal opportunity, and dedicate our knowledge to community health, economic development, and social advancement.",
    color: "bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400",
  },
];

export default function VisionMissionPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Vision, Mission & Core Values
            </h1>
            <p className="text-lg text-slate-300">
              The guiding principles that define who we are and shape everything we
              do at Brooklyn State University.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-emerald-600">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  To be a premier global center of academic excellence, innovation,
                  and transformative health and specialized sciences research.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-sky-600">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  To deliver holistic, market-driven education and foster
                  high-impact research, clinical leadership, and community
                  transformation through state-of-the-art technology and strategic
                  global alliances.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-400 mb-4">
              <BadgeCheck className="h-3.5 w-3.5" />
              iLEAD Framework
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Core Values
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              At Brooklyn State University, our institutional culture and academic
              philosophy are anchored on five foundational pillars:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => (
              <Card
                key={value.letter}
                className="hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold ${value.color}`}
                    >
                      {value.letter}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
