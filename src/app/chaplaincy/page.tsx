import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Church,
  BookOpen,
  HeartHandshake,
  MessageCircleHeart,
  HandHeart,
  Globe,
  CalendarHeart,
  Users,
  ArrowRight,
  Sunrise,
  Moon,
} from "lucide-react";

export const metadata = {
  title: "Chaplaincy & Spiritual Life | Brooklyn State University",
  description:
    "Explore inclusive chaplaincy services at BSU — interdenominational chapel services, prayer groups, pastoral counselling, community outreach, and spiritual support for all faiths.",
};

export default function ChaplaincyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Church className="h-3.5 w-3.5" />
              Chaplaincy & Spiritual Life
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Chaplaincy & Spiritual Life
            </h1>
            <p className="text-lg text-slate-300">
              Nurturing spiritual well-being and providing pastoral care for the entire
              BSU community across all faith traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome / Inclusivity Statement */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="h-6 w-6 text-emerald-600" />
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  A Welcoming Space for Every Faith
                </h2>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Brooklyn State University is home to a diverse community of students and staff
                from many religious backgrounds and philosophical traditions. The Chaplaincy
                Office exists to serve everyone — Christian, Muslim, Hindu, Buddhist, and
                those exploring spirituality — with respect, confidentiality, and compassion.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                Whether you seek communal worship, quiet meditation, ethical guidance, or simply
                someone to talk to during a difficult season, our chaplains and faith advisors
                are here to walk alongside you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3">
                    <Sunrise className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Chapel Services</CardTitle>
                  <CardDescription>Interdenominational worship</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The University Chapel hosts regular Sunday services that welcome all
                    Christian denominations. Sermons focus on themes of hope, integrity,
                    servant leadership, and social justice. Mid-week prayer services and
                    communion gatherings provide additional opportunities for reflection.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400 mb-3">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Prayer & Fellowship Groups</CardTitle>
                  <CardDescription>Student-led spiritual communities</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    From Bible study circles and Praise & Worship teams to Dhikr gatherings and
                    interfaith dialogue forums, student-led groups meet throughout the week.
                    The Chaplaincy provides meeting spaces, resource libraries, and mentorship
                    for group leaders.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 mb-3">
                    <MessageCircleHeart className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Pastoral Counselling</CardTitle>
                  <CardDescription>Confidential spiritual guidance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Licensed chaplains offer one-on-one pastoral counselling for students
                    navigating grief, anxiety, relationship challenges, moral questions, or
                    crises of faith. Sessions are strictly confidential and open to students
                    of all beliefs.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400 mb-3">
                    <HandHeart className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Community Service & Outreach</CardTitle>
                  <CardDescription>Faith in action</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The Chaplaincy coordinates outreach programmes including prison visits,
                    hospital chaplaincy, orphanage support, and environmental clean-ups.
                    These activities translate spiritual values into tangible service for
                    neighbouring communities.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400 mb-3">
                    <CalendarHeart className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Religious Holidays & Observances</CardTitle>
                  <CardDescription>Honouring sacred calendars</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    BSU recognises major religious holidays and works with faculty to accommodate
                    students observing Ramadan, Easter, Eid, Diwali, and other significant
                    occasions. The Chaplaincy organises communal iftars, Christmas carol services,
                    and interfaith harmony events.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 mb-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Chapel Committee</CardTitle>
                  <CardDescription>Student leadership in spiritual life</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The Chapel Committee is a student-elected body that assists in planning
                    services, welcoming visitors, managing outreach budgets, and representing
                    the spiritual interests of the student body to university leadership.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Separator />

      {/* CTA */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <HeartHandshake className="h-8 w-8 mx-auto text-emerald-600 mb-4" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                All Are Welcome
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
                No matter your background or beliefs, the Chaplaincy Office is a safe space
                to ask questions, find community, and grow spiritually. Drop by the Chapel
                or send a message to connect.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/contacts">
                  <Button>
                    Contact Chaplaincy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline">
                    View Chapel Events
                    <CalendarHeart className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
