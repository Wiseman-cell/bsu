import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import {
  ImageIcon,
  Building2,
  TreePine,
  CalendarDays,
  HeartHandshake,
  Users,
  FlaskConical,
} from "lucide-react";

export const metadata = {
  title: "Photo Gallery | Brooklyn State University",
  description:
    "Explore moments from campus life, events, and achievements at Brooklyn State University.",
};

export const dynamic = "force-dynamic";

const categoryConfig: Record<
  string,
  { label: string; icon: typeof ImageIcon; color: string; bg: string }
> = {
  Campuses: {
    label: "Campuses",
    icon: Building2,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  Facilities: {
    label: "Facilities",
    icon: TreePine,
    color: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-100 dark:bg-sky-900/30",
  },
  Events: {
    label: "Events",
    icon: CalendarDays,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  Outreach: {
    label: "Outreach",
    icon: HeartHandshake,
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-100 dark:bg-rose-900/30",
  },
  "Student Life": {
    label: "Student Life",
    icon: Users,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-100 dark:bg-violet-900/30",
  },
  Research: {
    label: "Research",
    icon: FlaskConical,
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-100 dark:bg-teal-900/30",
  },
};

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const grouped: Record<string, typeof images> = {};
  for (const img of images) {
    const cat = img.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(img);
  }

  const categories = Object.keys(grouped).sort(
    (a, b) =>
      Object.keys(categoryConfig).indexOf(a) -
      Object.keys(categoryConfig).indexOf(b)
  );

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-rose-800/40 px-3 py-1 text-xs font-medium text-rose-200 mb-4">
              <ImageIcon className="h-3.5 w-3.5" />
              Photo Gallery
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Photo Gallery
            </h1>
            <p className="text-lg text-slate-300">
              Explore moments from campus life, events, facilities, and
              achievements at Brooklyn State University.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {images.length === 0 ? (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>No images available</CardTitle>
                <CardDescription>
                  Gallery images will appear here once they are uploaded.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-40 items-center justify-center rounded-lg bg-slate-50 dark:bg-slate-900">
                  <ImageIcon className="h-10 w-10 text-slate-300 dark:text-slate-600" />
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-16">
              {categories.map((cat, idx) => {
                const config = categoryConfig[cat] ?? {
                  label: cat,
                  icon: ImageIcon,
                  color: "text-slate-600 dark:text-slate-400",
                  bg: "bg-slate-100 dark:bg-slate-900/30",
                };
                const Icon = config.icon;
                const items = grouped[cat];

                return (
                  <ScrollReveal key={cat} delay={idx * 100}>
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-lg shrink-0 ${config.bg} ${config.color}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                          {config.label}
                        </h2>
                        <Badge variant="secondary" className="text-xs">
                          {items.length} photo{items.length !== 1 ? "s" : ""}
                        </Badge>
                      </div>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item) => (
                          <Card
                            key={item.id}
                            className="hover:shadow-md transition-shadow overflow-hidden"
                          >
                            {/* Placeholder Image Area */}
                            <div
                              className={`relative flex h-56 items-center justify-center ${config.bg}`}
                            >
                              {item.imageUrl ? (
                                <img
                                  src={item.imageUrl}
                                  alt={item.title}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex flex-col items-center gap-2">
                                  <Icon
                                    className={`h-10 w-10 ${config.color}`}
                                  />
                                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Image placeholder
                                  </span>
                                </div>
                              )}
                              <div className="absolute top-3 right-3">
                                <Badge
                                  variant="secondary"
                                  className="bg-white/90 dark:bg-slate-900/90 text-xs"
                                >
                                  {config.label}
                                </Badge>
                              </div>
                            </div>

                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">
                                {item.title}
                              </CardTitle>
                            </CardHeader>
                            {item.description && (
                              <CardContent className="pt-0">
                                <p className="text-sm text-slate-600 dark:text-slate-300">
                                  {item.description}
                                </p>
                              </CardContent>
                            )}
                          </Card>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
