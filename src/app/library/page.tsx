"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ExternalLink,
  BookOpen,
  Globe,
  FlaskConical,
  Database,
  Cpu,
  Lock,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const databases = [
  {
    name: "PubMed",
    description:
      "Comprehensive biomedical literature database from the U.S. National Library of Medicine. Access abstracts, full-text articles, and clinical trial records.",
    url: "https://pubmed.ncbi.nlm.nih.gov",
    icon: FlaskConical,
    color: "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400",
    category: "Medical & Health Sciences",
  },
  {
    name: "JSTOR",
    description:
      "Digital library of academic journals, books, and primary sources spanning humanities, social sciences, and natural sciences.",
    url: "https://www.jstor.org",
    icon: BookOpen,
    color: "bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400",
    category: "Humanities & Social Sciences",
  },
  {
    name: "ScienceDirect",
    description:
      "Elsevier's peer-reviewed scientific, technical, and medical research platform with over 18 million articles and book chapters.",
    url: "https://www.sciencedirect.com",
    icon: Database,
    color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400",
    category: "Science & Technology",
  },
  {
    name: "IEEE Xplore",
    description:
      "Digital library for IEEE journals, conference proceedings, and standards in electrical engineering, computer science, and electronics.",
    url: "https://ieeexplore.ieee.org",
    icon: Cpu,
    color: "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400",
    category: "Engineering & Computing",
  },
];

const recentPapers = [
  {
    title: "Lymphedema Management in Sub-Saharan Africa: A Systematic Review",
    authors: "Mwangi J., Omondi P., Kimani R.",
    year: 2025,
    repository: "BSU-IR",
  },
  {
    title: "AI-Driven Diagnostics for Tropical Diseases in Low-Resource Settings",
    authors: "Otieno D., Njoroge S., Alio M.",
    year: 2025,
    repository: "BSU-IR",
  },
  {
    title: "Governance Models for Multi-Campus University Systems in East Africa",
    authors: "Kamau L., Mutua A.",
    year: 2024,
    repository: "BSU-IR",
  },
  {
    title: "Bio-Prospecting of Indigenous Medicinal Plants in the Kenyan Highlands",
    authors: "Wanjiku N., Onyango J.",
    year: 2024,
    repository: "BSU-IR",
  },
];

export default function LibraryPage() {
  const [query, setQuery] = React.useState("");
  const [searching, setSearching] = React.useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setSearching(true);
    setTimeout(() => setSearching(false), 1200);
  };

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-800/40 px-3 py-1 text-xs font-medium text-emerald-200 mb-4">
              <BookOpen className="h-3.5 w-3.5" />
              E-Library & Digital Resources
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              BSU E-Library Portal
            </h1>
            <p className="text-lg text-slate-300">
              Access the BSU Institutional Repository (BSU-IR), integrated journal
              databases, and EzProxy remote access for off-campus learning.
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-10 bg-white dark:bg-slate-950 border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch} className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search BSU-IR papers, dissertations, and institutional publications..."
                className="pl-9 h-10"
              />
            </div>
            <Button type="submit" disabled={searching} className="bg-emerald-600 hover:bg-emerald-700">
              {searching ? "Searching..." : "Search"}
            </Button>
          </form>
          <p className="text-xs text-slate-500 mt-2">
            Try: lymphology, digital health, governance, biotechnology, tropical diseases
          </p>
        </div>
      </section>

      {/* EzProxy Banner */}
      <section className="py-8 bg-amber-50 dark:bg-amber-950/20 border-b border-amber-100 dark:border-amber-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-amber-200 dark:border-amber-800 bg-white/60 dark:bg-slate-950/60">
            <CardContent className="p-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 shrink-0">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Off-Campus EzProxy Remote Access
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Access subscribed journals and databases from anywhere using
                      your CampusConnect credentials via our EzProxy authentication
                      gateway.
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="shrink-0">
                  <Globe className="mr-2 h-4 w-4" />
                  Launch EzProxy Login
                </Button>
              </div>
              <div className="mt-4 rounded-md bg-amber-100/50 dark:bg-amber-900/20 p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-800 dark:text-amber-400">
                    <p className="font-medium mb-1">How to access remotely:</p>
                    <ol className="list-decimal list-inside space-y-0.5">
                      <li>Click the EzProxy Login button above.</li>
                      <li>Enter your CampusConnect Student / Staff ID and password.</li>
                      <li>Once authenticated, you will be redirected to the database of your choice.</li>
                      <li>Bookmark the proxied URL for future off-campus sessions.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integrated Databases */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Integrated Databases
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Premium research databases accessible to all BSU students and staff.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {databases.map((db) => (
              <Card
                key={db.name}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${db.color}`}
                    >
                      <db.icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline" className="text-[10px]">{db.category}</Badge>
                  </div>
                  <CardTitle className="text-base">{db.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {db.description}
                  </p>
                  <a
                    href={db.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    Access Database
                    <ExternalLink className="ml-1 h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent BSU-IR Papers */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
                Recent BSU-IR Publications
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Latest additions to the BSU Institutional Repository.
              </p>
            </div>
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="ml-1 h-3.5 w-3.5" />
            </Button>
          </div>

          <div className="space-y-3">
            {recentPapers.map((paper) => (
              <Card key={paper.title} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                        {paper.title}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {paper.authors} · {paper.year} · {paper.repository}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-3.5 w-3.5 mr-1" /> View
                    </Button>
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
