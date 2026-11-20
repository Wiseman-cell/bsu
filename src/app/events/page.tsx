import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { prisma } from "@/lib/prisma";
import { ArrowLeft, Calendar, MapPin, Clock, CalendarDays } from "lucide-react";

export const metadata = {
  title: "Calendar of Events | Brooklyn State University",
  description:
    "Discover upcoming events, activities, and important dates at Brooklyn State University.",
};

export const dynamic = "force-dynamic";

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function formatTime(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(date));
}

export default async function EventsPage() {
  const now = new Date();

  const upcomingEvents = await prisma.event.findMany({
    where: {
      startDate: {
        gte: now,
      },
    },
    orderBy: { startDate: "asc" },
  });

  const pastEvents = await prisma.event.findMany({
    where: {
      startDate: {
        lt: now,
      },
    },
    orderBy: { startDate: "desc" },
    take: 3,
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Calendar of Events
            </h1>
            <p className="text-lg text-slate-300">
              Discover upcoming events, activities, and important dates across the BSU community.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Upcoming Events
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                Mark your calendar and be part of the BSU experience.
              </p>
            </div>
          </ScrollReveal>

          {upcomingEvents.length === 0 ? (
            <ScrollReveal>
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                    <CalendarDays className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                  </div>
                  <CardTitle>No Upcoming Events</CardTitle>
                  <CardDescription>
                    There are no upcoming events scheduled at this time. Check back soon for updates.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <ScrollReveal key={event.id} delay={index * 100}>
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                    <CardHeader className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{event.category}</Badge>
                        {event.featured && (
                          <Badge variant="default">Featured</Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-snug">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="space-y-1 mt-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {formatDate(event.startDate)}
                            {event.endDate &&
                              event.endDate.toDateString() !==
                                event.startDate.toDateString() && (
                                <> - {formatDate(event.endDate)}</>
                              )}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{formatTime(event.startDate)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mb-10">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                  Recent Past Events
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  A look back at recent happenings at BSU.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <ScrollReveal key={event.id} delay={index * 100}>
                  <Card className="h-full flex flex-col opacity-80 hover:opacity-100 transition-opacity">
                    <CardHeader className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">{event.category}</Badge>
                      </div>
                      <CardTitle className="text-lg leading-snug">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="space-y-1 mt-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {formatDate(event.startDate)}
                            {event.endDate &&
                              event.endDate.toDateString() !==
                                event.startDate.toDateString() && (
                                <> - {formatDate(event.endDate)}</>
                              )}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{event.location}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Home */}
      <section className="pb-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
