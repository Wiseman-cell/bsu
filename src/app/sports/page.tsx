import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  Trophy,
  Medal,
  Landmark,
  Circle,
  Activity,
  Waves,
  Timer,
  Dumbbell,
  Users,
  Flag,
  GraduationCap,
  Banknote,
  Calendar,
  PartyPopper,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Sports & Recreation | Brooklyn State University",
  description:
    "Discover BSU&apos;s Olympic-standard sports complex, indoor & outdoor facilities, inter-faculty competitions, sports scholarships, and annual sports day.",
};

export default function SportsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <Trophy className="h-3.5 w-3.5" />
              Sports & Recreation
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Sports & Recreation
            </h1>
            <p className="text-lg text-slate-300">
              Stay active, build teamwork, and pursue excellence through our diverse
              sports and recreational programmes.
            </p>
          </div>
        </div>
      </section>

      {/* Sports Complex */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Olympic-Standard Sports Complex
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                The BSU Sports Complex is a world-class facility designed to nurture athletic
                talent, promote fitness, and host regional and national-level competitions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">World-Class Infrastructure</CardTitle>
                  <CardDescription>Built for performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The complex features an international-standard athletics track, FIFA-certified
                    football turf, Olympic-size swimming pool, and multipurpose indoor arenas
                    with spectator seating for thousands.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400 mb-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Professional Coaching Staff</CardTitle>
                  <CardDescription>Expert guidance at every level</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Certified coaches and fitness trainers lead structured programmes for
                    beginners through elite athletes, including personalised training plans,
                    nutrition advice, and injury prevention.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 mb-3">
                    <Medal className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Competition Hosting</CardTitle>
                  <CardDescription>Regional & national events</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    BSU regularly hosts Kenya Universities Sports Association (KUSA) fixtures,
                    inter-collegiate tournaments, and invitational meets, giving students
                    exposure to high-level competitive environments.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Separator />

      {/* Indoor & Outdoor Facilities */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Indoor & Outdoor Facilities
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                A comprehensive range of facilities catering to team sports, individual fitness,
                aquatic disciplines, and recreational activities.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3">
                    <Flag className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Football & Rugby</CardTitle>
                  <CardDescription>Natural & artificial pitches</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Multiple full-size pitches with floodlights, changing rooms, and referee
                    amenities support both training and competitive fixtures year-round.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={50}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400 mb-3">
                    <Circle className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Basketball & Volleyball</CardTitle>
                  <CardDescription>Indoor courts & beach courts</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Hardwood indoor courts and outdoor sand volleyball pits accommodate
                    casual pickup games, league matches, and varsity team practice sessions.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-400 mb-3">
                    <Waves className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Swimming</CardTitle>
                  <CardDescription>Olympic-size pool & training lanes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The heated, Olympic-standard pool supports competitive swimming, water polo,
                    aqua aerobics, and learn-to-swim programmes for all skill levels.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 mb-3">
                    <Timer className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Athletics</CardTitle>
                  <CardDescription>Track & field disciplines</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    An all-weather tartan track, long jump pits, high jump mats, javelin and
                    discus sectors, and throwing cages enable comprehensive athletics training.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-950/30 dark:text-rose-400 mb-3">
                    <Dumbbell className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Gym & Fitness</CardTitle>
                  <CardDescription>State-of-the-art equipment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The fitness centre features cardio machines, free weights, resistance
                    training stations, spinning studios, and certified personal trainers
                    available by appointment.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400 mb-3">
                    <Activity className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Indoor Sports</CardTitle>
                  <CardDescription>Badminton, table tennis & more</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Air-conditioned indoor halls accommodate badminton, table tennis, netball,
                    handball, and martial arts, with equipment available for loan at the
                    sports office.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Separator />

      {/* Competitions, Teams, Scholarships, Sports Day */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 mb-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Inter-Faculty Competitions</CardTitle>
                  <CardDescription>Rivalry, pride & teamwork</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Each semester, faculties compete in leagues and tournaments across multiple
                    disciplines. These spirited contests build camaraderie, faculty identity,
                    and healthy rivalry that energises the entire campus.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3">
                    <Flag className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">BSU Sports Teams</CardTitle>
                  <CardDescription>Varsity excellence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The BSU Panthers represent the university in KUSA leagues and invitational
                    tournaments. Talented athletes earn spots through trials and receive
                    structured training, kits, and travel support for away fixtures.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 mb-3">
                    <Banknote className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Sports Scholarships</CardTitle>
                  <CardDescription>Talent meets opportunity</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Exceptional student-athletes can apply for sports scholarships that cover
                    tuition, accommodation, and training costs. Awards are based on competitive
                    records, discipline, and academic standing.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-50 text-pink-700 dark:bg-pink-950/30 dark:text-pink-400 mb-3">
                    <PartyPopper className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Annual Sports Day</CardTitle>
                  <CardDescription>A celebration of athleticism</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    The highlight of the sporting calendar, Sports Day brings together students,
                    staff, alumni, and families for a festival of races, relays, field events,
                    novelty games, and prize-giving ceremonies.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <Trophy className="h-8 w-8 mx-auto text-emerald-600 mb-4" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Join the Winning Team
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
                Whether you are a seasoned athlete or just starting your fitness journey,
                BSU Sports has a programme for you. Attend trials, sign up for recreational
                leagues, or visit the gym today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/contacts">
                  <Button>
                    Contact Sports Office
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/events">
                  <Button variant="outline">
                    View Sports Calendar
                    <Calendar className="ml-2 h-4 w-4" />
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
