import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import {
  BedDouble,
  Home,
  Shield,
  Wifi,
  User,
  Users,
  ClipboardList,
  CalendarCheck,
  Receipt,
  CreditCard,
  FileText,
  ShieldCheck,
  MapPin,
  Building,
  ArrowRight,
  Download,
} from "lucide-react";

export const metadata = {
  title: "Hostels & Accommodation | Brooklyn State University",
  description:
    "Explore comfortable, secure on-campus hostels at BSU Thika, room types, booking process, fees, rules, and off-campus guidance for students.",
};

export default function HostelsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <BedDouble className="h-3.5 w-3.5" />
              Hostels & Accommodation
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Hostels & Accommodation
            </h1>
            <p className="text-lg text-slate-300">
              Comfortable, secure, and affordable housing options designed to support
              your academic journey and campus life experience.
            </p>
          </div>
        </div>
      </section>

      {/* On-Campus Hostels */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                On-Campus Hostels at Thika
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                BSU offers modern, well-maintained hostel facilities within walking distance
                of lecture halls, the library, and the dining centre, ensuring convenience
                and community for residents.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 mb-3">
                    <Home className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Modern Facilities</CardTitle>
                  <CardDescription>Purpose-built student residences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Hostels feature spacious rooms, study areas, laundry facilities, hot
                    showers, and communal lounges that balance privacy with opportunities for
                    peer interaction and collaborative learning.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-50 text-sky-700 dark:bg-sky-950/30 dark:text-sky-400 mb-3">
                    <Wifi className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">High-Speed WiFi</CardTitle>
                  <CardDescription>Connected living for study & leisure</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Reliable, high-speed internet access is available throughout all hostel
                    blocks, enabling uninterrupted research, online classes, and communication
                    with family and friends.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400 mb-3">
                    <Shield className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">24/7 Security</CardTitle>
                  <CardDescription>Safety-first residential environment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Gated premises with trained security personnel, CCTV surveillance, and
                    controlled entry systems ensure a safe living environment around the clock
                    for all residents.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Separator />

      {/* Room Types */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Room Types
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                Choose from a range of accommodation options to suit your budget and preference.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400 mb-3">
                    <User className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Single Rooms</CardTitle>
                  <CardDescription>Private, self-contained spaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Ideal for students who value privacy and quiet study time. Single rooms
                    come with a bed, study desk, wardrobe, and access to shared washroom
                    facilities or en-suite options in premium blocks.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950/30 dark:text-teal-400 mb-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Double Rooms</CardTitle>
                  <CardDescription>Shared comfort with one roommate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    A balanced option offering companionship and affordability. Double rooms
                    feature two beds, individual study desks, ample storage, and shared
                    washroom facilities cleaned daily.
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
                  <CardTitle className="text-lg">Shared Rooms</CardTitle>
                  <CardDescription>Economical multi-occupancy options</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Budget-friendly shared rooms accommodate three to four students with
                    individual beds and storage. These spaces encourage community building
                    and are popular among first-year students.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Separator />

      {/* Booking, Fees, Rules */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Booking, Fees & Regulations
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                Transparent processes and clear policies ensure a smooth accommodation experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-700 dark:bg-indigo-950/30 dark:text-indigo-400 mb-3">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Booking Process</CardTitle>
                  <CardDescription>Reserve your room in three steps</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside space-y-1">
                    <li>Complete the online hostel application form after admission.</li>
                    <li>Receive room allocation via email and confirm acceptance.</li>
                    <li>Pay the hostel deposit and collect your access card during orientation week.</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime-50 text-lime-700 dark:bg-lime-950/30 dark:text-lime-400 mb-3">
                    <Receipt className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Hostel Fees</CardTitle>
                  <CardDescription>Affordable, semester-based rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    Fees vary by room type and are charged per semester. Payments can be
                    made via bank transfer, mobile money, or at the university finance office.
                    Need-based payment plans are available through the Dean of Students Affairs.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400 mb-3">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-lg">Hostel Rules</CardTitle>
                  <CardDescription>Respect, safety, and community</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed list-disc list-inside space-y-1">
                    <li>Observe quiet hours from 10:00 PM to 6:00 AM on weekdays.</li>
                    <li>No cooking appliances in rooms; use designated common kitchens.</li>
                    <li>Visitors must sign in at the gate and leave by 9:00 PM.</li>
                    <li>Alcohol, drugs, and weapons are strictly prohibited.</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Separator />

      {/* Off-Campus Guidance */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Off-Campus Guidance
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-3xl">
                For students who prefer private housing, the Accommodation Office provides
                verified listings and safety advice.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700 dark:bg-cyan-950/30 dark:text-cyan-400 shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Verified Rental Listings
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        The Accommodation Office maintains a directory of vetted landlords
                        and rental properties near campus. Students receive guidance on
                        lease agreements, fair pricing, and proximity to public transport.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400 shrink-0">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        Safety & Community Tips
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        We recommend choosing well-lit neighbourhoods, inspecting properties
                        before signing, and registering your off-campus address with the
                        Student Affairs office for emergency contact purposes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <Home className="h-8 w-8 mx-auto text-emerald-600 mb-4" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
                Ready to Apply for Accommodation?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
                Download the hostel application form, read the terms and conditions, and
                submit your documents to secure your place.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/downloads">
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download Application Forms
                  </Button>
                </Link>
                <Link href="/contacts">
                  <Button variant="outline">
                    Contact Accommodation Office
                    <ArrowRight className="ml-2 h-4 w-4" />
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
