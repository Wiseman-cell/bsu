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
import { ArrowLeft, Calendar, Newspaper } from "lucide-react";

export const metadata = {
  title: "News & Updates | Brooklyn State University",
  description:
    "Stay informed with the latest news, stories, and updates from Brooklyn State University.",
};

export const dynamic = "force-dynamic";

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default async function NewsPage() {
  const articles = await prisma.newsArticle.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              News & Updates
            </h1>
            <p className="text-lg text-slate-300">
              Stay informed with the latest stories, announcements, and developments
              from Brooklyn State University.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <ScrollReveal>
              <Card className="max-w-2xl mx-auto">
                <CardHeader className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                    <Newspaper className="h-6 w-6 text-slate-600 dark:text-slate-300" />
                  </div>
                  <CardTitle>No News Articles Yet</CardTitle>
                  <CardDescription>
                    Check back soon for the latest updates from Brooklyn State University.
                  </CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <ScrollReveal key={article.id} delay={index * 100}>
                  <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                    <CardHeader className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        {article.featured && (
                          <Badge variant="default">Featured</Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg leading-snug">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(article.publishedAt)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                        {article.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
